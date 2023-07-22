import Tool from "./Tool";
import classes from "./List.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Firebase imports
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";

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
        limit(200)
      );
      setQueryType(savedQuery);
    } else if (
      filters.priceFilter === "All" &&
      filters.categoryFilter === "Featured"
    ) {
      const allQuery = query(collection(db, "tools"), limit(200));
      setQueryType(allQuery);
    } else if (
      filters.priceFilter !== "All" &&
      filters.categoryFilter === "Featured"
    ) {
      const pricingQuery = query(
        collection(db, "tools"),
        where("pricing", "==", filters.priceFilter),
        limit(200)
      );
      setQueryType(pricingQuery);
    } else if (
      filters.priceFilter === "All" &&
      filters.categoryFilter !== "Featured"
    ) {
      const categoryQuery = query(
        collection(db, "tools"),
        where("tags", "array-contains", filters.categoryFilter),
        limit(200)
      );
      setQueryType(categoryQuery);
    } else if (
      filters.priceFilter !== "All" &&
      filters.categoryFilter !== "Featured"
    ) {
      const compoundQuery = query(
        collection(db, "tools"),
        where("pricing", "==", filters.priceFilter),
        where("tags", "array-contains", filters.categoryFilter),
        limit(200)
      );
      setQueryType(compoundQuery);
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
        <h2>Loading...</h2>
      ) : toolsData.length === 0 ? (
        <div className={classes.listFallback}>
          <h2>There are currently no AI tools matching those filters.</h2>
          <p>
            Feel free to submit a tool <Link to="/submit">here</Link>.
          </p>
        </div>
      ) : (
        toolsData.map((item) => (
          <Tool
            key={item.name}
            title={item.name}
            thumbnail={item.thumbnail}
            tagline={item.tagline}
            description={item.description}
            link={item.link}
            price={item.pricing}
            tags={item.tags}
            keyFeatures={item.keyFeatures}
          />
        ))
      )}
    </ul>
  );
}

export default List;
