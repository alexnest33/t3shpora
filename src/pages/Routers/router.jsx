import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Routers = () => {

    const InlineCode = styled.code`
  background: gray;
  color: white;
  font-family: "Fira Code", monospace;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 16px;
`;

const installCommand = `npm install react-router-dom@latest`;

const basicRouterExample = `
// Импортируем необходимые компоненты из react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    // BrowserRouter — оборачивает приложение, обеспечивает работу с историей браузера
    <BrowserRouter>
      {/* Routes — контейнер для маршрутов */}
      <Routes>
        {/* Route — описывает один маршрут
            path="/" — URL, по которому будет доступен компонент
            element={<Home />} — React-элемент, который рендерится по этому маршруту */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`;

const navLinksExample = `
// NavLink — ссылка для навигации, похожа на <a>, но без перезагрузки страницы
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* to="/" — куда ведёт ссылка (адрес) */}
      {/* end — указывает, что активная ссылка только при точном совпадении пути */}
      {/* activeClassName="active" — класс, который добавляется к активной ссылке */}
      <NavLink to="/" end activeClassName="active">Главная</NavLink>

      <NavLink to="/about" activeClassName="active">О нас</NavLink>
    </nav>
  );
}
`;


const hooksExample = `
// Хуки для работы с маршрутизацией
import { useParams, useLocation, useNavigate } from "react-router-dom";

function UserProfile() {
  // Получаем параметры из URL, например, /user/:userId
  const { userId } = useParams();

  // Получаем объект с информацией о текущем URL (путь, поисковая строка и т.д.)
  const location = useLocation();

  // Функция для программной навигации (аналог history.push)
  const navigate = useNavigate();

  return (
    <div>
      <p>ID пользователя: {userId}</p>
      <p>Текущий путь: {location.pathname}</p>
      {/* Кнопка для возврата назад */}
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}
`;

    return(
<div>
      <h2>React Router — подробное руководство</h2>

      <h3>Установка в проект с Vite</h3>
      <p>Для начала работы с React Router в проекте на Vite выполните команду:</p>
      <SyntaxHighlighter language="bash" style={dark}>
        {installCommand}
      </SyntaxHighlighter>
      <p>
        Мы устанавливаем пакет <InlineCode>react-router-dom</InlineCode> — именно он содержит
        все необходимые инструменты для маршрутизации в веб-приложениях на React.
      </p>

      <h3>Основные компоненты маршрутизации</h3>

      <h4><InlineCode>BrowserRouter</InlineCode></h4>
      <p>
        Это обёртка над вашим приложением, которая включает поддержку истории браузера. 
        Она нужна, чтобы приложение могло менять URL и реагировать на изменения адресной строки браузера.
      </p>

      <h4><InlineCode>Routes</InlineCode> и <InlineCode>Route</InlineCode></h4>
      <p>
        <InlineCode>Routes</InlineCode> — контейнер для списка маршрутов, который определяет,
        какой <InlineCode>Route</InlineCode> сработает в зависимости от текущего URL.
      </p>
      <p>
        Каждый <InlineCode>Route</InlineCode> описывает путь (<InlineCode>path</InlineCode>) и компонент,
        который нужно отобразить — он задаётся через проп <InlineCode>element</InlineCode>.  
        Важно: в <InlineCode>element</InlineCode> передаётся React-элемент, то есть <strong>компонент нужно писать с JSX</strong>, например <InlineCode>{`<Home />`}</InlineCode>, а не <InlineCode>Home</InlineCode>.
      </p>

      <h4>Пример базового маршрутизатора</h4>
      <SyntaxHighlighter language="jsx" style={dark}>
        {basicRouterExample}
      </SyntaxHighlighter>

      <h3> Навигация: <InlineCode>Link</InlineCode> и <InlineCode>NavLink</InlineCode></h3>

      <p>
        Для переходов между страницами мы не используем обычные теги <InlineCode>{`<a>`}</InlineCode>, 
        потому что они приводят к полной перезагрузке страницы. Вместо этого в React Router есть специальные компоненты:
      </p>

      <ul>
        <li>
          <InlineCode>Link</InlineCode> — простой переход на указанный адрес (проп <InlineCode>to</InlineCode> — куда перейти).
        </li>
        <li>
          <InlineCode>NavLink</InlineCode> — расширение <InlineCode>Link</InlineCode>, которое автоматически добавляет класс (например, <InlineCode>"active"</InlineCode>) к ссылке, если она ведёт на текущий URL. Это удобно для создания меню с подсветкой активного пункта.
        </li>
      </ul>

      <h4>Пример использования <InlineCode>NavLink</InlineCode></h4>
      <SyntaxHighlighter language="jsx" style={dark}>
        {navLinksExample}
      </SyntaxHighlighter>

      <h3>Основные хуки для работы с маршрутизацией</h3>

      <ul>
        <li>
          <InlineCode>useParams()</InlineCode> — возвращает объект с параметрами из URL.  
          Например, для маршрута <InlineCode>/user/:id</InlineCode> вы можете получить <InlineCode>{`{ id: "123" }`}</InlineCode>.
        </li>
        <li>
          <InlineCode>useLocation()</InlineCode> — возвращает объект с текущей информацией о маршруте: путь, поисковая строка, состояние.
        </li>
        <li>
          <InlineCode>useNavigate()</InlineCode> — функция для программной навигации.  
          Например, можно перейти на другую страницу или вернуться назад по истории браузера.
        </li>
      </ul>

      <h4>Пример с хуками</h4>
      <SyntaxHighlighter language="jsx" style={dark}>
        {hooksExample}
      </SyntaxHighlighter>

      <h3>Дополнительно</h3>
      <ul>
        <li>
          <InlineCode>Outlet</InlineCode> — используется для вложенных маршрутов. Позволяет показывать дочерние компоненты внутри родительского.
        </li>
        <li>
          React Router поддерживает ленивую загрузку компонентов, защиту маршрутов (private routes), редиректы и многое другое.
        </li>
      </ul>

      <h3>Итог</h3>
      <p>
        React Router — это стандартная библиотека для маршрутизации в React.  
        Она позволяет удобно строить SPA с разными страницами и навигацией без перезагрузок.  
        Зная основные компоненты и хуки, вы легко настроите маршрутизацию под свои задачи.
      </p>
    </div>
    )
}

export default Routers