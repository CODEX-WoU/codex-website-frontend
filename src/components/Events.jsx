import "../styles/events.css";
import { Navigation, Pagination, Autoplay, Keyboard} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Events = () => {
    return (
        <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="border-4 border-none rounded-lg shadow-xl min-h-[200px]  text-white"></div>
            <div className=" border-4 border-yellow-500  rounded-lg shadow-xl min-h-[200px]  text-white"></div>
            <div className=" border-4 border-none rounded-lg shadow-xl min-h-[200px]  text-white"></div>
            <div className=" border-4 border-none rounded-lg shadow-xl min-h-[600px] col-span-3 text-white">
                <Swiper 
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Autoplay,Navigation,Pagination,Keyboard]}
                    keyboard = {{
                        enabled:true,
                    }}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    cssMode={true}
                    className="MySwiper">
                        <SwiperSlide className="Slides"><img src= "src\assets\wp2757861.gif" /></SwiperSlide>
                        <SwiperSlide className="Slides"><img src= "src\assets\wp2757861.gif" /></SwiperSlide>
                        <SwiperSlide className="Slides"><img src= "src\assets\wp2757861.gif" /></SwiperSlide>
                        <SwiperSlide className="Slides"><img src= "src\assets\wp2757861.gif" /></SwiperSlide>
                    </Swiper>
            </div>
            </div>
    );


        
    };

export default Events;