import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blog";
import Events from "./pages/Events";
// import Events from "./components/Events";

function App() {
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
        <TheFooter className="mt-16" />
      </BrowserRouter>
    </>
  );
}

export default App;
