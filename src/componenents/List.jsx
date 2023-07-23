import Tool from "./Tool";
import classes from "./List.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Firebase imports
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";
import LoadingList from "./LoadingList";

function List(props) {
  const [toolsData, setToolsData] = useState(null);
  const [queryType, setQueryType] = useState(null);
  const filters = props.filters;
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user && filters == "Saved") {
      const savedQuery = query(
        collection(db, "tools"),
        where("savedBy", "array-contains", user.uid),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(savedQuery);
    } else if (
      filters.priceFilter === "All" &&
      filters.categoryFilter === "Featured"
    ) {
      const allQuery = query(
        collection(db, "tools"),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(allQuery);
    } else if (
      filters.priceFilter === "Free" &&
      filters.categoryFilter === "Featured"
    ) {
      const freePricingQuery = query(
        collection(db, "tools"),
        where("pricing.free", "==", true),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(freePricingQuery);
    } else if (
      filters.priceFilter === "Paid" &&
      filters.categoryFilter === "Featured"
    ) {
      const paidPricingQuery = query(
        collection(db, "tools"),
        where("pricing.paid", "==", true),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(paidPricingQuery);
    } else if (
      filters.priceFilter === "All" &&
      filters.categoryFilter !== "Featured"
    ) {
      const categoryQuery = query(
        collection(db, "tools"),
        where("tags", "array-contains", filters.categoryFilter),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(categoryQuery);
    } else if (
      filters.priceFilter === "Free" &&
      filters.categoryFilter !== "Featured"
    ) {
      const freeCompoundQuery = query(
        collection(db, "tools"),
        where("pricing.free", "==", true),
        where("tags", "array-contains", filters.categoryFilter),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(freeCompoundQuery);
    } else if (
      filters.priceFilter !== "All" &&
      filters.categoryFilter !== "Featured"
    ) {
      const paidCompoundQuery = query(
        collection(db, "tools"),
        where("pricing.paid", "==", true),
        where("tags", "array-contains", filters.categoryFilter),
        orderBy("saves", "desc"),
        orderBy("dateCreated"),
        limit(200)
      );
      setQueryType(paidCompoundQuery);
    }

  }, [filters, user]); // Execute the effect when filters change

  useEffect(() => {
    // Fetch data when queryType is set
    if (queryType) {
      async function getToolsData() {
        try {
          const querySnapshot = await getDocs(queryType);
          const fetchedData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setToolsData(fetchedData);
        } catch (error) {
          console.log(error);
        }
      }
      getToolsData();
    }
  }, [queryType]); // Fetch data when queryType changes

  useEffect(() => {
    console.log(toolsData); // Log the updated array whenever it changes
  }, [toolsData]);

  return (
    <ul className={classes.list}>
      {toolsData === null ? (
        <LoadingList repeatTimes={30} />
      ) : toolsData.length === 0 && filters !== "Saved" ? (
        <div className={classes.listFallback}>
          <h2>There are currently no AI tools matching those filters.</h2>
          <p>
            Feel free to submit a tool <Link to="/submit">here</Link>.
          </p>
        </div>
      ) : toolsData.length === 0 && filters === "Saved" ? (
        <div className={classes.listFallback}>
          <h2>You haven't saved any tools yet.</h2>
          <p>
            Go save tools <Link to="/">here</Link>.
          </p>
        </div>
      ) : (
        toolsData.map((toolObject) => (
          <Tool key={toolObject.id} toolObject={toolObject} />
        ))
      )}
    </ul>
  );
}

export default List;
