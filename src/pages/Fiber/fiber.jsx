import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Fiber = () => {
  const InlineCode = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;

  return (
    <>
      <h1>Fiber</h1>

      <p>
        <InlineCode>Fiber</InlineCode> — это{" "}
        <strong>внутренний движок React</strong>, переписанный с нуля в версии
        React 16.
      </p>

      <p>
        Если упрощённо: это алгоритм и архитектура, которые отвечают за то,{" "}
        <strong>
          как React принимает решение, что, когда и как нужно обновить на экране
        </strong>
        .
      </p>

      <h3> До Fiber: как работал React раньше</h3>
      <p>
        До Fiber React использовал{" "}
        <strong>синхронный и рекурсивный подход</strong>: при любом обновлении
        он проходил всё дерево компонентов за один проход.
      </p>
      <p>
        Это означало, что{" "}
        <strong>большие приложения могли замораживать интерфейс</strong>, а
        React не мог остановиться, приостановить задачу или обработать
        обновления по приоритету.
      </p>

      <h3>Зачем придумали Fiber?</h3>
      <ul>
        <li>
           <strong>Управление приоритетами</strong> — важные обновления
          выполняются раньше
        </li>
        <li>
           <strong>Прерываемость</strong> — React может приостановить задачу и
          вернуться к ней позже
        </li>
        <li>
           <strong>Пошаговый рендеринг</strong> — можно разбить процесс
          обновления на части
        </li>
      </ul>

      <h3> Как это влияет на разработчика?</h3>
      <p>
        С точки зрения кода — <strong>почти никак</strong>. Ты всё ещё
        используешь хуки, компоненты и JSX.
      </p>
      <p>Но благодаря Fiber React умеет:</p>
      <ul>
        <li> Прерывать и откладывать обновления</li>
        <li> Повторно выполнять расчёты, если нужно</li>
        <li> Давать приоритет важным взаимодействиям</li>
        <li>
          Использовать хуки вроде <InlineCode>useTransition</InlineCode>,{" "}
          <InlineCode>startTransition</InlineCode>,{" "}
          <InlineCode>useDeferredValue</InlineCode>
        </li>
      </ul>

      <h3> Fiber = виртуальная система задач</h3>
      <p>
        React превращает каждый компонент в «узел задачи». У каждого узла есть
        цель: обновить себя, потомков и, если нужно, изменить DOM.
      </p>
      <p>
        Эти задачи можно{" "}
        <strong>
          приостанавливать, откладывать, комбинировать или отменять
        </strong>
        .
      </p>

      <h3>Важно понимать</h3>
      <ul>
        <li>
          <strong>Fiber — не библиотека и не API.</strong> Это то, что работает{" "}
          <i>внутри</i> React.
        </li>
        <li>Ты не вызываешь его напрямую.</li>
        <li>
          Но он делает возможными такие вещи как:
          <ul>
            <li>
              <InlineCode>Suspense</InlineCode> и{" "}
              <InlineCode>lazy()</InlineCode>
            </li>
            <li>Конкурентный рендеринг</li>
            <li>Плавные переходы и отложенные обновления</li>
          </ul>
        </li>
      </ul>

      <h3> Что даёт Fiber тебе?</h3>
      <ul>
        <li>Интерфейс не зависает при тяжёлых обновлениях</li>
        <li>React может планировать рендер заранее</li>
        <li>Ты можешь разделять важные и второстепенные обновления</li>
        <li>Поддержка новых возможностей (Suspense, Concurrent Mode)</li>
      </ul>

      <h3>Заключение</h3>
      <p>
        <InlineCode>Fiber</InlineCode> — это фундамент React, делающий его{" "}
        <strong>мощным, быстрым и гибким</strong>. Благодаря ему ты можешь
        использовать <InlineCode>useTransition</InlineCode>,{" "}
        <InlineCode>Suspense</InlineCode> и другие фичи без заморочек — и всё
        будет работать плавно.
      </p>
    </>
  );
};

export default Fiber;
