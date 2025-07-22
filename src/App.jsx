import { Routes, Route, NavLink } from "react-router";
import navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <div className="sidenav">
        <nav>
          {navigation.map((item) => {
            return (
              <NavLink to={item.path} key={item.path}>
                {item.title} 
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="main">
        <Routes>
          {navigation.map((item) => {
            return <Route path={item.path} element={item.element} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
