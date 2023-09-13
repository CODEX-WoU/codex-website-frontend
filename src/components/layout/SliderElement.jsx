import { useState, useEffect } from "react";

const useProgressiveImage = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
const SliderElement = (props) => {
  const loaded = useProgressiveImage(props.backgroundImage);

  return (
    <div
      style={{
        backgroundImage: `url(${loaded || ""})`,
      }}
      className="group flex items-end justify-evenly text-center pb-8 slider-list-element min-h-[600px] min-w-[200px]"
    >
      <div className="group-hover:opacity-100 opacity-0 transition-opacity ease-in-out delay-150 duration-300 flex align-middle items-center p-3 bg-white/10 w-screen md:w-[65%] justify-evenly backdrop-brightness-50">
        <div className="font-['Nico_Moji'] text-left flex-1 text-3xl">
          Freshmen Induction By GeeksForGeeks
        </div>
        <div className="font-['Nico_Moji'] text-right">
          Date: 15th Sept, 2023
        </div>
      </div>
    </div>
  );
};

export default SliderElement;
