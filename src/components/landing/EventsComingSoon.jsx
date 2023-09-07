import ComingSoon from "../ComingSoon";
const EventsComingSoon = () => {
  return (
    <div className="max-h-screen min-h-screen">
      <h2 className="text-7xl text-white text-center mt-9 heading-font">
        Event
        <span className="heading-font text-red-600 font-bold">
          &#123;S&#125;
        </span>
      </h2>
      <ComingSoon text="Will be Announced Soon" />
    </div>
  );
};

export default EventsComingSoon;
