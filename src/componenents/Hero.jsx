import classes from "./Hero.module.css";

function Hero(props) {
  const priceFilter = props.filterCombo.priceFilter;
  const categoryFilter = props.filterCombo.categoryFilter;

  function headerText() {
    if (priceFilter === "All" && categoryFilter == "Featured") {
      return (
        <>
          <h1>Discover the Best New <b>AI Tools</b></h1>
          <p>
            ToolBox unearths the most useful and impressive AI tools so you
            never miss out.
          </p>
        </>
      );
    } else if (priceFilter === "All" && categoryFilter !== "Featured") {
      return <h1>AI <b>{categoryFilter}</b> Tools</h1>;
    } else if (priceFilter !== "All" && categoryFilter === "Featured") {
      return <h1><b>{priceFilter}</b> AI Tools</h1>;
    } else if (priceFilter !== "All" && categoryFilter !== "Featured") {
      return (
        <h1>
          <b>{priceFilter}</b> AI <b>{categoryFilter}</b> Tools
        </h1>
      );
    }
  }

  return <div className={classes.hero}>{headerText()}</div>;
}

export default Hero;
