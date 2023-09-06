import "../../styles/eventsalt.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Keyboard, Navigation } from "swiper/modules";

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
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            navigation={{
              enabled: true,
            }}
            keyboard={{
              enabled: true,
            }}
          >
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: "url('../../src/assets/sample1.jpg')",
                }}
                className="slider-list-element min-h-[600px] min-w-[200px]"
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: "url('../../src/assets/sample1.jpg')",
                }}
                className="slider-list-element  min-h-[600px] min-w-[200px]"
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-list-element  min-h-[600px] min-w-[200px]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-list-element  min-h-[600px] min-w-[200px]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EventsAlt;
