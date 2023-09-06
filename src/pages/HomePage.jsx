import EventsAlt from "../components/landing/EventsAlt";
import LandingPageAlt from "../components/landing/LandingPageAlt";
import Members from "../components/landing/Members";

const HomePage = () => {
  return (
    <div>
      <LandingPageAlt />
      <EventsAlt className="pt-12" />
      <Members className="bg-neutral-950 pt-12" />
    </div>
  );
};

export default HomePage;
