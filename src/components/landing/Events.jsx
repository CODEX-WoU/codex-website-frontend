import "../../styles/eventsalt.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Keyboard, Navigation } from "swiper/modules";
import SIHPoster from "/src/assets/events/SIHPoster.png";
import GFGPoster from "/src/assets/events/GFGPoster.png";
import SkillDevelopmentPythonPoster from "/src/assets/events/SkillDevelopmentPython.jpeg";
import SliderElement from "../layout/SliderElement";

const EventsAlt = (props) => {
  const backgroundColor = props.backgroundColor;
  const className = props.className;
  const color = props.color;

  return (
    <div className={`${backgroundColor} ${color}`}>
      <div>
        <div
          className={`${className} events-header text-center text-7xl font-bold`}
        >
          EVENT
          <span className="events-header text-red-600 font-bold">
            &#123;S&#125;
          </span>
        </div>
        <div className="pt-12 pb-12 text-center ml-auto mr-auto flex items-center justify-items-center">
          <Swiper
            pagination={true}
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            slidesPerView={"auto"}
            navigation={{
              enabled: true,
            }}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            className="w-screen"
          >
            <SwiperSlide>
              <SliderElement
                backgroundImage={SIHPoster}
                title="SIH Internal Hackathon"
                date="18th to 25th September,2023"
              ></SliderElement>
            </SwiperSlide>
            <SwiperSlide>
              <SliderElement
                backgroundImage={GFGPoster}
                title="Freshmen Induction By GeeksForGeeks"
                date="15th September, 2023"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderElement
                title="Skill Development Program - Python"
                date="14th September, 2023 (Weekly Recurring)"
                backgroundImage={SkillDevelopmentPythonPoster}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EventsAlt;
