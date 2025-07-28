const content = [
  {
    path: "/",

    title: "Welcome",
    content: [
      {
        p: "Здесь собраны главные шпаргалки по React. Это мини-конспекты, чтобы быстро вспомнить важное.",
      },
      {
        p: "Слева в меню список тем — компоненты, хуки, маршрутизация и многое другое.",
      },
      {
        p: "Если хочешь погрузиться глубже — читай официальную документацию React:",
      },
      {
        a: {
          href: "https://react.dev",
          text: "Перейти",
        },
      },
    ],
  },
  {
    path: "/useState",

    title: "useState",
    content: [
      {
        p: `— это хук React, который позволяет вам добавить переменную состояния в ваш компонент.`,
      },
      {
        code: `const [state, setState] = useState(initialState);`,
      },
      {
        p: `Он возвращает массив из двух элементов:`,
      },
      {
        ul: [
          "state: текущее значение состояния",
          "setState: функцию для его обновления. ",
        ],
      },
      { p: `принимает начальное значение состояние (initialState)` },
      { p: "Может быть:" },
      { ul: ["примитивом", "обьектом", "функцией"] },
      {
        code: `const [name, setName] = useState('alex'); // начальное значение string`,
      },
      {
        code: `const [isOpen, setIsOpen] = useState(false); // начальное значение boolean`,
      },
      {
        code: `const [user, setUser] = useState({ name: 'alex', age: 30 }); // начальное значение object `,
      },
      {
        b: "Функция setState",
      },
      {
        ul: [
          "используется для изменения начального состояния(initialState)",
          "setState - асинхронная функция, это важно понимать!После вызова функции не происходит моментального обновления, обновление помещается в очередь!",
          "state нельзя менять напрямую, для этого нужно использовать функцию setter",
        ],
      },
      { b: "Самый распространеный пример со счетчиком:" },
      {
        code: `import React, { useState } from "react";

        function Counter() {
          const [count, setCount] = useState(0);
        
          return (
            <div>
              <p>Current count: {count}</p>
              <button onClick={() => setCount((prevCount) => prevCount + 1)}>Увеличить на 1 </button>
            </div>
          );
        }`,
      },
      { p: "Обьяснение:" },
      {
        ul: [
          "initialState использует тип данных Number",
          "в JSX возвращаем кнопку и у нее вызываем событие onClick",
          "в котором вызываем функцию setCount, передаем туда предыдущее состояние и на основании его увеливаем на 1",
          "при каждом клике на кнопку наш стейт увеличивается на 1",
        ],
      },
      {
        b: `Важно запомнить!`,
      },
      {
        p: "Если наше состояние не зависит от предыдущего мы можем не использовать стрелочную функцию при вызове setState",
      },
      {
        code: `setState(count + 1)`,
      },
      {
        p: "Если нам важно отслеживать предыдущее состояние используй:",
      },
      {
        code: `setState(prevCount => prevCount + 1)`,
      },
      {
        b: "Распространенный пример, который может попасться на собесе:",
      },
      {
        code: `import React, { useState, useEffect } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + 1); // 1
      setCount(count + 1); // 1 - React использует начальное состояние так как не передана стрелочная функция с предыдущим состоянием
      setCount(count + 1); // 1 - возвращает последний setCount 
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  };
  
  export default Counter;`,
      },
      {
        p: "Может показаться что count будет равен 3, но:",
      },
      {
        ul: [
          "Мы помним что setCount - асинхронная операция",
          "Справа (count + 1) - это синхронный код",
          "По итогу: React запомнит последний вызов setCount и на основании этого вернет 1",
        ],
      },
      {
        p: "Чтобы увидеть результат 3, нужно использовать предыдущее состояние, а это значит передать стрелочную функцию",
      },
      {
        code: `  setCount(prevCount => prevCount + 1); // 1
  setCount(prevCount => prevCount + 1); // 2
  setCount(prevCount => prevCount + 1); // 3
};`,
      },

      { b: "Заключение" },
      {
        p: `Хук useState — это основа любого интерактива в React. Он
      подходит для: счётчиков, форм, переключателей, модальных окон, и даже
      более сложных сценариев с массивами и объектами. Чтобы уверенно им
      пользоваться, важно понимать:`,
      },
      {
        ul: [
          "каждое обновление вызывает перерисовку",
          "изменения асинхронны ",
          "нельзя мутировать напрямую",
        ],
      },
      {
        b: "Разные примеры с работой useState",
      },
      {
        code: `import React, { useState } from "react";

        const Example = () => {
          const [showText, setShowText] = useState(false);
        
          const handleClick = () => {
            setShowText((showText) => !showText);
          };
        
          return (
            <div>
              <button onClick={handleClick}>Показать/скрыть текст</button>
              {showText && <p>Этот текст может быть скрыт или показан</p>}
            </div>
          );
        };`,
      },
      {
        code: `import React, { useState } from 'react';

        const Example = () => {
          const [name, setName] = useState('');
        
          const handleChange = (event) => {
            setName(event.target.value);
          }
        
          return (
            <div>
              <label>
                Введи свое имя:
                <input type="text" value={name} onChange={handleChange} />
              </label>
              <p>Привет, {name}!</p>
            </div>
          );
        }`,
      },
      {
        code: `import React, { useState } from 'react';

        const Example = () => {
          const [color, setColor] = useState('red');
        
          const handleClick = () => {
            setColor(color === 'red' ? 'blue' : 'red');
          }
        
          const style = {
            color: color
          };
        
          return (
            <div>
              <button onClick={handleClick}>Сменить цвет</button>
              <p style={style}>Этот текст может быть красным или синим</p>
            </div>
          );
        }`,
      },
    ],
  },
  {
    path: "/useEffect",

    title: "useEffect",
    content: [
      {
        p: "- это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах.",
      },
      {
        p: `Раньше в React для побочных эффектов использовались методы жизненного
    цикла, такие как:`,
      },
      {
        ul: ["componentDidMount", "componentDidUpdate", "componentWillUnmount"],
      },
      {
        p: `но сейчас классовые
    компоненты почти не используются. Поэтому мы их здесь рассматривать не
    будем.`,
      },

      {
        p: `Хук useEffect() предназначен для запуска побочных эффектов`,
      },
      {
        b: "что такое побочные эффекты",
      },
      {
        ul: [
          "вызов API",
          "работа с localStorage",
          "добавление и удаление обработчиков событий",
          "подписки, таймеры и др",
        ],
      },

      {
        b: "Синтаксис:",
      },
      {
        code: `useEffect(() => {
          // код, который выполнится
        }, [зависимости]);`,
      },
      {
        b: "Что принимает useEffect:",
      },
      {
        ul: [
          "callback функция - что нужно выполнить",
          "массив зависимостей [] - когда выполнять callback (и когда не выполнять) ",
        ],
      },
      { b: `Пример 1: эффект при первом рендере (аналог componentDidMount)` },
      {
        code: `
import { useEffect } from 'react';

function HelloMessage() {
useEffect(() => {
  console.log('Компонент отрендерен впервые!');
}, []);

return <p>Привет, мир!</p>;
}
`,
      },
      { b: "Обьяснение" },
      { p: "useEffect принимает два аргумента:" },
      {
        ul: ["Функцию", "Пустой массив зависимостей"],
      },
      {
        p: `Это значит, что эффект выполнится
только один раз,когда компонент появится в DOM.`,
      },
      {
        b: `Пример 2: эффект, зависящий от состояния(аналог componentDidUpdate)`,
      },
      {
        code: `
import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage('Счетчик изменен на: '${"count"}');
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
`,
      },
      {
        p: ` Эффект сработает каждый раз, когда изменится (count)
Это удобно, если нужно синхронизировать состояние компонента с чем-то
внешним — например, с заголовком вкладки, локальным хранилищем, внешним
API и т.д.
`,
      },
      {
        b: `Очистка (аналог componentWillUnmount) 
      Иногда эффект создаёт подписку или таймер, который нужно очистить. Для этого возвращается функция из useEffect:
      `,
      },
      {
        code: ` 


      useEffect(() => {
        const interval = setInterval(() => {
          console.log('Тик!');
        }, 1000);
      
        return () => {
          clearInterval(interval);
          console.log('Компонент размонтирован или зависимость изменилась');
        };
      }, []);`,
      },
      { b: `Заключение:` },
      {
        p: ` useEffect - заменяет классовые методы
      жизненного цикла Он срабатывает: при первом рендере ([]) при изменении
      зависимостей ([count], [data]) Если нужен "отписочный" эффект —
      возвращай функцию`,
      },
    ],
  },
  {
    path: "/props",

    title: "Пропсы",
    content: [
      {
        p: `Props (сокращение от “properties”) — это механизм
    передачи данных от родительского компонента к дочернему.`,
      },
      {
        p: ` Пропсы можно передавать как:`,
      },
      {
        ul: [
          "строки",
          "числа",
          "булевые значения",
          "функции",
          "объекты",
          "и даже JSX",
        ],
      },
      {
        p: "Пропсы это те же самые параметры функции в JS",
      },
      { b: `Пример 1: передача строки как пропса` },
      {
        code: `// Parent.jsx
    import Child from './Child';
    
    function Parent() {
      return <Child name="Паша" />;
    }

// Child.jsx
function Child({ name }) {
  return <p>Привет, {name}!</p>;
}

    `,
      },
      { b: "Обьяснение:" },
      {
        ul: [
          " Родитель Parent передаёт строковый проп name дочернему компоненту Child.",
          "Внутри Child мы получаем его как аргумент в объекте пропсов (или через деструктуризацию).",
        ],
      },
      { b: "Деструктуризация пропсов" },
      { p: `Ты можешь передавать пропсы через объект:` },
      {
        code: `
      function Card(props) {
          return <h2>{props.title}</h2>;
        }`,
      },
      {
        p: `Но чаще используют деструктуризацию, это короче и удобнее, особенно если пропсов много.`,
      },
      {
        code: `
        function Card({ title }) {
          return <h2>{title}</h2>;
        }`,
      },
      {
        p: "🔷 Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.",
      },
      { b: "Что нужно запомнить " },
      {
        ul: [
          "Props - это объекты, которые передаются в компоненты как параметры. Они используются для передачи данных из родительского компонента в дочерний.",
          "Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно указать имя атрибута и значение, которое будет передано в дочерний компонент",
          "Props можно читать в компоненте через объект props. Этот объект содержит все переданные в компонент атрибуты.",
          "Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.",
          "Пропсы нельзя менять",
        ],
      },
    ],
  },

  {
    path: "/structured",

    title: "Структура проекта",
    content: [
      { h1: "Modules VS FSD" },
      { b: "Как устроено?" },
      {
        ul: [
          "Код делится на PAGES (страницы) и COMPONENTS (переиспользуемые UI-элементы).",
          "Логика страницы собирается в одном месте (в pages).",
          "Мелкие компоненты (кнопки, инпуты) хранятся в components.",
        ],
      },
      { p: "Структура проекта (Modules)" },
      {
        code: `/src
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
    ├── index.js     # Точка входа  `,
      },
      {
        ul: [
          "pages — находятся страницы (Home, Profile) → они импортируют нужные компоненты.",
          "components — хранятся общие элементы UI (Button, Input).",
          "hooks — пользовательские хуки, которые можно переиспользовать в проекте.",
          "utils — для чистых функций, которые не зависят от React (formatDate, debounce).",
          "helpers — для функций-помощников, связанных с модулями (authHelper, validationHelper).",
          "redux — хранилище состояния, слайсы (store.js, authSlice.js).",
          "api — для запросов к серверу (authApi.js, userApi.js).",
        ],
      },
      { p: "Структура проекта: FSD" },
      { b: "Как устроено?" },
      {
        ul: [
          "Код разделён на логические уровни.",
          "Чётко разделены бизнес-логика, UI и API-запросы.",
          "Удобно работать в команде — каждый знает, где лежит код.",
        ],
      },
      {
        code: `
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
 │   ├── Input.jsx`,
      },
      {
        ul: [
          "app – отвечает за настройку проекта (роутинг, провайдеры).",
          "pages – собирает страницы из готовых фич.",
          "features – фичи приложения (авторизация, поиск, фильтры).",
          "entities – бизнес-логика (пользователь, товары).",
          "shared – переиспользуемые компоненты (кнопки, формы, утилиты).",
        ],
      },
    ],
  },
  {
    path: "/components",

    title: "Компоненты",
    content: [
      {
        p: "Компоненты — это переиспользуемые блоки, из которых состоит интерфейс приложения. Каждый компонент может содержать логику, разметку, стили и управлять своим состоянием.",
      },

      { b: "Виды компонентов" },

      { p: "В React есть два основных типа компонентов:" },

      {
        ul: [
          "Функциональные — пишутся как обычные функции. Это современный стандарт.",
          "Классовые — основаны на ES6 классах. Сейчас используются редко.",
        ],
      },

      {
        p: "В большинстве случаев ты будешь использовать функциональные компоненты с хуками — это проще, чище и читаемее.",
      },

      { b: "Когда перерисовывается компонент?" },

      { p: "Компонент автоматически перерисовывается при:" },

      {
        ul: [
          "Изменении props (входных данных)",
          "Изменении state через useState или useReducer",
          "Обновлении контекста, если он используется через useContext",
        ],
      },

      { b: "Что такое чистый компонент?" },

      {
        p: "Чистый компонент — это компонент, который рендерится одинаково при одних и тех же входных данных. Он не вызывает побочных эффектов и не зависит от внешних переменных.",
      },

      {
        p: 'Пример: если ты передаёшь name="Паша", компонент всегда должен отрендериться одинаково. Такой компонент можно обернуть в React.memo(), чтобы избежать лишних перерисовок.',
      },

      { b: "Пример 1: Пропсы" },

      {
        code: `
      function UserGreeting({ name }) {
        return <h2>Добро пожаловать, {name}!</h2>;
      }
      
      // Использование
      <UserGreeting name="Паша" />
      `,
      },

      {
        p: "Здесь мы передаём имя через props и выводим его в JSX. Пропсы — только для чтения.",
      },

      { b: "Пример 2: Состояние и useState" },

      {
        code: `
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
      `,
      },

      {
        p: "useState создаёт переменную count и функцию setCount для её изменения. При каждом клике компонент перерисовывается.",
      },

      {
        b: "Существуют два важных термина, которые часто упоминаются:",
      },
      {
        ul: ["Stateful components", "Stateless components"],
      },
      {
        b: "Stateful компоненты",
      },
      {
        p: "Stateful компоненты могут управлять состоянием и изменять свое поведение в зависимости от событий. Они используют внутреннее состояние(state).",
      },
      { b: "Пример:" },
      {
        code: `import React, { useState } from 'react';

        const Counter = () => {
          const [count, setCount] = useState(0);
        
          const increment = () => {
            setCount(count => count + 1);
          };
        
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={increment}>Increment</button>
            </div>
          );
        };`,
      },
      {
        b: "Stateless компоненты",
      },
      {
        p: "Они просто принимают props и возвращают JSX, который описывает, как должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не могут изменять свое поведение в зависимости от событий или действий пользователя.",
      },
      {
        code: `const Greeting = ({name}) => {
          return <h1>Hello, {name}!</h1>;
        };`,
      },
      { b: "Подводные камни" },

      {
        ul: [
          "Каждый вызов setState вызывает перерисовку",
          "Компонент должен возвращать один корневой элемент",
          "Нельзя вызывать хуки внутри условий или циклов",
          "props нельзя мутировать — они только для чтения",
        ],
      },

      {
        p: "React-компоненты — это как функции интерфейса. Они помогают мыслить в терминах «композиции», разбивая сложный UI на простые, переиспользуемые элементы.",
      },
    ],
  },
  {
    path: "/events",

    title: "События",
    content: [
      { b: "События в React:" },
      {
        p: " — это способ обрабатывать действия пользователя: клики, наведение мыши, ввод текста, нажатие клавиш и т.д.",
      },
      {
        p: "Реагируют на действия и запускают функции-обработчики.",
      },

      {
        p: "События в React добавляются через атрибуты вида onClick, onChange и т.д. — прямо на JSX-элементы.",
      },

      { b: "Популярные события" },

      {
        ul: [
          "onClick — срабатывает при клике",
          "onChange — изменение значения (обычно у input)",
          "onFocus — когда элемент получает фокус",
          "onKeyDown — нажатие клавиши",
          "onMouseOver — когда курсор наводится на элемент",
        ],
      },

      { b: " Пример 1: клик по кнопке (onClick)" },

      {
        code: `
        const Button = () => {
          const handleClick = () => {
            alert("Клик!");
          };
        
          return <button onClick={handleClick}>Нажми</button>;
        };
    `,
      },

      { b: " Пример 2: изменение (onChange)" },

      {
        code: `
        const InputExample = () => {
          const [text, setText] = useState('');
        
          return (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          );
        };
    `,
      },
      {
        b: "Пример 3: Отправка формы (onSubmit)",
      },
      {
        code: `
        const Form = () => {
          const handleSubmit = (e) => {
            e.preventDefault(); // чтобы страница не перезагружалась
            console.log("Форма отправлена");
          };
        
          return (
            <form onSubmit={handleSubmit}>
              <input type="text" />
              <button type="submit">Отправить</button>
            </form>
          );
        };`,
      },
      {
        b: "Пример 4: onMouseOver (Наведение курсора):",
      },
      {
        code: `const handleMouseOver = () => {
          console.log('Курсор наведен!');
        }
        
        const MyComponent = () => {
          return (
            <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
          );
        }`,
      },
      {
        b: "Пример 5: нажатие клавиши (onKeyDown):",
      },
      {
        code: `
        const handleKeyDown = (event) => {
          console.log('Нажата клавиша:', event.key);
        }
        
        const MyComponent = () => {
          return (
            <input type="text" onKeyDown={handleKeyDown} />
          );
        }`,
      },

      {
        b: " Как работает event в React?",
      },
      {
        p: "React использует собственную систему событий: SyntheticEvent.Это обёртка над обычным браузерным событием, чтобы события работали одинаково во всех браузерах.",
      },

      { b: "Редкие, но существующие события" },

      { p: "Иногда применяются менее популярные события:" },

      {
        ul: [
          "onDoubleClick — двойной клик",
          "onContextMenu — ПКМ (правая кнопка мыши)",
          "onTouchStart, onTouchEnd — для мобильных",
          "onScroll — прокрутка",
          "onDrag, onDrop — перетаскивание",
          "onBlur — потеря фокуса",
          "onInput — ввод данных, аналогично onChange",
        ],
      },

      { b: "В чём разница: event.target.value vs event.currentTarget.value" },

      {
        ul: ["event.target — это тот элемент, на котором произошло событие."],
      },
      {
        ul: [
          'event.currentTarget — это тот элемент, на котором "висит" обработчик.',
        ],
      },

      {
        p: "Чаще всего они совпадают, но если у тебя вложенные элементы с bubbling (всплытием событий), то:",
      },

      {
        ul: [
          "event.target.value покажет значение элемента, который был фактически активен (нажат, изменён).",
          "event.currentTarget.value покажет значение элемента, к которому привязан обработчик.",
        ],
      },

      {
        p: "В большинстве случаев для input-ов ты используешь event.target.value.",
      },

      { b: "Важные методы события" },

      {
        ul: [
          "preventDefault() — отменяет поведение по умолчанию (например, отправку формы).",
        ],
      },
      {
        code: `import React, { useState } from 'react';

        const MyForm = () => {
          const [name, setName] = useState('');
        
          const handleSubmit = (event) => {
            event.preventDefault(); // Отменяет отправку формы
            alert('Форма не отправлена. Имя: $ {name}');
          };
        
          return (
            <form onSubmit={handleSubmit}>
              <label>
                Имя:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <button type="submit">Отправить</button>
            </form>
          );
        };
        
        export default MyForm;`,
      },
      {
        ul: [
          "stopPropagation() — останавливает всплытие события вверх по DOM.",
        ],
      },
      {
        code: `import React from 'react';

        const ParentComponent = () => {
          const handleClickParent = () => {
            console.log('Клик по родительскому элементу');
          };
        
          const handleClickChild = (event) => {
            event.stopPropagation(); // Останавливает всплытие события
            console.log('Клик по дочернему элементу');
          };
        
          return (
            <div onClick={handleClickParent}>
              Родительский элемент
              <div onClick={handleClickChild}>
                Дочерний элемент
              </div>
            </div>
          );
        };
        
        export default ParentComponent`,
      },
      {
        p: 'В этом примере, при клике на дочерний элемент #child, событие не будет передаваться на родительский элемент #parent. То есть, сообщение "Родительский элемент" в консоли не появится.',
      },
      {
        ul: [
          "event.stopImmediatePropagation() - работает похожим образом как stopPropagation, дополнительно останавливает выполнение других обработчиков события",
        ],
      },
      {
        code: `import React from 'react';

        const MyButton = () => {
          const handleClickFirst = (event) => {
            event.stopImmediatePropagation(); // Останавливает выполнение других обработчиков
            console.log('Первый обработчик');
          };
        
          const handleClickSecond = () => {
            console.log('Второй обработчик (не сработает)');
          };
        
          return (
            <button onClick={handleClickFirst} onClick={handleClickSecond}>
              Кликни меня
            </button>
          );
        };
        
        export default MyButton;`,
      },
      {
        b: "Отличия между stopPropagation() и stopImmediatePropagation()",
      },
      {
        ul: [
          "stopPropagation() предотвращает распространение события по дереву DOM, но не останавливает другие обработчики, которые могут быть назначены на текущий элемент.",
          "stopImmediatePropagation() не только предотвращает распространение события, но и останавливает выполнение других обработчиков события на том же элементе.",
        ],
      },
    ],
  },

  {
    path: "/optimization",

    title: "Оптимизация",
    content: [
      {
        p: "Оптимизация важна, когда приложение становится большим или чувствительным к производительности. React предоставляет несколько инструментов, которые позволяют избежать лишних ререндеров, дорогостоящих вычислений и ускорить загрузку:",
      },

      { b: "Основные инструменты:" },
      {
        ul: [
          "React.memo(Component) — мемоизирует функциональный компонент. Ререндерится только если изменились пропсы.",
          "useMemo(fn, deps) — кэширует результат функции. Полезно при тяжёлых вычислениях.",
          "useCallback(fn, deps) — мемоизирует функцию. Полезно при передаче колбеков в дочерние компоненты.",
          "React.lazy — позволяет отложить загрузку компонента до момента, когда он понадобится.",
          "Suspense — используется вместе с lazy для отображения fallback-компонента при загрузке.",
          "React.Profiler — инструмент для анализа производительности. Показывает сколько времени занял рендер.",
        ],
      },

      { b: "Пример с React.memo" },
      {
        code: `import { memo } from "react";

    const MyComponent = ({ text }) => {
      console.log("Рендер MyComponent");
      return <p>{text}</p>;
    };
    
    export default memo(MyComponent);`,
      },

      { b: "Пример с useMemo" },
      {
        code: `import { useMemo } from "react";

    const ExpensiveCalc = ({ num }) => {
      const result = useMemo(() => {
        console.log("Вычисление...");
        return num ** 2;
      }, [num]);
    
      return <p>Результат: {result}</p>;
    };`,
      },

      { b: "Пример с useCallback" },
      {
        code: `import { useCallback, useState } from "react";

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
    };`,
      },

      { b: "Пример с React.lazy и Suspense" },
      {
        code: `import React, { lazy, Suspense } from "react";

    const LazyComp = lazy(() => import("./LazyComp"));
    
    const App = () => (
      <Suspense fallback={<p>Загрузка...</p>}>
        <LazyComp />
      </Suspense>
    );`,
      },

      { b: "Что и когда использовать?" },
      {
        ul: [
          "Используй React.memo для компонентов, которые часто рендерятся с одними и теми же пропсами.",
          "useMemo полезен, если внутри компонента есть тяжёлые расчёты.",
          "useCallback помогает избежать лишнего создания функций при каждом рендере.",
          "React.lazy + Suspense — отличная стратегия для ленивой загрузки больших модулей.",
        ],
      },

      { b: "Потенциальные ошибки и антипаттерны:" },
      {
        ul: [
          "Не стоит мемоизировать всё подряд: useMemo и useCallback сами по себе тоже стоят ресурсов.",
          "Неправильные зависимости: при использовании хуков важно правильно указывать deps. Иначе мемоизация будет бесполезной или вызовет баг.",
          "Лишняя вложенность компонентов и тяжелый JSX могут вызвать рекурсивные ререндеры — избегай их.",
        ],
      },

      { b: "Инструменты для анализа:" },
      {
        ul: [
          "React DevTools — вкладка Profiler позволяет отследить рендеры компонентов и время выполнения.",
          "why-did-you-render — библиотека, которая показывает в консоли, какие компоненты зря перерисовались.",
        ],
      },

      {
        b: "Оптимизация — это не цель, а средство. Не начинай с неё. Сначала сделай рабочий код, затем при росте сложности — оптимизируй.",
      },
    ],
  },
  {
    path: "/hoc",

    title: "Функция высшего порядка - HOC",
    content: [
      {
        p: "HOC — это функция, которая принимает компонент и возвращает новый компонент с дополнительным поведением. Это паттерн для повторного использования логики между компонентами.",
      },

      { b: "Какую проблему решают HOC?" },
      {
        p: "Когда нужно добавить одинаковое поведение или данные нескольким компонентам, не дублируя код, можно создать HOC. Это помогает избежать копирования, упрощает поддержку и расширение функционала.",
      },

      { b: "Пример: базовый HOC, добавляющий пропсы" },
      {
        code: `
      const withExtraProp = (Component) => (props) => {
        return <Component extra="Я добавлен HOC" {...props} />;
      };
      
      function SimpleComponent({ extra }) {
        return <div>{extra}</div>;
      }
      
      export default withExtraProp(SimpleComponent);
      `,
      },

      { b: "Пример: HOC для авторизации" },
      {
        p: "HOC может проверять, авторизован ли пользователь, и в зависимости от этого показывать либо контент, либо сообщение о входе:",
      },
      {
        code: `
      function withAuth(Component) {
        return function WrappedComponent(props) {
          const isAuthenticated = Boolean(localStorage.getItem("token"));
      
          if (!isAuthenticated) {
            return <p>Пожалуйста, войдите в систему</p>;
          }
      
          return <Component {...props} />;
        };
      }
      
      function Dashboard() {
        return <h1>Добро пожаловать в панель управления</h1>;
      }
      
      export default withAuth(Dashboard);
      `,
      },

      { b: "Пример: HOC для логирования рендера" },
      {
        p: "HOC, который логирует в консоль каждый рендер обёрнутого компонента — полезно для отладки и оптимизации:",
      },
      {
        code: `
      function withLogging(Component) {
        return function WrappedComponent(props) {
          console.log("Рендер компонента:", Component.name);
      
          return <Component {...props} />;
        };
      }
      
      function Button(props) {
        return <button {...props}>Нажми меня</button>;
      }
      
      export default withLogging(Button);
      `,
      },

      { b: "Когда использовать HOC?" },
      {
        ul: [
          "Когда нужно разделить и повторно использовать логику между разными компонентами.",
          "Для внедрения поведения, не зависящего от UI — например, авторизация, логирование, кеширование.",
          "При работе с классическими React-компонентами (HOC исторически были популярны до появления хуков).",
        ],
      },

      { b: "Важные моменты и советы" },
      {
        ul: [
          "HOC не меняют поведение оригинального компонента, они создают новый с расширенной функциональностью.",
          "Важно сохранять рефы и имена компонентов (можно использовать React.forwardRef и displayName).",
          "С появлением хуков часто проще использовать кастомные хуки вместо HOC.",
          "Множественные вложенные HOC могут усложнять отладку и читать код становится труднее.",
        ],
      },

      { b: "Заключение:" },
      {
        ul: [
          "HOC (компонент высшего порядка) — это функция, которая принимает компонент и возвращает новый улучшенный компонент.",
          "HOC используется для переиспользования логики между компонентами (например, загрузка данных, авторизация, обработка ошибок)",
          "Не должен изменять оригинальный компонент напрямую, а создавать новый, обёрнутый.",
          "HOC часто используют внутри себя props proxying — передают и модифицируют пропсы перед отдачей дочернему компоненту.",
          'HOC можно комбинировать и вкладывать друг в друга, как "матрёшки", например:',
        ],
      },
      {
        code: `export default withTheme(withAuth(MyComponent));`,
      },
      {
        ul: [
          "Важно сохранять читаемость и названия компонентов (использовать displayName).",
          "Сегодня часто HOC заменяют хуками, потому что хуки проще и чище. Но HOC всё ещё применимы, особенно при разделении логики.",
          'Важно избегать "wrapper hell" — слишком глубокой вложенности HOC, что ухудшает отладку и читаемость.',
        ],
      },
    ],
  },
  {
    path: "/react-router",

    title: "Роутинг в React",
    content: [
      { p: " — react-router играет важную часть в react" },

      { b: "Установка в проект с Vite" },
      {
        p: "Для начала работы с React Router в проекте на Vite выполните команду:",
      },
      {
        code: `npm install react-router-dom@latest`,
      },
      {
        p: "Мы устанавливаем пакет react-router-dom — именно он содержит все необходимые инструменты для маршрутизации в веб-приложениях на React.",
      },

      { b: "Основные компоненты маршрутизации:" },

      { ul: ["BrowserRouter"] },
      {
        b: "Импорт",
      },
      {
        code: `import { BrowserRouter } from 'react-router-dom';`,
      },

      {
        p: "Это компонент, который оборачивает ваше приложение и предоставляет контекст для маршрутизации. Он используется для настройки основного маршрутизатора в приложении.",
      },

      {
        b: "Где использовать: Обычно в main.jsx или App.jsx:",
      },
      {
        code: `import ReactDOM from 'react-dom/client';
        import App from './App';
        import { BrowserRouter } from 'react-router-dom';
        
        ReactDOM.createRoot(document.getElementById('root')).render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        );`,
      },

      { ul: ["Routes"] },
      {
        b: "Импорт:",
      },
      {
        code: `import { Routes } from 'react-router-dom';`,
      },
      {
        p: "Это компонент, который содержит определения маршрутов и соответствующих им компонентов. Вы определяете маршруты внутри компонента Routes, используя элемент Route.",
      },

      {
        b: "Контейнер для всех <Route>.",
      },
      {
        code: `<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>`,
      },
      { ul: ["Route"] },
      {
        b: "Импорт:",
      },
      {
        code: `import { Route } from 'react-router-dom';`,
      },

      {
        p: "Компонент Route используется для определения отдельных маршрутов и связанных с ними компонентов. Вы можете определить маршруты с помощью элемента Route, указывая путь URL и связанный с ним компонент, который будет отображаться при совпадении маршрута.",
      },

      { b: "Связывает путь (path) с компонентом (element)." },
      {
        code: `<Route path="/about" element={<About />} />`,
      },
      {
        ul: ["Link и NavLink:"],
      },
      {
        b: "Импорт:",
      },
      {
        code: `import { Link, NavLink } from 'react-router-dom';`,
      },
      {
        p: "Компоненты Link и NavLink используются для создания ссылок для навигации между маршрутами. Они работают аналогично версии 5, позволяя пользователю переходить к соответствующим маршрутам без перезагрузки страницы. NavLink также предоставляет возможности для стилизации активных ссылок и текущего маршрута.",
      },

      {
        code: `<Link to="/about">О нас</Link>

        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          О нас
        </NavLink>`,
      },
      {
        b: "NavLink даёт доступ к isActive — можно стилизовать активную ссылку.",
      },

      {
        ul: ["Outlet"],
      },
      {
        b: "Импорт:",
      },
      {
        code: `import { Outlet } from 'react-router-dom';`,
      },
      {
        p: "Компонент Outlet является контейнером, в котором будут отображаться компоненты, связанные с соответствующими маршрутами. Он заменяет Switch из версии 5 и автоматически выбирает и рендерит компонент, соответствующий текущему маршруту",
      },

      {
        code: `const Layout = () => (
          <>
            <Navbar />
            <Outlet /> {/* сюда попадёт Home или About */}
          </>
        );
        
        // В App.js
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>`,
      },
      {
        ul: ["useNavigate"],
      },
      {
        b: "Импорт:",
      },
      {
        code: `import { useNavigate } from 'react-router-dom';`,
      },
      {
        p: "Хук useNavigate используется для программной навигации между маршрутами. Он позволяет вам переходить к другим маршрутам из компонентов или обработчиков событий.",
      },
      {
        code: `const navigate = useNavigate();

        const handleClick = () => {
          navigate('/about');
        };`,
      },
      {
        ul: ["useParams"],
      },
      {
        b: "Импорт:",
      },
      {
        code: `import { useParams } from 'react-router-dom';`,
      },
      {
        p: "Хук useParams используется для получения параметров маршрута, переданных через URL. Он позволяет вам извлекать и использовать динамические данные из пути маршрута.",
      },
      {
        code: `const { id } = useParams(); // id === "42"`,
      },
      {
        ul: ["useLocation"],
      },
      {
        b: "Импорт:",
      },
      {
        code: `import { useLocation } from 'react-router-dom';`,
      },
      {
        p: "Хук useLocation используется для получения информации о текущем URL. Он предоставляет доступ к объекту location, который содержит информацию о текущем пути, параметрах и других деталях URL.",
      },
      {
        code: `import { useLocation } from 'react-router-dom';

        // ...
        
        const Page = () => {
          const location = useLocation();
        
          return (
            <div>
              <h1>Текущий URL: {location.pathname}</h1>
            </div>
          );
        };`,
      },
      {
        b: "Итоги:",
      },
      {
        ul: [
          "Оборачиваешь всё в <BrowserRouter>",
          "Внутри <App /> — создаёшь <Routes>, с вложенными <Route>",
          "Hавигация — через <Link>, <NavLink> или useNavigate",
          "Динамические URL — через useParams",
          "Получить путь/поиск — через useLocation",
          "Сложная вложенность — через <Outlet>",
        ],
      },
    ],
  },
  {
    path: "/storages",

    title: "Локальное хранилище",
    content: [
      { b: "Что такое Web Storage?" },
      {
        p: "Web Storage — это встроенный механизм браузера для хранения данных в формате ключ-значение. Позволяет сохранять информацию на стороне клиента, что удобно для кэширования, сохранения настроек, сессий и других целей.",
      },

      { b: "localStorage vs sessionStorage" },
      {
        ul: [
          "localStorage хранит данные постоянно, даже после закрытия и повторного открытия браузера.",
          "sessionStorage хранит данные только на время текущей сессии — данные исчезают при закрытии вкладки или браузера.",
        ],
      },

      { b: "Основные методы Web Storage" },
      {
        ul: [
          "setItem(key, value) — сохранить или обновить значение по ключу.",
          "getItem(key) — получить значение по ключу.",
          "removeItem(key) — удалить запись по ключу.",
          "clear() — очистить всё хранилище.",
          "key(index) — получить ключ по индексу (редко используется).",
          "length — количество записей в хранилище.",
        ],
      },

      { b: "Пример использования localStorage" },
      {
        code: `
      // Запись в localStorage
      localStorage.setItem("username", "Паша");
      
      // Чтение из localStorage
      const user = localStorage.getItem("username");
      
      // Удаление из localStorage
      localStorage.removeItem("username");
      
      // Очистка всего localStorage
      localStorage.clear();
      `,
      },

      { b: "Пример использования sessionStorage" },
      {
        code: `
      // Запись в sessionStorage
      sessionStorage.setItem("sessionId", "123456");
      
      // Чтение из sessionStorage
      const session = sessionStorage.getItem("sessionId");
      
      // Удаление из sessionStorage
      sessionStorage.removeItem("sessionId");
      
      // Очистка всего sessionStorage
      sessionStorage.clear();
      `,
      },

      { b: "Как проверить и работать с Web Storage в DevTools" },
      {
        p: "В Chrome DevTools откройте вкладку Application → Storage → Local Storage или Session Storage. Там вы увидите таблицу с ключами и значениями, которые сохраняет ваше приложение.",
      },

      { b: "Особенности и рекомендации" },
      {
        ul: [
          "Хранилище имеет ограничение по размеру (~5MB в большинстве браузеров).",
          "Хранить стоит только небольшие и не чувствительные данные (никогда пароли, токены без защиты).",
          "Данные в localStorage/sessionStorage доступны скриптам с того же домена — будьте осторожны с XSS-уязвимостями.",
          "Все значения сохраняются как строки, для объектов используйте JSON.stringify() и JSON.parse().",
          "sessionStorage работает на уровне вкладки — закрытие вкладки удаляет данные, в отличие от localStorage.",
        ],
      },

      { b: "Пример сохранения объекта" },
      {
        code: `const user = { name: "Паша", age: 28 };

// Сохраняем объект как строку JSON
localStorage.setItem("user", JSON.stringify(user));

// Читаем и парсим обратно в объект
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Паша"`,
        lang: "js",
      },

      { b: "Заключение" },
      {
        p: "localStorage и sessionStorage — простые и удобные API для хранения данных в браузере. Их легко использовать для хранения настроек, кеша, информации о сессии и многого другого. Главное — использовать их с умом и не хранить конфиденциальную информацию.",
      },
    ],
  },
  {
    path: "/context",
    title: "Контекст (useContext)",
    content: [
      { b: "Зачем нужен Context? (проблема prop drilling)" },
      {
        p: "Context API решает проблему prop drilling — когда данные приходится передавать через множество промежуточных компонентов, которым эти данные не нужны, но они служат лишь проводниками.",
      },
      {
        code: `
// Без Context
const App = () => {
  const user = { name: "Паша" };
  return <Layout user={user} />;
};

const Layout = ({ user }) => {
  return <Header user={user} />;
};

const Header = ({ user }) => {
  return <UserInfo user={user} />;
};

const UserInfo = ({ user }) => {
  return <p>Привет, {user.name}</p>;
};
`,
      },
      {
        p: "С помощью Context API мы избегаем передачи через Layout, Header и сразу получаем данные там, где они нужны:",
      },
      {
        code: `
// С Context
const UserContext = React.createContext();

const App = () => {
  const user = { name: "Паша" };
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
};

const UserInfo = () => {
  const user = useContext(UserContext);
  return <p>Привет, {user.name}</p>;
};
`,
      },
      { b: "Можно ли использовать несколько контекстов?" },
      {
        p: "Да, ты можешь создать и вложить несколько разных контекстов. Например, тему и язык:",
      },
      {
        code: `
// Создание двух контекстов
const ThemeContext = React.createContext();
const LanguageContext = React.createContext();

// Провайдеры
const App = () => {
  return (
    <ThemeContext.Provider value="light">
      <LanguageContext.Provider value="ru">
        <Main />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

// Использование
const Main = () => {
  const theme = useContext(ThemeContext);
  const lang = useContext(LanguageContext);
  return <p>Тема: {theme}, Язык: {lang}</p>;
};
`,
      },
      { b: "Совет: выделяй контексты в отдельный файл" },
      {
        p: "Чтобы сделать код чище и переиспользуемым, контексты удобно выносить в отдельный файл. Пример:",
      },
      {
        code: `
// theme-context.js
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
`,
      },
      {
        code: `
// App.js
import { ThemeProvider } from "./theme-context";

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);
`,
      },

      {
        p: "Context API позволяет передавать данные через дерево компонентов без необходимости явно прокидывать пропсы на каждом уровне.",
      },
      { b: "Когда использовать Context?" },
      {
        ul: [
          "Когда одно и то же значение нужно использовать во многих компонентах (например, тема, язык, аутентификация)",
          'Когда хочется избежать "проп дриллинга" — передачи пропсов через несколько уровней компонентов',
        ],
      },
      { b: "Пример: контекст темы" },
      {
        code: `
// 1. Создание контекста
const ThemeContext = React.createContext();

// 2. Провайдер
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Использование useContext
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Переключить тему
    </button>
  );
};
`,
      },
      { b: "useContext vs Consumer" },
      {
        p: "Ранее данные из контекста получали через <Context.Consumer>. Сейчас обычно используется хук useContext.",
      },
      {
        code: `
// Старый способ:
<ThemeContext.Consumer>
  {(value) => <div>{value.theme}</div>}
</ThemeContext.Consumer>

// Новый способ:
const { theme } = useContext(ThemeContext);
`,
      },
      { b: "Рекомендации" },
      {
        ul: [
          "Не злоупотребляй Context API — для сложного состояния лучше использовать Redux, Zustand или другие библиотеки",
          "Контекст лучше создавать отдельно от компонентов и экспортировать",
          "Оборачивай приложение в Provider на высоком уровне (например, в App.js)",
        ],
      },
      {
        a: {
          href: "https://react.dev/learn/passing-data-deeply-with-context",
          text: "Официальная документация по Context",
        },
      },
    ],
  },
  {
    path: "/fragment",
    title: "Фрагмент <>",
    content: [
      { h1: "React.Fragment — что это такое и зачем он нужен?" },
      {
        p: "В React каждый компонент может возвращать только один корневой элемент**. Если тебе нужно вернуть несколько элементов, но не хочется оборачивать их в лишний div, можно использовать React.Fragment.",
      },

      { b: "Зачем нужен Fragment?" },
      {
        p: "Он позволяет группировать элементы без добавления лишней обёртки в DOM. Это полезно, когда не хочется нарушать структуру HTML или влиять на стилизацию.",
      },

      { b: "Пример с лишним div" },
      {
        code: `
const List = () => {
  return (
    <div>
      <li>Первый</li>
      <li>Второй</li>
    </div>
  );
};
`,
      },
      {
        p: "В этом примере div будет лишним элементом в DOM внутри ul, что **некорректно по HTML-структуре.",
      },

      { b: "Как использовать Fragment" },
      {
        code: `
const List = () => {
  return (
    <React.Fragment>
      <li>Первый</li>
      <li>Второй</li>
    </React.Fragment>
  );
};
`,
      },

      { b: "Сокращённый синтаксис" },
      {
        p: "Можно использовать сокращённую запись — пустые угловые скобки '<> </>':",
      },
      {
        code: `
const List = () => {
  return (
    <>
      <li>Первый</li>
      <li>Второй</li>
    </>
  );
};
`,
      },

      { b: "Когда использовать Fragment?" },
      { p: "Когда нужно вернуть несколько элементов без лишней обёртки." },
      { b: "Может ли Fragment принимать пропсы?" },
      {
        p: "React.Fragment может принимать только один проп — key. Это бывает полезно при возврате массива компонентов.",
      },
      {
        code: `
const items = ["React", "Context", "Hooks"];
return items.map((item, index) => (
  <React.Fragment key={index}>
    <h3>{item}</h3>
    <p>Описание темы: {item}</p>
  </React.Fragment>
));
    `,
      },
    ],
  },
  {
    path: "/fiber",
    title: "fiber",
    content: [
      { h1: "Что такое React Fiber?" },
      {
        p: "React Fiber — это новая архитектура ядра React, представленная в версии React 16. Она пришла на смену старому механизму, основанному на Virtual DOM, и предлагает более гибкий и мощный способ обработки обновлений интерфейса.",
      },
      { b: "Почему появилась необходимость в Fiber?" },
      {
        p: "До Fiber React использовал стековую рекурсивную модель обхода дерева компонентов, основанную на Virtual DOM. Этот подход был быстрым, но имел ряд ограничений. Главное из них — невозможность приостановить и возобновить работу над обновлением UI. Это делало тяжелые обновления менее управляемыми и могло вызывать подвисания интерфейса.",
      },
      { b: "Что изменилось с приходом Fiber?" },
      {
        ul: [
          "Разделение работы на небольшие фрагменты (units of work), которые можно прервать и возобновить.",
          "Более точный контроль над приоритетами обновлений компонентов.",
          "Поддержка асинхронного рендеринга.",
          "Основа для новых возможностей, таких как Suspense и Concurrent Mode.",
          "Улучшенная организация дерева компонентов — теперь это Fiber-дерево, в котором каждый узел — это JavaScript-объект с дополнительной информацией.",
        ],
      },
      { b: "Как работает Fiber?" },
      {
        p: "Fiber разбивает процесс рендеринга на две фазы: Render Phase (подготовка) и Commit Phase (применение изменений). Во время первой фазы React может приостановить работу, если в приоритете другие задачи, а затем продолжить с того же места. Это обеспечивает отзывчивость интерфейса даже при больших обновлениях.",
      },
      { b: "Итог" },
      {
        p: "React Fiber — это фундаментальная переработка внутренностей React, сделанная для повышения производительности и гибкости. Она не изменила внешний API React, но значительно расширила его возможности под капотом.",
      },
    ],
  },
];

export default content;
