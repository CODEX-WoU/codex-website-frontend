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
          MEMBER
          <span
            style={{ ...fontStyle }}
            className="events-header text-red-600 font-bold"
          >
            &#123;S&#125;
          </span>
        </div>
      </div>
      <div className="flex justify-around pt-12 pb-12">
        <MemberCard
          name="Lokesh Kumar"
          role="Mentor"
          imageSrc="src\assets\members\LokeshKumar_Mentor.jpg"
        />
      </div>
    </div>
  );
};

export default Members;
