import Tool from "./Tool";
import classes from "./List.module.css";

function List() {
  const DUMMY_DATA = [
    {
      title: "ChatGPT",
      thumbnail:
        "https://ph-files.imgix.net/c19875b6-dac0-49da-8faa-f2fe24b98cc2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
      tagline: "Optimizing language models for dialogue",
      description:
        "OpenAI has released a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.",
      link: "https://chat.openai.com/",
      twitter: false,
      tags: ["LLM"],
    },
    {
      title: "Midjourney",
      thumbnail:
        "https://ph-files.imgix.net/25878109-5a7a-4b7b-924e-877109a0824f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
      tagline: "Create AI generated images from a text prompt",
      description:
        'Midjourney lets you create images (paintings, digital art, logos and much more) simply by writing a prompt. Try to prompt it: - "A deep ocean monster" - "The dawn of a universe" - "The iron throne" And check out its results',
      link: "https://www.midjourney.com/home/",
      twitter: "https://twitter.com/midjourney",
      tags: ["Image Generation"],
    },
  ];

  return (
    <ul className={classes.list}>
      {DUMMY_DATA.map((item) => (
        <Tool
          key={item.title}
          title={item.title}
          thumbnail={item.thumbnail}
          tagline={item.tagline}
          description={item.description}
          link={item.link}
          twitter={item.twitter}
          tags={item.tags}
        />
      ))}
    </ul>
  );
}

export default List;
