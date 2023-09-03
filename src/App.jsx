import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <TheHeader />
      <LandingPage/>
      <TheFooter />
    </>
  );
}

export default App;
