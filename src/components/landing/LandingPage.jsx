import "../../styles/landingpagealt.css";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import AppConstants from "../../utils/AppConstants";
import mainGif from "../../assets/wp2757861.gif";

const LandingPageAlt = () => {
  const [layoutConfig, setlayoutConfig] = useState({
    cols: "grid-cols-12",
    showGif: true,
    marginOnIcons: "mr-16",
  });

  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    function setLayoutConfigValues() {
      if (windowWidth.current < 990) {
        setlayoutConfig({
          cols: "grid-cols-5",
          showGif: false,
          marginOnIcons: "mr-8",
        });
      }
    }

    setLayoutConfigValues();
  }, []);

  return (
    <div className="landing-page-root min-h-[90%]">
      <div className={`grid ${layoutConfig.cols} gap-4 min-h-[800px]`}>
        <div className="col-span-5 text-center">
          <div className="pb-16 flex flex-wrap items-center align-middle justify-center title-text text-7xl 2xl:text-9xl min-h-[800px] text-white ">
            {" "}
            CODE
            <span className="text-red-600 font-bold">&#123;X&#125;</span>
            <div className="text-xs leading-normal min-w-[15rem] ">
              <TypeAnimation
                sequence={[
                  AppConstants.LANDING_PAGE_BLINKING_CURSOR_TEXT,
                  5000,
                  "",
                  1800,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                repeat={Infinity}
                style={{
                  fontWeight: "bold",
                  color: "#E94C45",
                  fontSize: "3em",
                }}
              />
            </div>
            <div className="flex-none bg-black rounded-lg shadow-xl  justify-around ">
              <div className={`github ${layoutConfig.marginOnIcons}`}>
                <a href={AppConstants.SOCIAL_MEDIA_LINKS.GITHUB_URL}>
                  <FaGithub style={{ color: "#ff372d" }} size={64}></FaGithub>
                </a>
              </div>
              <div className={`Linkedin ${layoutConfig.marginOnIcons}`}>
                <a href={AppConstants.SOCIAL_MEDIA_LINKS.LINKEDIN_URL}>
                  <LiaLinkedinIn
                    style={{ color: "#ff372d" }}
                    size={64}
                  ></LiaLinkedinIn>
                </a>
              </div>
              <div className={`Twitter ${layoutConfig.marginOnIcons}`}>
                <a href={AppConstants.SOCIAL_MEDIA_LINKS.X_URL}>
                  <RiTwitterXLine
                    style={{ color: "#ff372d" }}
                    size={54}
                  ></RiTwitterXLine>
                </a>
              </div>
              <div className="instagram" id="about">
                <a href={AppConstants.SOCIAL_MEDIA_LINKS.INSTAGRAM_URL}>
                  <LiaInstagram
                    style={{ color: "#ff372d" }}
                    size={64}
                  ></LiaInstagram>
                </a>
              </div>
            </div>
            <div>
              <button className="bg-red-700 border-4 hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2 border-black shadow-[0_0_5px_white] font-['Nico Moji'] font-extralight text-white py-2 px-5 rounded-full text-5xl transition-colors duration-300 ease-in-out">
                <a href="#about">Know More</a>
              </button>
            </div>
          </div>
        </div>
        {layoutConfig.showGif && (
          <div className="min-h-[400px] col-span-7 flex align-middle">
            <img src={mainGif} width={975} className="m-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageAlt;
