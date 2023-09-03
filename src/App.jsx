import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import LandingPage from "./components/LandingPage";
import Events from "./components/Events";

function App() {
  return (
    <>
      <TheHeader />
      <LandingPage/>
      <Events />
      <TheFooter />
    </>
  );
}

export default App;
