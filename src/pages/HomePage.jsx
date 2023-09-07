// import EventsAlt from "../components/landing/EventsAlt";
import LandingPageAlt from "../components/landing/LandingPageAlt";
import Members from "../components/landing/Members";
// import Contact from "../components/landing/Contact";
import About from "../components/landing/About";
import Blogs from "../components/landing/Blog";
import EventsComingSoon from "../components/landing/EventsComingSoon";

const HomePage = () => {
  return (
    <div>
      <LandingPageAlt />
      <About />
      {/* <EventsAlt
        className="pt-12"
        backgroundColor="bg-[var(--dark-mode-background-light-1)]"
        color="text-[var(--dark-mode-color)]"
      /> */}
      <EventsComingSoon />
      <Blogs />
      <Members className="bg-[var(--dark-mode-background-light-2)] pt-12" />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
