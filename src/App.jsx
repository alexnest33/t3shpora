import { Routes, Route, NavLink } from "react-router";
import UseState from "./pages/useState/useState";
import UseEffect from "./pages/UseEffect/useEfect";
import Props from "./pages/Props/propss";
import Fiber from "./pages/Fiber/fiber";
import "./App.css";
import Structured from "./pages/Fiber/Structured/structured";
import Component from "./pages/Component/component";
import Events from "./pages/Events/events";
import Optimization from "./pages/Optimization/optimizaiton";
import Context from "./pages/Context/context";
import Hoc from "./pages/HOC/hoc";
import Routers from "./pages/Routers/router";
import Storages from "./pages/Storages/storages";

function App() {
  return (
    <>
      
      <div class="sidenav">
        <NavLink to={"/useState"}>useState</NavLink>
        <NavLink to={"/useEffect"}>useEffect</NavLink>
        <NavLink to={"/props"}>Props</NavLink>
        <NavLink to={"/fiber"}>Fiber</NavLink>
        <NavLink to={"/structured"}>Structured</NavLink>
        <NavLink to={"/component"}>Components</NavLink>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/optimization"}>Optimization</NavLink>
        <NavLink to={"/context"}>Context</NavLink>
        <NavLink to={"/hoc"}>HOC(Higher-Order-Component)</NavLink>
        <NavLink to={"/react-router"}>React-Router</NavLink>
        <NavLink to={"/storages"}>Storages</NavLink>
      </div>

      <div class="main">
        <Routes>
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/props" element={<Props />} />
          <Route path="/fiber" element={<Fiber />} />
          <Route path="/structured" element={<Structured />} />
          <Route path="/component" element={<Component />} />
          <Route path="/events" element={<Events />} />
          <Route path="/optimization" element={<Optimization />} />
          <Route path="/context" element={<Context />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/react-router" element={<Routers />} />
          <Route path="/storages" element={<Storages />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
