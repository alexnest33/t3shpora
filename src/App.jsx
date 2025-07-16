import { Routes, Route, NavLink } from "react-router";
import Home from "./components/Home/Home";
import UseState from "./pages/useState/useState";
import "./App.css";

function App() {
  <NavLink to={"/useState"}>useState</NavLink>;

  return (
    <>
      <NavLink to={"/useState"}>useState</NavLink>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
      </Routes>
    </>
  );
}

export default App;
