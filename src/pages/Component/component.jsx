import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";


const Component = () => {


    const InlineCode = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

    const codeExample1 = `
function UserGreeting({ name }) {
  return <h2>Добро пожаловать, {name}!</h2>;
}

// Использование
<UserGreeting name="Паша" />
`;

const codeExample2 = `
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми</button>
    </div>
  );
}
`;


  return (
<>
<div>
      <h1> Компоненты в React</h1>

      <p>
        <InlineCode>Компоненты</InlineCode> — это переиспользуемые блоки, из которых состоит интерфейс приложения. 
        Каждый компонент может содержать логику, разметку, стили и управлять своим состоянием.
      </p>

      <h2> Виды компонентов</h2>
      <p>
        В React есть два основных типа компонентов:
        <ul>
          <li>
            <InlineCode>Функциональные</InlineCode> — пишутся как обычные функции. Это современный стандарт.
          </li>
          <li>
            <InlineCode>Классовые</InlineCode> — основаны на ES6 классах. Сейчас используются редко.
          </li>
        </ul>
      </p>

      <p>
        В большинстве случаев ты будешь использовать <InlineCode>функциональные компоненты</InlineCode> 
        с хуками — это проще, чище и читаемее.
      </p>

      <h2> Когда перерисовывается компонент?</h2>
      <p>
        Компонент автоматически перерисовывается при:
        <ul>
          <li>
            Изменении <InlineCode>props</InlineCode> (входных данных)
          </li>
          <li>
            Изменении <InlineCode>state</InlineCode> через <InlineCode>useState</InlineCode> или <InlineCode>useReducer</InlineCode>
          </li>
          <li>
            Обновлении контекста, если он используется через <InlineCode>useContext</InlineCode>
          </li>
        </ul>
      </p>

      <h2> Что такое чистый компонент?</h2>
      <p>
        <InlineCode>Чистый компонент</InlineCode> — это компонент, который рендерится одинаково при одних и тех же входных данных. 
        Он не вызывает побочных эффектов и не зависит от внешних переменных.
      </p>
      <p>
        Пример: если ты передаёшь <InlineCode>name="Паша"</InlineCode>, компонент всегда должен отрендериться одинаково. 
        Такой компонент можно обернуть в <InlineCode>React.memo()</InlineCode>, чтобы избежать лишних перерисовок.
      </p>

      <h2> Пример 1: Пропсы</h2>
      <SyntaxHighlighter language="jsx" style={dark}>
        {codeExample1}
      </SyntaxHighlighter>

      <p>
        Здесь мы передаём имя через <InlineCode>props</InlineCode> и выводим его в JSX. 
        Пропсы — только для чтения.
      </p>

      <h2> Пример 2: Состояние и useState</h2>
      <SyntaxHighlighter language="jsx" style={dark}>
        {codeExample2}
      </SyntaxHighlighter>

      <p>
        <InlineCode>useState</InlineCode> создаёт переменную <InlineCode>count</InlineCode> 
        и функцию <InlineCode>setCount</InlineCode> для её изменения. 
        При каждом клике компонент перерисовывается.
      </p>

      <h2> Подводные камни</h2>
      <ul>
        <li>
          Каждый вызов <InlineCode>setState</InlineCode> вызывает перерисовку
        </li>
        <li>
          Компонент должен возвращать <InlineCode>один корневой элемент</InlineCode>
        </li>
        <li>
          Нельзя вызывать <InlineCode>хуки</InlineCode> внутри условий или циклов
        </li>
        <li>
          <InlineCode>props</InlineCode> нельзя мутировать — они только для чтения
        </li>
      </ul>

      <p>
        React-компоненты — это как функции интерфейса. Они помогают мыслить в терминах «композиции», 
        разбивая сложный UI на простые, переиспользуемые элементы.
      </p>
    </div>

</>
    
  );
};

export default Component;
