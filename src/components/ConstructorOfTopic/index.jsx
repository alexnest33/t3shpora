import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const Paragraph = styled.p`
  color: black;
`;
const BlackText = styled.b`
  color: #859900;
`;

const ConstructorOfTopic = ({ title, content }) => {
  const switchers = (content) => {
    return content.map((item) => {
      const [[tag, text]] = Object.entries(item);
      switch (tag) {
        case "p": {
          return <Paragraph key={crypto.randomUUID()}>{text}</Paragraph>;
        }
        case "h1": {
          return <h1 key={crypto.randomUUID()}>{text}</h1>;
        }
        case "h2": {
          return <h2 key={crypto.randomUUID()}>{text}</h2>;
        }
        case "h3": {
          return <h3 key={crypto.randomUUID()}>{text}</h3>;
        }
        case "code": {
          return (
            <SyntaxHighlighter
              language="jsx"
              style={solarizedlight}
              key={crypto.randomUUID()}
            >
              {text}
            </SyntaxHighlighter>
          );
        }
        case "ul": {
          return (
            <ul key={crypto.randomUUID()}>
              {text.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          );
        }
        case "b": {
          return <BlackText key={crypto.randomUUID()}>{text}</BlackText>;
        }
        case "a": {
          const { href, text: linkText } = text;
          return (
            <a
              key={crypto.randomUUID()}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              {linkText}
            </a>
          );
        }

        default: {
          return JSON.stringify(text);
        }
      }
    });
  };

  return (
    <>
      <h1>{title}</h1>
      {switchers(content)}
    </>
  );
};

export default ConstructorOfTopic;
