import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import "../../styles/membercard.css";

const MemberCard = (props) => {
  const nameStyle = {
    color: "var(--dark-mode-color)",
    fontFamily: "Nico Moji",
  };

  const [divParams, setDivParams] = useState({
    gridRows: "grid-rows-3",
    showLinks: false,
    thirdRowMaxHeight: "max-h-[80px]",
  });

  const toggleLinks = (doShowLinks = true) => {
    if (doShowLinks)
      setDivParams({
        gridRows: "grid-rows-4",
        showLinks: true,
        thirdRowMaxHeight: "",
      });
    else
      setDivParams({
        gridRows: "grid-rows-3",
        showLinks: false,
        thirdRowMaxHeight: "max-h-[80px]",
      });
  };

  return (
    <div className={`mx-10 pt-5 member-card-content-container`}>
      <div
        className={` grid max-sm:w-[350px] w-[350px] h-[500px] ${divParams.gridRows}  gap-4 border-4 border-red-600 bg-black`}
        onMouseEnter={toggleLinks}
        onMouseLeave={() => toggleLinks(false)}
      >
        <div className="text-center row-span-2 flex items-center justify-center align-middle">
          <div className="rounded-full overflow-hidden  border-4 h-[225px] w-[225px] ml-auto mr-auto">
            <img className="block" src={props.imageSrc} />
          </div>
        </div>
        <div
          className={`px-4 ${divParams.thirdRowMaxHeight} text-center flex flex-wrap justify-center text-3xl`}
        >
          <div style={nameStyle} className="items-start align-text-top">
            {props.name}
          </div>
          <div
            style={{ ...nameStyle, fontSize: "24px" }}
            className="flex text-center justify-center items-center border-b-4 border-red-600 w-[75%]"
          >
            {props.role}
          </div>
        </div>
        {divParams.showLinks && (
          <div className="links-container pb-12 gap-8 text-center flex items-center justify-center">
            <a href={props.githubUrl}>
              <FaGithub
                style={{ color: "#FFFFFF" }}
                className="hover:shadow-[0_0_20px_white] rounded-full"
                size={48}
              ></FaGithub>
            </a>
            <a href={props.linkedInUrl}>
              <TiSocialLinkedin
                style={{ color: "#FFFFFF" }}
                className="hover:shadow-[0_0_20px_white]  rounded-full"
                size={64}
              ></TiSocialLinkedin>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
