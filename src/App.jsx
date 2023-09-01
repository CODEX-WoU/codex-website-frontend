import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <>
      <TheHeader />

      <TheFooter />
    </>
  );
}

export default App;
