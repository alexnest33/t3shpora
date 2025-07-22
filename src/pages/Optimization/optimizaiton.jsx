import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Optimization = () => {
  const InlineCode = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

  const memoExample = `import { memo } from "react";

const MyComponent = ({ text }) => {
  console.log("Рендер MyComponent");
  return <p>{text}</p>;
};

export default memo(MyComponent);`;

  const useMemoExample = `import { useMemo } from "react";

const ExpensiveCalc = ({ num }) => {
  const result = useMemo(() => {
    console.log("Вычисление...");
    return num ** 2;
  }, [num]);

  return <p>Результат: {result}</p>;
};`;

  const useCallbackExample = `import { useCallback, useState } from "react";

const Button = ({ handleClick }) => {
  console.log("Рендер Button");
  return <button onClick={handleClick}>Click</button>;
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    console.log("Click");
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Button handleClick={memoizedClick} />
    </>
  );
};`;

  const lazyExample = `import React, { lazy, Suspense } from "react";

const LazyComp = lazy(() => import("./LazyComp"));

const App = () => (
  <Suspense fallback={<p>Загрузка...</p>}>
    <LazyComp />
  </Suspense>
);`;

  return (
    <div>
      <h2>Оптимизация компонентов в React</h2>

      <p>
        Оптимизация важна, когда приложение становится большим или
        чувствительным к производительности. React предоставляет несколько
        инструментов, которые позволяют избежать лишних ререндеров,
        дорогостоящих вычислений и ускорить загрузку:
      </p>

      <h3>Основные инструменты:</h3>
      <ul>
        <li>
          <InlineCode>React.memo(Component)</InlineCode> — мемоизирует
          функциональный компонент. Ререндерится только если изменились пропсы.
        </li>
        <li>
          <InlineCode>useMemo(fn, deps)</InlineCode> — кэширует результат
          функции. Полезно при тяжёлых вычислениях.
        </li>
        <li>
          <InlineCode>useCallback(fn, deps)</InlineCode> — мемоизирует функцию.
          Полезно при передаче колбеков в дочерние компоненты.
        </li>
        <li>
          <InlineCode>React.lazy</InlineCode> — позволяет отложить загрузку
          компонента до момента, когда он понадобится.
        </li>
        <li>
          <InlineCode>Suspense</InlineCode> — используется вместе с{" "}
          <InlineCode>lazy</InlineCode> для отображения fallback-компонента при
          загрузке.
        </li>
        <li>
          <InlineCode>React.Profiler</InlineCode> — инструмент для анализа
          производительности. Показывает сколько времени занял рендер.
        </li>
      </ul>

      <h3>Пример с React.memo</h3>
      <SyntaxHighlighter language="jsx" style={dark}>
        {memoExample}
      </SyntaxHighlighter>

      <h3>Пример с useMemo</h3>
      <SyntaxHighlighter language="jsx" style={dark}>
        {useMemoExample}
      </SyntaxHighlighter>

      <h3>Пример с useCallback</h3>
      <SyntaxHighlighter language="jsx" style={dark}>
        {useCallbackExample}
      </SyntaxHighlighter>

      <h3>Пример с React.lazy и Suspense</h3>
      <SyntaxHighlighter language="jsx" style={dark}>
        {lazyExample}
      </SyntaxHighlighter>

      <h3>Что и когда использовать?</h3>
      <ul>
        <li>
          Используй <InlineCode>React.memo</InlineCode> для компонентов, которые
          часто рендерятся с одними и теми же пропсами.
        </li>
        <li>
          <InlineCode>useMemo</InlineCode> полезен, если внутри компонента есть
          тяжёлые расчёты.
        </li>
        <li>
          <InlineCode>useCallback</InlineCode> помогает избежать лишнего
          создания функций при каждом рендере.
        </li>
        <li>
          <InlineCode>React.lazy + Suspense</InlineCode> — отличная стратегия
          для ленивой загрузки больших модулей.
        </li>
      </ul>

      <h3>Потенциальные ошибки и антипаттерны:</h3>
      <ul>
        <li>
          <strong>Не стоит мемоизировать всё подряд</strong>:{" "}
          <InlineCode>useMemo</InlineCode> и{" "}
          <InlineCode>useCallback</InlineCode> сами по себе тоже стоят ресурсов.
        </li>
        <li>
          <strong>Неправильные зависимости</strong>: при использовании хуков
          важно правильно указывать <InlineCode>deps</InlineCode>. Иначе
          мемоизация будет бесполезной или вызовет баг.
        </li>
        <li>
          <strong>Лишняя вложенность</strong> компонентов и тяжелый JSX могут
          вызвать рекурсивные ререндеры — избегай их.
        </li>
      </ul>

      <h3> Инструменты для анализа:</h3>
      <ul>
        <li>
          <strong>React DevTools</strong> — вкладка{" "}
          <InlineCode>Profiler</InlineCode> позволяет отследить рендеры
          компонентов и время выполнения.
        </li>
        <li>
          <strong>why-did-you-render</strong> — библиотека, которая показывает в
          консоли, какие компоненты зря перерисовались.
        </li>
      </ul>

      <p>
        Оптимизация — это не цель, а средство. Не начинай с неё. Сначала
        сделай рабочий код, затем при росте сложности — оптимизируй.
      </p>
    </div>
  );
};

export default Optimization;
