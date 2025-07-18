import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";


const Hoc = () => {


    const InlineCode = styled.code`
  background: gray;
  color: white;
  font-family: "Fira Code", monospace;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 16px;
`;

const hocAuthExample = `
function withAuth(Component) {
  return function WrappedComponent(props) {
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    if (!isAuthenticated) {
      return <p>Пожалуйста, войдите в систему</p>;
    }

    return <Component {...props} />;
  };
}

function Dashboard() {
  return <h1>Добро пожаловать в панель управления</h1>;
}

export default withAuth(Dashboard);
`;

const hocLoggingExample = `
function withLogging(Component) {
  return function WrappedComponent(props) {
    console.log("Рендер компонента:", Component.name);

    return <Component {...props} />;
  };
}

function Button(props) {
  return <button {...props}>Нажми меня</button>;
}

export default withLogging(Button);
`;

const hocBasicExample = `
const withExtraProp = (Component) => (props) => {
  return <Component extra="Я добавлен HOC" {...props} />;
};

function SimpleComponent({ extra }) {
  return <div>{extra}</div>;
}

export default withExtraProp(SimpleComponent);
`;


    return(

        <div>
      <h2> Higher-Order Components (HOC) в React</h2>

      <p>
        HOC — это функция, которая принимает компонент и возвращает новый компонент с дополнительным поведением.
        Это паттерн для повторного использования логики между компонентами.
      </p>

      <h3>⚠️ Какую проблему решают HOC?</h3>
      <p>
        Когда нужно добавить одинаковое поведение или данные нескольким компонентам, не дублируя код, можно создать HOC. Это помогает избежать копирования, упрощает поддержку и расширение функционала.
      </p>

      <h3>Пример: базовый HOC, добавляющий пропсы</h3>
      <SyntaxHighlighter language="jsx" style={dark}>
        {hocBasicExample}
      </SyntaxHighlighter>

      <h3>Пример: HOC для авторизации</h3>
      <p>HOC может проверять, авторизован ли пользователь, и в зависимости от этого показывать либо контент, либо сообщение о входе:</p>
      <SyntaxHighlighter language="jsx" style={dark}>
        {hocAuthExample}
      </SyntaxHighlighter>

      <h3>Пример: HOC для логирования рендера</h3>
      <p>HOC, который логирует в консоль каждый рендер обёрнутого компонента — полезно для отладки и оптимизации:</p>
      <SyntaxHighlighter language="jsx" style={dark}>
        {hocLoggingExample}
      </SyntaxHighlighter>

      <h3>⚙️ Когда использовать HOC?</h3>
      <ul>
        <li>Когда нужно разделить и повторно использовать логику между разными компонентами.</li>
        <li>Для внедрения поведения, не зависящего от UI — например, авторизация, логирование, кеширование.</li>
        <li>При работе с классическими React-компонентами (HOC исторически были популярны до появления хуков).</li>
      </ul>

      <h3>Важные моменты и советы</h3>
      <ul>
        <li>HOC не меняют поведение оригинального компонента, они создают новый с расширенной функциональностью.</li>
        <li>Важно сохранять рефы и имена компонентов (можно использовать <InlineCode>React.forwardRef</InlineCode> и <InlineCode>displayName</InlineCode>).</li>
        <li>С появлением хуков часто проще использовать кастомные хуки вместо HOC.</li>
        <li>Множественные вложенные HOC могут усложнять отладку и читать код становится труднее.</li>
      </ul>

      <h3>Итог</h3>
      <p>
        HOC — мощный паттерн для переиспользования логики, который позволяет расширять компоненты без дублирования кода. Сегодня с хуками и контекстом он используется реже, но в проектах с классами или для специфических задач он остаётся полезным.
      </p>
    </div>

    )
}


export default Hoc;