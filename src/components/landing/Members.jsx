import MemberCard from "../layout/MemberCard";
import AmoghDeshmukh_Mentor from "../../assets/members/AmoghDeshmukh_Mentor.jpeg";
import AnohitaSen_Executive from "../../assets/members/AnohitaSen_Executive.jpg";
import AnujMankumare_Executive from "../../assets/members/AnujMankumare_Core.jpg";
import DeepakKumar_Executive from "../../assets/members/DeepakKumar_Executive.jpg";
import DhruvalPadia_Core from "/src/assets/members/DhruvalPadia_Core.jpeg";
import HarshGoyal_Core from "/src/assets/members/HarshGoyal_Core.jpeg";
import HarshMorayya_Core from "/src/assets/members/HarshMorayya_Core.jpeg";
import KshitijMoghe_Executive from "/src/assets/members/KshitijMoghe_Executive.jpg";
import LokeshKumar_Mentor from "/src/assets/members/LokeshKumar_Mentor.jpg";
import MeghanaKorimi_Executive from "/src/assets/members/MeghanaKorimi_Executive.jpg";
import MohammedAqib_Executive from "/src/assets/members/MohammedAqib_Executive.jpg";
import NandVardhanTagore_Executive from "/src/assets/members/NandVardhanTagore_Executive.jpg";
import NikunjGupta_Executive from "/src/assets/members/NikunjGupta_Executive.jpg";
import RudraAyachit_Executive from "/src/assets/members/RudraAyachit_Executive.jpg";
import RyyanMathewHasan_Executive from "/src/assets/members/RyyanMathewHasan_Executive.jpg";
import SajayRaj_Core from "/src/assets/members/SajayRaj_Core.jpeg";
import ShindeAditya_Core from "/src/assets/members/ShindeAditya_Core.jpeg";
import ShravaniWanjari_Core from "/src/assets/members/ShravaniWanjari_Core.jpeg";
import SreeshanthSangem_Executive from "/src/assets/members/SreeshanthSangem_Executive.jpg";
import SreeyaChatterjee_Executive from "/src/assets/members/SreeyaChatterjee_Executive.jpg";

