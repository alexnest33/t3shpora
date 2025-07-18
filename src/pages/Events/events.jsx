
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Events = () => {

    const InlineCode = styled.code`
    background: gray;
    color: white;
    font-family: "Fira Code", monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
  `;


  const codeInputExample = `
function InputExample() {
  const handleChange = (e) => {
    console.log("Изменено значение:", e.target.value);
  };

  const handleFocus = () => {
    console.log("Инпут в фокусе");
  };

  const handleKeyDown = (e) => {
    console.log("Нажата клавиша:", e.key);
  };

  return (
    <input
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      placeholder="Пиши сюда"
    />
  );
}
`;

  const codeMouseExample = `
function HoverExample() {
  const handleMouseOver = () => {
    console.log("Навели курсор");
  };

  return <div onMouseOver={handleMouseOver}>Наведи сюда</div>;
}
`;

  return (
    <>
      <h1>События в React</h1>

      <p>
        React использует <InlineCode>SyntheticEvent</InlineCode> — обёртку над
        стандартными браузерными событиями, которая обеспечивает
        кроссбраузерность и эффективную работу с памятью.
      </p>

      <p>
        События в React добавляются через атрибуты вида{" "}
        <InlineCode>onClick</InlineCode>, <InlineCode>onChange</InlineCode> и
        т.д. — прямо на JSX-элементы.
      </p>

      <h2>Популярные события</h2>

      <ul>
        <li>
          <InlineCode>onClick</InlineCode> — срабатывает при клике
        </li>
        <li>
          <InlineCode>onChange</InlineCode> — изменение значения (обычно у
          input)
        </li>
        <li>
          <InlineCode>onFocus</InlineCode> — когда элемент получает фокус
        </li>
        <li>
          <InlineCode>onKeyDown</InlineCode> — нажатие клавиши
        </li>
        <li>
          <InlineCode>onMouseOver</InlineCode> — когда курсор наводится на
          элемент
        </li>
      </ul>

      <h2>💻 Пример: работа с input</h2>
      <SyntaxHighlighter language="jsx" style={dark}>
        {codeInputExample}
      </SyntaxHighlighter>

      <h2>💻 Пример: событие наведения</h2>
      <SyntaxHighlighter language="jsx" style={dark}>
        {codeMouseExample}
      </SyntaxHighlighter>

      <h2>Редкие, но существующие события</h2>
      <p>Иногда применяются менее популярные события:</p>
      <ul>
        <li>
          <InlineCode>onDoubleClick</InlineCode> — двойной клик
        </li>
        <li>
          <InlineCode>onContextMenu</InlineCode> — ПКМ (правая кнопка мыши)
        </li>
        <li>
          <InlineCode>onTouchStart</InlineCode>,{" "}
          <InlineCode>onTouchEnd</InlineCode> — для мобильных
        </li>
        <li>
          <InlineCode>onScroll</InlineCode> — прокрутка
        </li>
        <li>
          <InlineCode>onDrag</InlineCode>, <InlineCode>onDrop</InlineCode> —
          перетаскивание
        </li>
        <li>
          <InlineCode>onBlur</InlineCode> — потеря фокуса
        </li>
        <li>
          <InlineCode>onInput</InlineCode> — ввод данных, аналогично onChange
        </li>
      </ul>

      <h2>В чём разница: event.target.value vs event.currentTarget.value</h2>
      <p>
        <InlineCode>event.target</InlineCode> — это{" "}
        <strong>тот элемент, на котором произошло событие</strong>
        <br />
        <InlineCode>event.currentTarget</InlineCode> — это{" "}
        <strong>тот элемент, на котором "висит" обработчик</strong>
      </p>
      <p>
        Чаще всего они совпадают, но если у тебя вложенные элементы с bubbling
        (всплытием событий), то:
      </p>
      <ul>
        <li>
          <InlineCode>event.target.value</InlineCode> покажет значение элемента,
          который был фактически активен (нажат, изменён)
        </li>
        <li>
          <InlineCode>event.currentTarget.value</InlineCode> покажет значение
          элемента, к которому привязан обработчик
        </li>
      </ul>

      <p>
        В большинстве случаев для input-ов ты используешь{" "}
        <InlineCode>event.target.value</InlineCode>.
      </p>

      <h2>⚠️ Важные методы события</h2>
      <ul>
        <li>
          <InlineCode>preventDefault()</InlineCode> — отменяет поведение по
          умолчанию (например, отправку формы)
        </li>
        <li>
          <InlineCode>stopPropagation()</InlineCode> — останавливает всплытие
          события вверх по DOM
        </li>
        <li>
          <InlineCode>persist()</InlineCode> — сохраняет объект события (если
          планируешь использовать его асинхронно)
        </li>
      </ul>

      <p>
        События в React работают через <InlineCode>event pooling</InlineCode>,
        то есть переиспользуются из пула. Поэтому для асинхронной работы с{" "}
        <InlineCode>event</InlineCode> нужно вызвать{" "}
        <InlineCode>event.persist()</InlineCode>.
      </p>
    </>
  );
};


export default Events
