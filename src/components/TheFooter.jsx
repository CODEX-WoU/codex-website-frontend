import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import AppConstants from "../utils/AppConstants";

const TheFooter = (props) => {
  return (
    <div
      className={`${props.className} bg-gradient-to-t from-red-700 to-black-900 text-center font-bold text-white pb-10`}
      id="footer"
    >
      <footer className="footer p-10 text-white place-items-center">
        {/* <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> */}
        <nav>
          <header className="text-xl font-bold pl-0 underline-offset-1">
            Social
          </header>
          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.GITHUB_URL}
            target="_github"
            className="link link-hover inline-flex hover:animate-pulse"
          >
            <FaGithub className="text-2xl mr-4 hover:fill-gray-500" />
            Github
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.LINKEDIN_URL}
            target="_linkedin"
            className="link link-hover inline-flex hover:animate-pulse"
          >
            <FaLinkedin className="text-2xl mr-4 hover:fill-blue-700" />{" "}
            Linkedin
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.X_URL}
            target="_x"
            className="link link-hover inline-flex hover:animate-pulse"
          >
            <FaTwitter className="text-2xl mr-4 hover:fill-blue-400 " />
            Twitter (X)
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.INSTAGRAM_URL}
            target="_instagram"
            className="link link-hover inline-flex hover:animate-pulse"
          >
            <FaInstagram className="text-2xl mr-4 hover:fill-pink-500" />
            Instagram
          </a>
        </nav>
        {/* <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
        <div>
          <a href="mailto:codex@woxsen.edu.in" className="text-2xl">
            Email Us: codex@woxsen.edu.in
          </a>
        </div>
        {/* <form>
          <header className="text-xl font-bold pl-0 underline-offset-1">
            Newsletter
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 border-white"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-red-500 border-blue-50">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form> */}
      </footer>
      <p className="text-center text-white">
        © 2023 CODE&#123;X&#125; - Woxsen University
      </p>
    </div>
  );
};

export default TheFooter;
