import "../styles/landingpage.css";
import { TypeAnimation } from "react-type-animation";
import {FaGithub} from 'react-icons/fa'
import {LiaLinkedinIn} from 'react-icons/lia'
import {TiSocialTwitter} from 'react-icons/ti'

const LandingPage = () => {
  return (
    <div>
      {/**/}
      <div className="grid grid-cols-4 gap-4 mt-5 ">
        <div className="bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] col-span-2 text-white max-w-[500px]">
          <br /><br /><br /><br /><br /><br /><br />
        <b><p className="text-3xl" font-serif>Welcome To</p></b>
        </div>
        <div className="bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] col-span-2 row-span-4 gif-container min-w-[900px]">
          <img src ="src\assets\wp2757861.gif" />
        </div>
        <div className="  bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] col-span-2 text-white max-w-[500px]">
          <b><h2 className="text-6xl font-serif"> CODE<span className="text-red-600">&#123;X&#125;</span></h2></b><br />
          <b><h3 className="text-4xl font-serif">The Programming Club</h3></b><br />
          <div>
            <TypeAnimation 
              sequence={["Code, Create and Innovate.",1000,"",1000,]}
              speed= {50}
              repeat={Infinity}
              style ={{fontSize: "2em", fontWeight: "bold", color: "#E94C45"}}
              />
          </div>
        </div>
        <div className="bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] col-span-2 max-w-[500px]">
          <p className="text-white text-2xl font-serif">Discover endless opportunities to refine your coding prowess, collaborate on real-world projects, and learn from industry experts. 
                    Join our student-led club for enriching workshops, dynamic hackathons, and specialized sessions. Unleash your potential, connect with like-minded peers, and shape a successful future in technology with us!</p>
        </div>
        <div className="bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] max-w-[500px] ">
          <div className="github">
            <FaGithub style={{color:"#ff372d"}} size={35}></FaGithub>
            </div>
            &nbsp;&nbsp;&nbsp;<div className="Linkedin">
            <LiaLinkedinIn style={{color:"#ff372d"}} size={35} ></LiaLinkedinIn>
            </div>
            &nbsp;&nbsp;&nbsp;<div className="Twitter">
            <TiSocialTwitter style={{color:"#ff372d"}} size={35} ></TiSocialTwitter>
            </div>
        </div>
        <div className="bg-black border-4 border-none rounded-lg shadow-xl min-h-[200px] max-w-[500px]"></div>
      </div>
    </div>
  );
};

export default LandingPage;

