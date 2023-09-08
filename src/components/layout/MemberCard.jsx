import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import "../../styles/membercard.css";
import "animate.css/animate.min.css";
import AsyncImage from "./AsyncImage";

const MemberCard = (props) => {
  const nameStyle = {
    color: "red ",
    fontFamily: "Nico Moji",
  };

  const colorConsts = {
    backgroundColor: "bg-[#262626]",
    border: "border-[#555555]",
  };

  const [divParams, setDivParams] = useState({
    gridRows: "grid-rows-5",
    showLinks: "invisible",
    thirdRowMaxHeight: "max-h-[80px]",
  });

  const toggleLinks = (doShowLinks = true) => {
    if (doShowLinks)
      setDivParams({
        gridRows: "grid-rows-5",
        showLinks: "",
        thirdRowMaxHeight: "",
      });
    else
      setDivParams({
        gridRows: "grid-rows-5",
        showLinks: "invisible",
        thirdRowMaxHeight: "max-h-[80px]",
      });
  };

  return (
    <div className={`mx-10 pt-5 `}>
      <div
        className={`member-card-content-container grid rounded-t-full w-[300px] h-[430px] ${divParams.gridRows} ${colorConsts.backgroundColor}  border-b-4 border-x-4 ${colorConsts.border}`}
        onMouseEnter={toggleLinks}
        onMouseLeave={() => toggleLinks(false)}
      >
        <div className="text-center bg-[var(--dark-mode-background-light-2)] row-span-3 mb-7 flex items-center justify-center align-middle">
          <div className="rounded-full overflow-hidden h-[200px] w-[200px] ml-auto mr-auto">
            <AsyncImage className="block " src={props.imageSrc} />
          </div>
        </div>
        <div
          className={`text-container px-4 ${divParams.thirdRowMaxHeight} text-center flex flex-wrap justify-center text-3xl`}
        >
          <div style={nameStyle} className="items-start align-text-top">
            {props.name}
          </div>
          <div
            style={{ ...nameStyle, fontSize: "24px", color: "white" }}
            className={`flex text-center justify-center items-center border-b-4 ${colorConsts.border} w-[90%]`}
          >
            {props.role}
          </div>
        </div>
        <div
          className={`links-container gap-8 ${divParams.showLinks} text-center flex items-center justify-center`}
        >
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
      </div>
    </div>
  );
};

export default MemberCard;
