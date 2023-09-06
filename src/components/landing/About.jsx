import AppConstants from "../../utils/AppConstants";

const About = () => {
  const fontStyle = {
    fontFamily: "Nico Moji",
  };

  return (
    <section className="text-white pb-20">
      <div className="container mx-auto">
        <div className="flex text-center flex-col items-center">
          <h2 className="text-7xl font-bold mb-8" style={fontStyle}>
            About U
            <span className="events-header text-red-600 font-bold">
              &#123;S&#125;
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-4xl mb-12">
            {AppConstants.ABOUT_LANDING_PAGE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
