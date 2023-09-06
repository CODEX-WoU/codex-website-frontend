import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import HomePage from "./pages/HomePage";
// import Events from "./components/Events";

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
                  <HomePage />
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <TheFooter className="mt-16" />
    </>
  );
}

export default App;