const Members = (props) => {
  const fontStyle = {
    fontFamily: "Nico Moji",
  };

  return (
    <div className={`${props.className}`}>
      <div>
        <div
          className={`events-header text-center text-7xl font-bold`}
          style={{ ...fontStyle, color: "var(--dark-mode-color)" }}
        >
          Tea
          <span
            style={{ ...fontStyle }}
            className="events-header text-red-600 font-bold"
          >
            &#123;M&#125;
          </span>
        </div>
      </div>
      <div
        className="flex justify-center ml-auto mr-auto mt-24 items-center text-5xl w-[80%] border-b-4 border-red-900"
        style={{ ...fontStyle, color: "var(--dark-mode-color)" }}
      >
        Mentor
        <span
          style={{ ...fontStyle }}
          className="events-header text-red-600 font-bold"
        >
          &#123;S&#125;
        </span>
      </div>
      <div className="flex flex-wrap justify-around pt-12 pb-12">
        <MemberCard
          name="Lokesh Kumar"
          role="Mentor"
          imageSrc={LokeshKumar_Mentor}
          githubUrl="https://github.com/lokeshsk"
          linkedInUrl="https://www.linkedin.com/in/lokeshskshukla/"
        />
        <MemberCard
          name="Amogh Deshmukh"
          role="Mentor"
          imageSrc={AmoghDeshmukh_Mentor}
          githubUrl="https://github.com/amoghpesit"
          linkedInUrl="https://www.linkedin.com/in/amogh-deshmukh-35009b17/"
        />
      </div>
      <div
        className="flex justify-center ml-auto mr-auto mt-12 items-center text-5xl w-[80%] border-b-4 border-red-900"
        style={{ ...fontStyle, color: "var(--dark-mode-color)" }}
      >
        Core Member
        <span
          style={{ ...fontStyle }}
          className="events-header text-red-600 font-bold"
        >
          &#123;S&#125;
        </span>
      </div>
      <div className="flex flex-grow basis-24 flex-wrap justify-around pt-12 pb-12">
        <MemberCard
          name="Harsh Goyal"
          role="President"
          imageSrc={HarshGoyal_Core}
          githubUrl="https://github.com/Harsh00988"
          linkedInUrl="https://www.linkedin.com/in/harsh-goyal-b39405228/"
        />
        <MemberCard
          name="Harsh Morayya"
          role="Vice-President"
          imageSrc={HarshMorayya_Core}
          githubUrl="https://github.com/yodenharsh"
          linkedInUrl="https://www.linkedin.com/in/harsh-morayya/"
        />
        <MemberCard
          name="Sajay Raj"
          role="Organizer"
          imageSrc={SajayRaj_Core}
          githubUrl="https://github.com/SajayR"
          linkedInUrl="https://www.linkedin.com/in/sajayrrr/"
        />
        <MemberCard
          name="Shravani Wanjari"
          role="Organizer"
          imageSrc={ShravaniWanjari_Core}
          githubUrl="https://github.com/ShravaniAWanjari"
          linkedInUrl="https://www.linkedin.com/in/shravani-wanjari-2197ba22a/"
        />
        <MemberCard
          name="Shinde Aditya"
          role="Treasurer"
          imageSrc={ShindeAditya_Core}
          githubUrl="https://github.com/HeyShinde"
          linkedInUrl="https://www.linkedin.com/in/heyshinde/"
        />
        <MemberCard
          name="Dhruval Padia"
          role="PR, Marketing"
          imageSrc={DhruvalPadia_Core}
          githubUrl="https://github.com/dhruval30"
          linkedInUrl="https://www.linkedin.com/in/dhruvalpadia/"
        />
        <MemberCard
          name="Anuj Mankumare"
          role="Media Handler"
          imageSrc={AnujMankumare_Executive}
          githubUrl="https://github.com/PRIME-07"
          linkedInUrl="#"
        />
      </div>
      <div
        className="flex justify-center ml-auto mr-auto mt-12 items-center text-5xl w-[80%] border-b-4 border-red-900"
        style={{ ...fontStyle, color: "var(--dark-mode-color)" }}
      >
        Executive
        <span
          style={{ ...fontStyle }}
          className="events-header text-red-600 font-bold"
        >
          &#123;S&#125;
        </span>
      </div>
      <div className="flex flex-grow basis-24 flex-wrap justify-around pt-12 pb-12 border-white border-b-2">
        <MemberCard
          name="Sreeshanth Sangem"
          // role="Executive"
          imageSrc={SreeshanthSangem_Executive}
          githubUrl="https://github.com/sreeshanth9"
          linkedInUrl="https://www.linkedin.com/in/sreeshanth-s-b0a742225/"
        />
        <MemberCard
          name="Nikunj Gupta"
          // role="Executive"
          imageSrc={NikunjGupta_Executive}
          githubUrl="https://github.com/nikgup6"
          linkedInUrl="https://www.linkedin.com/in/nikunj-gupta-b66b94258/"
        />
        <MemberCard
          name="Ryyan Mathew Hasan"
          // role="Executive"
          imageSrc={RyyanMathewHasan_Executive}
          githubUrl="https://github.com/ryyan2407"
          linkedInUrl="https://www.linkedin.com/in/ryyan-mathew-hasan-657248229/"
        />
        <MemberCard
          name="Korimi Meghana"
          // role="Executive"
          imageSrc={MeghanaKorimi_Executive}
          githubUrl="https://github.com/MEGHNAKORIM"
          linkedInUrl="https://www.linkedin.com/in/meghana-korimi-0a1b5a258/"
        />
        <MemberCard
          name="Kshitij Moghe"
          // role="Executive"
          imageSrc={KshitijMoghe_Executive}
          githubUrl="https://github.com/Kshitij-0710"
          linkedInUrl="https://www.linkedin.com/in/kshitij-moghe/"
        />
        <MemberCard
          name="Nand Vardhan Tagore"
          // role="Executive"
          imageSrc={NandVardhanTagore_Executive}
          githubUrl="https://github.com/TagoreNand"
          linkedInUrl="https://www.linkedin.com/in/tagore-seeram-96681228b/"
        />
        <MemberCard
          name="Deepak Kumar"
          // role="Executive"
          imageSrc={DeepakKumar_Executive}
          githubUrl="https://github.com/DkStine"
          linkedInUrl="https://www.linkedin.com/in/deepakumar24/"
        />
        <MemberCard
          name="Rudra Ayachit"
          // role="Executive"
          imageSrc={RudraAyachit_Executive}
          githubUrl="https://github.com/RudraAyachit"
          linkedInUrl="https://www.linkedin.com/in/RudraAyachit/"
        />
        <MemberCard
          name="Mohammed Aqib"
          // role="Executive"
          imageSrc={MohammedAqib_Executive}
          githubUrl="https://github.com/mdAqibb"
          linkedInUrl="https://www.linkedin.com/in/mohammed-aqib-a186b2253/"
        />
        <MemberCard
          name="Anohita Sen"
          // role="Executive"
          imageSrc={AnohitaSen_Executive}
          githubUrl="https://github.com/AnuS401"
          linkedInUrl="https://www.linkedin.com/in/anohita-sen-00b9aa287/"
        />
        <MemberCard
          name="Sreeya Chatterjee"
          // role="Executive"
          imageSrc={SreeyaChatterjee_Executive}
          githubUrl="https://github.com/05sreeyachat"
          linkedInUrl="https://linkedin.com/in/sreeya-chatterjee-628bb2286"
        />
      </div>
    </div>
  );
};

export default Members;
