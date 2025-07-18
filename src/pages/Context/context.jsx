import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Context = () => {




const InlineCode = styled.code`
  background: gray;
  color: white;
  font-family: "Fira Code", monospace;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 16px;
`;

const codePropsDrilling = `
function ComponentA({ theme }) {
  return <ComponentB theme={theme} />;
}

function ComponentB({ theme }) {
  return <ComponentC theme={theme} />;
}

function ComponentC({ theme }) {
  return <button>{theme}</button>;
}
`;

const codeContextBasic = `
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme === "dark" ? "#333" : "#eee", color: theme === "dark" ? "#eee" : "#333" }}>
      Текущая тема: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}
`;

const codeContextConsumer = `
import React, { createContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button style={{ background: theme === "dark" ? "#333" : "#eee" }}>
          Текущая тема: {theme}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}
`;

const codeMultipleProviders = `
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Паша" }}>
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

function Toolbar() {
  return (
    <>
      <UserInfo />
      <ThemeButton />
    </>
  );
}
`;

const codeUseContextMultiple = `
import { useContext } from "react";

function UserInfo() {
  const user = useContext(UserContext);
  return <p>Пользователь: {user.name}</p>;
}

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === "dark" ? "#333" : "#eee" }}>Тема: {theme}</button>;
}
`;






  return (
    <div>
   <h2> React Context — решение проблемы <InlineCode>props drilling</InlineCode></h2>

<p>
  В React, когда нужно передать данные от родительского компонента к глубоким потомкам, приходится прокидывать эти данные через множество промежуточных компонентов, которые сами их не используют. Такая ситуация называется <strong>props drilling</strong>.
</p>

<h3>Пример проблемы props drilling</h3>
<SyntaxHighlighter language="jsx" style={dark}>
  {codePropsDrilling}
</SyntaxHighlighter>

<p>
  Здесь компонент <InlineCode>ComponentC</InlineCode> нуждается в данных <InlineCode>theme</InlineCode>, но нам приходится передавать его через <InlineCode>ComponentA</InlineCode> и <InlineCode>ComponentB</InlineCode>, которые эти данные не используют. Это усложняет код и затрудняет поддержку.
</p>

<h3>Что такое React Context и как он помогает</h3>
<p>
  React Context — это механизм для глобальной передачи данных по дереву компонентов без необходимости передавать пропсы вручную на каждом уровне.
  Он создаёт <InlineCode>Context</InlineCode> — объект, который содержит значение и позволяет дочерним компонентам подписываться на изменения этого значения.
</p>

<h3>Создание и использование Context с хуком <InlineCode>useContext</InlineCode></h3>
<SyntaxHighlighter language="jsx" style={dark}>
  {codeContextBasic}
</SyntaxHighlighter>

<p>
  - <InlineCode>createContext("light")</InlineCode> создаёт контекст с начальным значением <InlineCode>"light"</InlineCode>.<br />
  - <InlineCode>ThemeContext.Provider</InlineCode> оборачивает компоненты, которые будут иметь доступ к контексту. Значение передаётся через <InlineCode>value</InlineCode>.<br />
  - Внутри <InlineCode>Button</InlineCode> через <InlineCode>useContext(ThemeContext)</InlineCode> мы читаем текущее значение контекста.
</p>

<h3> Использование Context с классическим Consumer</h3>
<SyntaxHighlighter language="jsx" style={dark}>
  {codeContextConsumer}
</SyntaxHighlighter>

<p>
  Альтернативный способ — использовать <InlineCode>Context.Consumer</InlineCode> и функцию с рендер-пропсом. Это полезно в классах или когда хук использовать нельзя.
</p>

<h3>Несколько Context подряд</h3>
<p>
  В больших приложениях часто используется несколько контекстов (например, тема и пользователь). Их можно вкладывать друг в друга.
</p>
<SyntaxHighlighter language="jsx" style={dark}>
  {codeMultipleProviders}
</SyntaxHighlighter>

<p>
  Для чтения разных контекстов используйте <InlineCode>useContext</InlineCode> по отдельности:
</p>
<SyntaxHighlighter language="jsx" style={dark}>
  {codeUseContextMultiple}
</SyntaxHighlighter>

<h3>⚠️ Важные советы и ограничения</h3>
<ul>
  <li><strong>Не злоупотребляйте Context.</strong> Не стоит класть туда всё подряд. Это приведёт к сложному, трудно поддерживаемому коду.</li>
  <li><strong>Частые обновления Context вызывают перерисовку всех подписанных компонентов.</strong> Это может негативно сказаться на производительности, если обновления частые и масштабные.</li>
  <li><strong>Context не заменяет локальное состояние.</strong> Используйте локальный <InlineCode>useState</InlineCode> или другие хуки, если данные нужны только внутри одного компонента.</li>
  <li><strong>Для сложного глобального состояния лучше использовать специализированные менеджеры состояний:</strong> Redux, MobX, Zustand и др.</li>
  <li><strong>Provider может быть размещён на любом уровне.</strong> Например, можно использовать разные темы для разных частей приложения, создав отдельные провайдеры.</li>
</ul>

<h3> Итогo:</h3>
<p>
  React Context — мощный инструмент для борьбы с <InlineCode>props drilling</InlineCode>, позволяет удобно делиться данными между компонентами без громоздкой передачи пропсов. Но как и любой инструмент — он требует аккуратного использования.
</p>
</div>
  );
};


export default Context