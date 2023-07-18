import Hero from "../componenents/Hero";
import List from "../componenents/List";
import Sort from "../componenents/Sort";

function HomePage() {
  return (
    <section>
      <Hero headerText="Discover the best new AI tools" subheaderText="Supercharge your productivity with artificial intelligence." />
      <Sort priceFilter="All" categoryFilter="Featured"/>
      <List />
    </section>
  );
}

export default HomePage;
