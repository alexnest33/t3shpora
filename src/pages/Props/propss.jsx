import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Props = () => {
  const InlineCode = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

  const StringCode = `
  // Parent.jsx
import Child from './Child';

function Parent() {
  return <Child name="Паша" />;
}
`;

  const StringCode2 = `
// Child.jsx
function Child({ name }) {
  return <p>Привет, {name}!</p>;
}
`;

  const StringCode3 = `
function Card(props) {
    return <h2>{props.title}</h2>;
  }`;

  const StringCode4 = `
  function Card({ title }) {
    return <h2>{title}</h2>;
  }`;

  return (
    <>
      <h1>Props (пропсы)</h1>
      <p>
        <strong>Props</strong> (сокращение от “properties”) — это механизм
        передачи данных от родительского компонента к дочернему.
      </p>
      <p>
        Они работают только сверху вниз (однонаправленный поток), и
        позволяют сделать компоненты переиспользуемыми и настраиваемыми**.
      </p>
      <p>
        Пропсы можно передавать как строки, числа, булевые значения, функции,
        объекты и даже JSX. Пропсы это те же самые параметры функции в JS
      </p>

      <p>
        <strong> Пример 1: передача строки как пропса</strong>
        <SyntaxHighlighter language="jsx" style={dark}>
          {StringCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={dark}>
          {StringCode2}
        </SyntaxHighlighter>
        <p>
          <strong>Обьяснение:</strong>
        </p>
        <p>
          Родитель <InlineCode>Parent</InlineCode> передаёт строковый проп{" "}
          <InlineCode>name</InlineCode> дочернему компоненту{" "}
          <InlineCode>Child</InlineCode>.
        </p>
        <p>
          Внутри <InlineCode>Child</InlineCode> мы получаем его как аргумент в
          объекте пропсов (или через деструктуризацию).
          <p>
            <strong> Деструктуризация пропсов</strong>
            <p>Ты можешь передавать пропсы через объект:</p>
            <SyntaxHighlighter language="jsx" style={dark}>
              {StringCode3}
            </SyntaxHighlighter>
            <p>
              <strong>Но чаще используют деструктуризацию:</strong>
            </p>
            <SyntaxHighlighter language="jsx" style={dark}>
              {StringCode4}
            </SyntaxHighlighter>
            <p>Это короче и удобнее, особенно если пропсов много.</p>
            <p>
              <strong>Итоги:</strong>
            </p>

            <ul>
              <li>Пропсы — это способ передавать данные от родителя к дочке</li>
              <li>
                Они <strong>только для чтения</strong> — нельзя менять их
                напрямую внутри компонента
              </li>
              <li>
                Можно передавать любые типы: строки, числа, объекты, функции,
                JSX
              </li>
              <li>
                Специальный проп <InlineCode>children</InlineCode> используется
                для вложенного содержимого между тегами
              </li>
            </ul>
          </p>
        </p>
      </p>
    </>
  );
};


export default Props