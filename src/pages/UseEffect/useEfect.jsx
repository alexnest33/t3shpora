import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UseEffect = () => {
  
  const InlineCode2 = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

  const StringCode = `
  import { useEffect } from 'react';

function HelloMessage() {
  useEffect(() => {
    console.log('Компонент отрендерен впервые!');
  }, []);

  return <p>Привет, мир!</p>;
}
`;

  const StringCode2 = `
  import React, { useState, useEffect } from "react";

  const Example = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      setMessage('Счетчик изменен на: '${'count'}');
    }, [count]); // Зависимость [count] - выполнится при изменении состояния count
  
    return (
      <div>
        <p>{message}</p>
        <p>Счетчик: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
      </div>
    );
  };
  
  export default Example;
`;

  const StringCode3 = ` 


useEffect(() => {
  const interval = setInterval(() => {
    console.log('Тик!');
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('Компонент размонтирован или зависимость изменилась');
  };
}, []);`;

  return (
    <>
    <h1>useEffect</h1>
    <p>Хук useEffect отвечает за жизненный цикл компоненты</p>
      <p>
        {" "}
        Раньше в React для побочных эффектов использовались методы жизненного
        цикла, такие как <InlineCode2>componentDidMount</InlineCode2>,{" "}
        <InlineCode2>componentDidUpdate</InlineCode2>,{" "}
        <InlineCode2>componentWillUnmount</InlineCode2>, но сейчас классовые
        компоненты почти не используются. Поэтому мы их здесь рассматривать не
        будем.
      </p>
      <p>
        Вместо этого во всех современных приложениях используют хук{" "}
        <InlineCode2>useEffect</InlineCode2>, который позволяет обрабатывать
        побочные эффекты в функциональных компонентах.
      </p>
      <p>
        Побочные эффекты — это всё, что выходит за рамки "чистого" рендера:
        HTTP-запросы, таймеры, изменение заголовка страницы, подписки и т.п.
      </p>
      <b>
        <p>Пример 1: эффект при первом рендере (аналог componentDidMount)</p>{" "}
      </b>

      <SyntaxHighlighter language="jsx" style={dark}>
        {StringCode}
      </SyntaxHighlighter>
      <b>
        <p>Обьяснение</p>
      </b>
      <p>
        <InlineCode2>useEffect</InlineCode2> принимает два аргумента:
      </p>
      <ul>
        <li>Функцию (что выполнить)</li>
        <li>Массив зависимостей (когда выполнить)</li>
      </ul>

      <p>
        В этом примере передаётся <InlineCode2>[]</InlineCode2> — пустой массив
        зависимостей. Это значит, что эффект выполнится{" "}
        <strong>только один раз</strong>, когда компонент появится в DOM.
      </p>

      <b><p>Пример 2: эффект, зависящий от состояния(аналог componentDidUpdate)</p></b>
      <SyntaxHighlighter language="jsx" style={dark}>
        {StringCode2}
      </SyntaxHighlighter>

      <p>
        Эффект сработает <strong>каждый раз, когда изменится</strong>{" "}
        <InlineCode2>count</InlineCode2>.
      </p>
      <p>
        Это удобно, если нужно синхронизировать состояние компонента с чем-то
        внешним — например, с заголовком вкладки, локальным хранилищем, внешним
        API и т.д.
      </p>
      <p>  <InlineCode2>Очистка (аналог componentWillUnmount)</InlineCode2> 
Иногда эффект создаёт подписку или таймер, который нужно очистить. Для этого возвращается функция из useEffect:
</p>
<SyntaxHighlighter language="jsx" style={dark}>
        {StringCode3}
      </SyntaxHighlighter>

      <b>
        <p>Заключение:</p>
      </b>
      <p>
        <InlineCode2>useEffect</InlineCode2> заменяет классовые методы
        жизненного цикла Он срабатывает: при первом рендере ([]) при изменении
        зависимостей ([count], [data]) Если нужен "отписочный" эффект —
        возвращай функцию
      </p>
    </>
  );
};

export default UseEffect;
