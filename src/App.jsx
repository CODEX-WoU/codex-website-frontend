import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Events from "./components/Events";
import LandingPageAlt from "./components/LandingPageAlt";

function App() {
  return (
    <>
      <TheHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <div>
                  <LandingPageAlt />
                  {/* <Events /> */}
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <TheFooter />
    </>
  );
}

export default App;
