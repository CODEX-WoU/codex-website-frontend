import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import AppConstants from "../utils/AppConstants";

const TheFooter = (props) => {
  return (
    <div
      className={`${props.className} bg-gradient-to-t from-red-700 to-black-500 text-center font-bold text-white pb-10`}
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
            className="link link-hover inline-flex"
          >
            <FaGithub className="text-2xl mr-4" />
            Github
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.LINKEDIN_URL}
            className="link link-hover inline-flex align-middle"
          >
            <FaLinkedin className="text-2xl mr-4" /> Linkedin
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.X_URL}
            className="link link-hover inline-flex"
          >
            <FaTwitter className="text-2xl mr-4" />
            Twitter
          </a>

          <a
            href={AppConstants.SOCIAL_MEDIA_LINKS.INSTAGRAM_URL}
            className="link link-hover inline-flex"
          >
            <FaInstagram className="text-2xl mr-4" />
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
            Email Us: Codex@woxsen.edu.in
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
      <p>© 2023 CODE&#123;X&#125; - Woxsen University</p>
    </div>
  );
};

export default TheFooter;
