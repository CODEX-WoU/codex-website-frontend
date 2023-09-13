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
      <div className="group-hover:opacity-100 opacity-0 transition-opacity ease-in-out delay-150 duration-300 align-middle items-center py-3 px-10 bg-white/10  min-w-[30%] md:min-w-[30%] sm:min-w-[100%] backdrop-brightness-50 rounded-full">
        <div className="text-3xl font-['Nico_Moji']">{props.title}</div>
        <div className="font-['Nico_Moji'] mt-4 text-xl">{props.date}</div>
      </div>
    </div>
  );
};

export default SliderElement;
