import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooterAlt from "./components/TheFooterAlt";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blog";
import Events from "./pages/Events";
// import Events from "./components/Events";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <div>
                  <HomePage />
                </div>
              }
            />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="/events" exact element={<Events />} />
          </Route>
        </Routes>
        <TheFooterAlt />
      </BrowserRouter>
    </>
  );
}

export default App;
