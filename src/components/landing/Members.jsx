import MemberCard from "../layout/MemberCard";

const Members = (props) => {
  const fontStyle = {
    fontFamily: "Nico Moji",
  };

  return (
    <div className={`${props.className} `}>
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
        className="flex justify-center ml-auto mr-auto mt-36 items-center text-5xl w-[80%] border-b-4 border-red-900"
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
          linkedInUrl="#"
        />
        <MemberCard
          name="Amogh Deshmukh"
          role="Mentor"
          imageSrc="src\assets\members\AmoghDeshmukh_Mentor.jpeg"
          githubUrl="#"
          linkedInUrl="#"
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
          role="PR & Marketing"
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
    </div>
  );
};

export default Members;
