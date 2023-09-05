import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
// import Events from "./components/Events";
import LandingPageAlt from "./components/LandingPageAlt";
<<<<<<< HEAD
import Contact from "./components/Contact";
=======
import EventsAlt from "./components/EventsAlt";
>>>>>>> ba521ed (Added EventsAlt)

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
<<<<<<< HEAD
                  <Contact />
                  {/* <Events /> */}
=======
                  <EventsAlt />
>>>>>>> ba521ed (Added EventsAlt)
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
