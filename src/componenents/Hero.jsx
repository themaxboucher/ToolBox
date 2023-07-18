import classes from "./Hero.module.css";

function Hero(props) {
  return (
    <div className={classes.hero}>
      <h1>{props.headerText}</h1>
      <p>{props.subheaderText}</p>
    </div>
  );
}

export default Hero;
