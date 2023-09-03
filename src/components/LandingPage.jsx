import "../styles/landingpage.css";

const LandingPage = () => {
  return (
    <div>
      {/*create a grid layout with 3 rows and 3 columns and width should be full screen in tailwind css */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
      </div>
    </div>
  );
};

export default LandingPage;
