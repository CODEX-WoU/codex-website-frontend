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
          <a href="https://github.com/CODEX-WoU" className="link link-hover">
            Github
          </a>
          <a
            href="https://linkedin.com/company/codex-wou"
            className="link link-hover"
          >
            Linkedin
          </a>
          <a href="https://twitter.com/codex_wou" className="link link-hover">
            Twitter
          </a>
          <a
            href="https://www.instagram.com/codex_wou"
            className="link link-hover"
          >
            Instagram
          </a>
        </nav>
        {/* <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
        <form>
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
        </form>
      </footer>
      <p>© 2023 CODE&#123;X&#125; - Woxsen University</p>
    </div>
  );
};

export default TheFooter;
