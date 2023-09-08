import MemberCard from "../layout/MemberCard";

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
          imageSrc="src\assets\members\LokeshKumar_Mentor.jpg"
          githubUrl="#"
          linkedInUrl="https://www.linkedin.com/in/lokeshskshukla/"
        />
        <MemberCard
          name="Amogh Deshmukh"
          role="Mentor"
          imageSrc="src\assets\members\AmoghDeshmukh_Mentor.jpeg"
          githubUrl="#"
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
          imageSrc="src\assets\members\HarshGoyal_Core.jpeg"
          githubUrl="https://github.com/Harsh00988"
          linkedInUrl="https://www.linkedin.com/in/harsh-goyal-b39405228/"
        />
        <MemberCard
          name="Harsh Morayya"
          role="Vice-President"
          imageSrc="src\assets\members\HarshMorayya_Core.jpeg"
          githubUrl="https://github.com/yodenharsh"
          linkedInUrl="https://www.linkedin.com/in/harsh-morayya/"
        />
        <MemberCard
          name="Sajay Raj"
          role="Organizer"
          imageSrc="src\assets\members\SajayRaj_Core.jpeg"
          githubUrl="https://github.com/SajayR"
          linkedInUrl="https://www.linkedin.com/in/sajayrrr/"
        />
        <MemberCard
          name="Shravani Wanjari"
          role="Organizer"
          imageSrc="src\assets\members\ShravaniWanjari_Core.jpeg"
          githubUrl="https://github.com/ShravaniAWanjari"
          linkedInUrl="https://www.linkedin.com/in/shravani-wanjari-2197ba22a/"
        />
        <MemberCard
          name="Shinde Aditya"
          role="Treasurer"
          imageSrc="src\assets\members\ShindeAditya_Core.jpeg"
          githubUrl="https://github.com/HeyShinde"
          linkedInUrl="https://www.linkedin.com/in/heyshinde/"
        />
        <MemberCard
          name="Dhruval Padia"
          role="PR, Marketing"
          imageSrc="src\assets\members\DhruvalPadia_Core.jpeg"
          githubUrl="https://github.com/dhruval30"
          linkedInUrl="https://www.linkedin.com/in/dhruvalpadia/"
        />
        <MemberCard
          name="Anuj Mankurmare"
          role="Media Handler"
          imageSrc="src\assets\members\AnujMankumare_Core.jpg"
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
          imageSrc="src\assets\members\SreeshanthSangem_Executive.jpg"
          githubUrl="https://github.com/sreeshanth9"
          linkedInUrl="https://www.linkedin.com/in/sreeshanth-s-b0a742225/"
        />
        <MemberCard
          name="Nikunj Gupta"
          // role="Executive"
          imageSrc="src\assets\members\NikunjGupta_Executive.jpg"
          githubUrl="www.linkedin.com/in/nikunj-gupta-b66b94258"
          linkedInUrl="https://www.linkedin.com/in/nikunj-gupta-b66b94258/"
        />
        <MemberCard
          name="Ryyan Mathew Hasan"
          // role="Executive"
          imageSrc="src\assets\members\RyyanMathewHasan_Executive.jpg"
          githubUrl="https://github.com/ryyan2407"
          linkedInUrl="https://www.linkedin.com/in/ryyan-mathew-hasan-657248229/"
        />
        <MemberCard
          name="Korimi Meghana"
          // role="Executive"
          imageSrc="src\assets\members\MeghanaKorimi_Executive.jpg"
          githubUrl="https://github.com/MEGHNAKORIM"
          linkedInUrl="https://www.linkedin.com/in/meghana-korimi-0a1b5a258/"
        />
        <MemberCard
          name="Kshitij Moghe"
          // role="Executive"
          imageSrc="src\assets\members\KshitijMoghe_Executive.jpg"
          githubUrl="https://github.com/Kshitij-0710"
          linkedInUrl="https://www.linkedin.com/in/kshitij-moghe/"
        />
        <MemberCard
          name="Nand Vardhan Tagore"
          // role="Executive"
          imageSrc="src\assets\members\MeghanaKorimi_Executive.jpg"
          githubUrl="https://github.com/sreeshanth9"
          linkedInUrl="https://www.linkedin.com/in/sreeshanth-s-b0a742225/"
        />
        <MemberCard
          name="Deepak Kumar"
          // role="Executive"
          imageSrc="src\assets\members\DeepakKumar_Executive.jpg"
          githubUrl="https://github.com/DkStine"
          linkedInUrl="https://www.linkedin.com/in/deepakumar24/"
        />
        <MemberCard
          name="Rudra Ayachit"
          // role="Executive"
          imageSrc="src\assets\members\RudraAyachit_Executive.jpg"
          githubUrl="https://github.com/RudraAyachit"
          linkedInUrl="http://www.linkedin.com/in/RudraAyachit/"
        />
        <MemberCard
          name="Mohammed Aqib"
          // role="Executive"
          imageSrc="src\assets\members\RudraAyachit_Executive.jpg"
          githubUrl="https://github.com/RudraAyachit"
          linkedInUrl="http://www.linkedin.com/in/RudraAyachit/"
        />
        <MemberCard
          name="Anohita Sen"
          // role="Executive"
          imageSrc="src\assets\members\AnohitaSen_Executive.jpg"
          githubUrl="https://github.com/AnuS401"
          linkedInUrl="https://www.linkedin.com/in/anohita-sen-00b9aa287/"
        />
        <MemberCard
          name="Sreeya Chatterjee"
          // role="Executive"
          imageSrc="src\assets\members\SreeyaChatterjee_Executive.jpg"
          githubUrl="https://github.com/05sreeyachat"
          linkedInUrl="http://linkedin.com/in/sreeya-chatterjee-628bb2286"
        />
      </div>
    </div>
  );
};

export default Members;
