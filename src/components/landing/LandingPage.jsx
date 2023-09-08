import "../../styles/landingpagealt.css";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { TiSocialTwitter } from "react-icons/ti";
import AppConstants from "../../utils/AppConstants";

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
            <div className="flex-none bg-black rounded-lg shadow-xl min-h-[200px]  justify-around ">
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
                  <TiSocialTwitter
                    style={{ color: "#ff372d" }}
                    size={64}
                  ></TiSocialTwitter>
                </a>
              </div>
              <div className="instagram">
                <a href={AppConstants.SOCIAL_MEDIA_LINKS.INSTAGRAM_URL}>
                  <LiaInstagram
                    style={{ color: "#ff372d" }}
                    size={64}
                  ></LiaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        {layoutConfig.showGif && (
          <div className="min-h-[400px] col-span-7 flex align-middle">
            <img
              src="src\assets\wp2757861.gif"
              width={975}
              className="m-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageAlt;
