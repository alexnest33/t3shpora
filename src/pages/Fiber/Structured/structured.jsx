import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Structured = () => {
  const code = `/src
    ├── /pages       # Страницы приложения
    │   ├── Home.jsx
    │   ├── Profile.jsx
    ├── /components  # Переиспользуемые UI-компоненты
    │   ├── Button.jsx
    │   ├── Input.jsx
    ├── /hooks       # Пользовательские хуки
    │   ├── useAuth.js
    │   ├── useFetch.js
    ├── /utils       # Утилиты (общие вспомогательные функции)
    │   ├── formatDate.js
    │   ├── debounce.js
    ├── /helpers     # Хелперы (функции, связанные с конкретными модулями)
    │   ├── authHelper.js
    │   ├── validationHelper.js
    ├── /redux       # Redux-хранилище и слайсы
    │   ├── store.js
    │   ├── authSlice.js
    │   ├── userSlice.js
    ├── /api         # Файлы для работы с сервером (запросы к API)
    │   ├── apiConfig.js
    │   ├── authApi.js
    │   ├── userApi.js
    ├── App.jsx      # Главный компонент
    ├── index.js     # Точка входа  `;

  const code2 = `
    /src
 ├── /app        # Конфигурация приложения (роутинг, провайдеры)
 │   ├── App.jsx
 │   ├── routes.jsx
 ├── /pages      # Страницы (собирают features и entities)
 │   ├── HomePage.jsx
 │   ├── ProfilePage.jsx
 ├── /features   # Фичи (авторизация, поиск, корзина)
 │   ├── /auth
 │   │   ├── LoginForm.jsx
 │   │   ├── model.js  # Логика авторизации
 ├── /entities   # Бизнес-логика (пользователь, товары)
 │   ├── /user
 │   │   ├── UserCard.jsx
 │   │   ├── userModel.js
 ├── /shared     # Общие UI-компоненты (кнопки, инпуты, утилиты)
 │   ├── Button.jsx
 │   ├── Input.jsx`;

  return (
    <>
      <h1>Структура проекта: Modules VS FSD</h1>
      <p>
        Как устроено?
        <ul>
          <li>
            {" "}
            Код делится на `pages` (страницы) и `components` (переиспользуемые
            UI-элементы).
          </li>
          <li> - Логика страницы собирается в одном месте (в `pages`).</li>
          <li>
            - Мелкие компоненты** (кнопки, инпуты) хранятся в `components`.
          </li>
        </ul>
        <p>Структура проекта (Modules)</p>
        <SyntaxHighlighter language="jsx" style={dark}>
          {code}
        </SyntaxHighlighter>
        <p>
          <ul>
            <li>
              <strong>pages</strong> — находятся страницы (`Home`, `Profile`) → они
              импортируют нужные компоненты.
            </li>
            <li>
              <strong>components</strong> — хранятся **общие элементы UI (`Button`, `Input`).
            </li>
            <li>
              <strong>hooks</strong> — пользовательские хуки, которые можно переиспользовать
              в проекте.
            </li>
            <li>
              <strong>utils</strong> – для чистых функций, которые не зависят от React
              (например, `formatDate`, `debounce`).
            </li>
            <li>
              <strong>helpers</strong> – для функций-помощников**, которые связаны с
              конкретными модулями (`authHelper`, `validationHelper`).
            </li>
            <li>
              <strong>redux</strong> – хранилище состояния, слайсы (`store.js`,
              `authSlice.js`).
            </li>
            <li>
              <strong>api</strong> – для работы с бэкендом, запросов к серверу (`authApi.js`,
              `userApi.js`).
            </li>
          </ul>
        </p>
        <h2>FSD</h2>
        <p>Как устроено?</p>
        <ul>
          <li>Код разделён на логические уровни.</li>
          <li>Чётко разделены бизнес-логика, UI и API-запросы.</li>
          <li>Удобно работать в команде — каждый знает, где лежит код.</li>
        </ul>
        <p>
          <strong>Структура проекта (FSD)</strong>
        </p>
        <SyntaxHighlighter language="jsx" style={dark}>
          {code2}
        </SyntaxHighlighter>
        <ul>
          <li>app – отвечает за настройку проекта (роутинг, провайдеры).</li>
          <li>pages – собирает страницы из готовых фич.</li>
          <li>features – фичи приложения (авторизация, поиск, фильтры).</li>
          <li>entities – бизнес-логика (пользователь, товары).</li>
          <li>
            shared – переиспользуемые компоненты (кнопки, формы, утилиты).
          </li>
        </ul>
      </p>
    </>
  );
};

export default Structured;
