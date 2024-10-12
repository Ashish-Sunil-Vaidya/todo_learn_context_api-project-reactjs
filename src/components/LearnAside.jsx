import "../styles/LearnAside.css";
import Example from "./Example";
import ReactQuote from "./ReactQuote";
import { examples, resources, community } from "../../public/data";

function LearnAside() {
  return (
    <aside className="learn">
      <header>
        <h1 className="mvctodo-topic">React</h1>
      </header>
      <ul className="examples-container">
        {examples
          ? examples.map(({ example_name, demo_link, src_link }) => {
              return (
                <Example
                  key={example_name}
                  demo_link={demo_link}
                  src_link={src_link}
                >
                  {example_name}
                </Example>
              );
            })
          : "Failed to retrieve items"}
      </ul>
      <hr style={{ border: "dashed 1px var(--faded-black)" }} />
      <ReactQuote />
      <hr style={{ border: "dashed 1px var(--faded-black)" }} />
      <h2>Resources</h2>
      <ul className="resources-container">
        {resources
          ? resources.map(({ topic, link }) => {
              return (
                <li key={topic}>
                  <a href={link}>{topic}</a>
                </li>
              );
            })
          : "Failed to retrieve items"}
      </ul>
      <h2>Community</h2>
      <ul className="community-container">
        {community
          ? community.map(({ topic, link }) => {
              return (
                <li key={topic}>
                  <a href={link}>{topic}</a>
                </li>
              );
            })
          : "Failed to retrieve items"}
      </ul>
    </aside>
  );
}

export default LearnAside;
