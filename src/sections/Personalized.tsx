import { PERSONALIZED } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PersonolizedItem from "../components/PersonolizedItem";
import SildeButton from "../components/SildeButton";

function Personalized() {
  return (
    <section className="section-four-background py-24 relative">
      <h3 className="font-body text-primary text-center text-[20px] font-medium">
        Your Personalized Coffee
      </h3>
      <h2 className="font-main text-primary text-center text-[30px] font-black">
        COMBO PHIN PHÊ
      </h2>

      <div className="masked_container">
        <Swiper slidesPerView={5} spaceBetween={32} className="p-8" loop={true}>
          <SildeButton buttonType="left" />
          <SildeButton buttonType="right" />
          {PERSONALIZED.map((item, index) => (
            <SwiperSlide key={index}>
              <PersonolizedItem {...item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Personalized;
