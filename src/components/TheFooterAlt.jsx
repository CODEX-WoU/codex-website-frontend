import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import AppConstants from "../utils/AppConstants";
import { RiTwitterXLine } from "react-icons/ri";

const TheFooterAlt = () => {
  return (
    <footer className=" bg-gradient-to-t from-red-700 to-black-900 ">
      <div class="flex flex-col items-center text-center text-white">
        <div class="container pt-9">
          <div class=" flex justify-center gap-x-16">
            <div>
              <a
                href={AppConstants.SOCIAL_MEDIA_LINKS.GITHUB_URL}
                target="_github"
                className="link link-hover inline-flex hover:animate-pulse"
              >
                <FaGithub
                  size={42}
                  className="text-2xl mr-4 hover:fill-gray-500"
                />
              </a>
            </div>
            <div>
              <a
                href={AppConstants.SOCIAL_MEDIA_LINKS.LINKEDIN_URL}
                target="_linkedin"
                className="link link-hover inline-flex hover:animate-pulse"
              >
                <FaLinkedin
                  className="text-2xl mr-4 hover:fill-blue-700"
                  size={42}
                />{" "}
              </a>
            </div>
            <div>
              <a
                href={AppConstants.SOCIAL_MEDIA_LINKS.X_URL}
                target="_x"
                className="link link-hover inline-flex hover:animate-pulse"
              >
                <RiTwitterXLine
                  className="text-2xl mr-4 hover:fill-blue-400 "
                  size={42}
                />
              </a>
            </div>
            <div>
              <a
                href={AppConstants.SOCIAL_MEDIA_LINKS.INSTAGRAM_URL}
                target="_instagram"
                className="link link-hover inline-flex hover:animate-pulse"
              >
                <FaInstagram
                  className="text-2xl mr-4 hover:fill-pink-500"
                  size={42}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-evenly mt-5 ">
            <a
              href="mailto:codex@woxsen.edu.in"
              className="text-2xl group flex"
            >
              <div>
                <FaEnvelope className="text-3xl group-hover:fill-blue-600" />
              </div>
              <div className="group-hover:text-blue-600">
                &nbsp;:codex@woxsen.edu.in
              </div>
            </a>
          </div>
        </div>

        <div class="w-full  p-4 text-center text-white ">
          © 2023 Copyright:&nbsp;
          <span>
            Code&#123;X&#125; - The Programming Club, Woxsen University
          </span>
        </div>
      </div>
    </footer>
  );
};

export default TheFooterAlt;
