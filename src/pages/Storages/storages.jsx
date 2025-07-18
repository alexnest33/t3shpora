import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";


const Storages = () => {




const InlineCode = styled.code`
  background: gray;
  color: white;
  font-family: "Fira Code", monospace;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 16px;
`;

const localStorageExample = `
// Запись в localStorage
localStorage.setItem("username", "Паша");

// Чтение из localStorage
const user = localStorage.getItem("username");

// Удаление из localStorage
localStorage.removeItem("username");

// Очистка всего localStorage
localStorage.clear();
`;

const sessionStorageExample = `
// Запись в sessionStorage
sessionStorage.setItem("sessionId", "123456");

// Чтение из sessionStorage
const session = sessionStorage.getItem("sessionId");

// Удаление из sessionStorage
sessionStorage.removeItem("sessionId");

// Очистка всего sessionStorage
sessionStorage.clear();
`;

return(
    <div >
    <h2>Web Storage: localStorage и sessionStorage</h2>

    <h3>Что такое Web Storage?</h3>
    <p>
      Web Storage — это встроенный механизм браузера для хранения данных в формате ключ-значение.
      Позволяет сохранять информацию на стороне клиента, что удобно для кэширования, сохранения настроек, сессий и других целей.
    </p>

    <h3>localStorage vs sessionStorage</h3>
    <ul>
      <li>
        <strong>localStorage</strong> хранит данные постоянно, даже после закрытия и повторного открытия браузера.
      </li>
      <li>
        <strong>sessionStorage</strong> хранит данные только на время текущей сессии — данные исчезают при закрытии вкладки или браузера.
      </li>
    </ul>

    <h3>Основные методы Web Storage</h3>
    <ul>
      <li><InlineCode>setItem(key, value)</InlineCode> — сохранить или обновить значение по ключу.</li>
      <li><InlineCode>getItem(key)</InlineCode> — получить значение по ключу.</li>
      <li><InlineCode>removeItem(key)</InlineCode> — удалить запись по ключу.</li>
      <li><InlineCode>clear()</InlineCode> — очистить всё хранилище.</li>
      <li><InlineCode>key(index)</InlineCode> — получить ключ по индексу (редко используется).</li>
      <li><InlineCode>length</InlineCode> — количество записей в хранилище.</li>
    </ul>

    <h3>Пример использования localStorage</h3>
    <SyntaxHighlighter language="js" style={dark}>
      {localStorageExample}
    </SyntaxHighlighter>

    <h3>Пример использования sessionStorage</h3>
    <SyntaxHighlighter language="js" style={dark}>
      {sessionStorageExample}
    </SyntaxHighlighter>

    <h3>🛠 Как проверить и работать с Web Storage в DevTools</h3>
    <p>
      В Chrome DevTools откройте вкладку <strong>Application</strong> → <strong>Storage</strong> → <strong>Local Storage</strong> или <strong>Session Storage</strong>.  
      Там вы увидите таблицу с ключами и значениями, которые сохраняет ваше приложение.
    </p>

    <h3>Особенности и рекомендации</h3>
    <ul>
      <li>Хранилище имеет ограничение по размеру (~5MB в большинстве браузеров).</li>
      <li>Хранить стоит только небольшие и не чувствительные данные (никогда пароли, токены без защиты).</li>
      <li>Данные в localStorage/sessionStorage доступны скриптам с того же домена — будьте осторожны с XSS-уязвимостями.</li>
      <li>Все значения сохраняются как строки, для объектов используйте <InlineCode>JSON.stringify()</InlineCode> и <InlineCode>JSON.parse()</InlineCode>.</li>
      <li>sessionStorage работает на уровне вкладки — закрытие вкладки удаляет данные, в отличие от localStorage.</li>
    </ul>

    <h3>Пример сохранения объекта</h3>
    <SyntaxHighlighter language="js" style={dark}>
      {`const user = { name: "Паша", age: 28 };

// Сохраняем объект как строку JSON
localStorage.setItem("user", JSON.stringify(user));

// Читаем и парсим обратно в объект
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Паша"
`}
    </SyntaxHighlighter>

    <h3>Заключение</h3>
    <p>
      localStorage и sessionStorage — простые и удобные API для хранения данных в браузере.  
      Их легко использовать для хранения настроек, кеша, информации о сессии и многого другого.  
      Главное — использовать их с умом и не хранить конфиденциальную информацию.
    </p>
  </div>
)

}


export default Storages