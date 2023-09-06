import "../../styles/landingpagealt.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { TiSocialTwitter } from "react-icons/ti";

const LandingPageAlt = () => {
  return (
    <div className="landing-page-root min-h-screen">
      <div className="grid grid-cols-12 gap-4 min-h-[800px]">
        <div className="col-span-5 text-center">
          <div className="pb-16  flex flex-wrap items-center justify-center title-text text-9xl min-h-[800px]  text-white ">
            {" "}
            CODE
            <span className="text-red-600 font-bold">&#123;X&#125;</span>
            <div className="text-base min-w-[26rem] ">
              <TypeAnimation
                sequence={["Code, Create and Innovate.", 5000, "", 1800]}
                speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                repeat={Infinity}
                style={{
                  fontWeight: "bold",
                  color: "#E94C45",
                  fontSize: "3em",
                }}
              />
            </div>
            <div className="bg-black rounded-lg shadow-xl min-h-[200px] min-w-[26rem] ">
              <div className="github mr-16">
                <a href="https://github.com/CODEX-WoU">
                  <FaGithub style={{ color: "#ff372d" }} size={64}></FaGithub>
                </a>
              </div>
              <div className="Linkedin mr-16">
                <LiaLinkedinIn
                  style={{ color: "#ff372d" }}
                  size={64}
                ></LiaLinkedinIn>
              </div>
              <div className="Twitter mr-16 ">
                <TiSocialTwitter
                  style={{ color: "#ff372d" }}
                  size={64}
                ></TiSocialTwitter>
              </div>
              <div className="instagram">
                <a href="https://www.instagram.com/codex_wou">
                  <LiaInstagram
                    style={{ color: "#ff372d" }}
                    size={64}
                  ></LiaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[400px] col-span-7 flex align-middle">
          <img src="src\assets\wp2757861.gif" width={975} className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageAlt;
