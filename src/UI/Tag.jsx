import classes from "./Tag.module.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  categoryOptions,
  possibleFilterCombos,
  priceOptions,
} from "../data/FilterOptions";

function Tag(props) {
  function filterIsSelected() {
    if (props.children === props.currentFilter) {
      return true;
    } else {
      return false;
    }
  }

  // TODO: See if the tagPath function can be simplified
  function tagPath() {
    const currentPath = useLocation().pathname.slice(1);
    const currentPathIsPrice = priceOptions
      .map((option) => option.toLowerCase())
      .some((option) => `${option}-tools` === currentPath);
    const currentPathIsCategory = categoryOptions
      .map((option) => option.toLowerCase())
      .some((option) => `${option}-tools` === currentPath);
    const currentPathIsCompound = possibleFilterCombos.some(
      (combo) =>
        `${combo.priceFilter.toLowerCase()}-${combo.categoryFilter.toLowerCase()}-tools` ===
        currentPath
    );
    const currentCompoundFilter = possibleFilterCombos.find(
      (combo) =>
        `${combo.priceFilter.toLowerCase()}-${combo.categoryFilter.toLowerCase()}-tools` ===
        currentPath
    );

    if (currentPath) {
      if (currentPath === `${props.children.toLowerCase()}-tools`) {
        return "/";
      } else if (
        (currentPathIsPrice && props.type === "price") ||
        (currentPathIsCategory && props.type === "category")
      ) {
        if (
          (props.type === "price" && props.children === "All") ||
          (props.type === "category" && props.children === "Featured")
        ) {
          return "/";
        } else {
          return `/${props.children.toLowerCase()}-tools`;
        }
      } else if (currentPathIsPrice && props.type === "category") {
        if (props.children === "Featured") {
          return currentPath;
        } else {
          return `/${currentPath.substring(
            0,
            currentPath.length - 6
          )}-${props.children.toLowerCase()}-tools`;
        }
      } else if (currentPathIsCategory && props.type === "price") {
        if (props.children === "All") {
          return currentPath;
        } else {
          return `/${props.children.toLowerCase()}-${currentPath}`;
        }
      } else if (currentPathIsCompound && props.type === "category") {
        if (
          props.children === "Featured" ||
          props.children === currentCompoundFilter.categoryFilter
        ) {
          return `/${currentPath.substring(
            0,
            currentCompoundFilter.priceFilter.length
          )}-tools`;
        } else {
          return `/${currentPath.substring(
            0,
            currentCompoundFilter.priceFilter.length
          )}-${props.children.toLowerCase()}-tools`;
        }
      } else if (currentPathIsCompound && props.type === "price") {
        if (
          props.children === "All" ||
          props.children === currentCompoundFilter.priceFilter
        ) {
          return `/${currentPath.substring(
            currentCompoundFilter.priceFilter.length + 1,
            currentPath.length
          )}`;
        } else {
          return `/${props.children.toLowerCase()}-${currentPath.substring(
            currentCompoundFilter.priceFilter.length + 1,
            currentPath.length
          )}`;
        }
      }
    } else {
      if (
        (props.type === "price" && props.children === "All") ||
        (props.type === "category" && props.children === "Featured")
      ) {
        return "/";
      } else if (
        (props.type === "price" && props.children !== "All") ||
        (props.type === "category" && props.children !== "Featured")
      ) {
        return `/${props.children.toLowerCase()}-tools`;
      }
    }
  }

  return (
    <Link
      to={tagPath()}
      className={filterIsSelected() ? classes.selectedTag : classes.tag}
      onClick={props.close}
    >
      {props.children}
    </Link>
  );
}

export default Tag;
