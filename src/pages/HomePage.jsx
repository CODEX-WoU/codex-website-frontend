import Events from "../components/landing/Events";
import LandingPage from "../components/landing/LandingPage";
import Members from "../components/landing/Members";
import About from "../components/landing/About";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HomePage = () => {
  return (
    <div>
      <section>
        <LandingPage />
      </section>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        <section>
          {<About className="bg-[var(--dark-mode-background-light-1)]" />}
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        <section>
          <Events
            className="pt-12"
            backgroundColor="bg-[var(--dark-mode-background-light-1)]"
            color="text-[var(--dark-mode-color)]"
          />{" "}
        </section>{" "}
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        {" "}
        <section>
          {
            <Members className="bg-[var(--dark-mode-background-light-2)] pt-12" />
          }
        </section>
      </AnimationOnScroll>
    </div>
  );
};

export default HomePage;
