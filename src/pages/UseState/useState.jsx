import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UseState = () => {
  const InlineCode = styled.code`
    background: #2d2d2d;
    color: #f8f8f2;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

  const codeString = `import { useState } from 'react';

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

  const codeString2 = `import { useState } from 'react';

  function NameForm() {
    const [name, setName] = useState('');
  
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
        />
        <p>Привет, {name || 'незнакомец'}!</p>
      </div>
    );
  }`;

  return (
    <>
      <h1>useState</h1>
      <p>
        Хук <InlineCode>useState</InlineCode> — это способ добавить состояние
        (state) в функциональные компоненты React. Раньше для этого использовали
        классы и this.state, но теперь useState делает всё проще и чище. Хук
        возвращает массив из двух значений: Текущее значение и функцию-сеттер,
        которая обновляет это значение
      </p>
      <p>
        <p> Пример 1: Счётчик</p>
        Допустим, ты хочешь сделать кнопку, которая увеличивает число каждый раз
        при клике:
      </p>

      <SyntaxHighlighter language="jsx" style={dark}>
        {codeString}
      </SyntaxHighlighter>
      <p>
        Что здесь происходит: count — текущий счёт setCount — функция, которая
        обновляет count useState(0) — начальное значение — 0 Каждый раз, когда
        ты нажимаешь на кнопку, компонент перерисовывается, и count отображает
        новое значение.
      </p>
      <p>
        💡 Пример 2: Работа со строками (input) Ты можешь использовать useState
        и для хранения текста из поля ввода:
      </p>
      <SyntaxHighlighter language="jsx" style={dark}>
        {codeString2}
      </SyntaxHighlighter>
      <p>Обьяснение</p>
      <p>
        <InlineCode>name</InlineCode> хранит текст из{" "}
        <InlineCode>input</InlineCode>
      </p>
      <p>
        <InlineCode>onChange</InlineCode> обновляет{" "}
        <InlineCode>name</InlineCode> каждый раз, когда пользователь вводит
        новый символ
      </p>
      <p>Ты можешь сразу использовать это значение в JSX</p>
    </>
  );
};

export default UseState;
