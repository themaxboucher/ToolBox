import Hero from "../componenents/Hero";
import List from "../componenents/List";
import Sort from "../componenents/Sort";

function ChatToolsPage() {
  return (
    <section>
      <Hero headerText="AI Chat Tools" subheaderText="The best new AI chat tools."/>
      <Sort />
      <List />
    </section>
  );
}

export default ChatToolsPage;