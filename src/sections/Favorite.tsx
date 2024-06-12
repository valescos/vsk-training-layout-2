import FavoriteItem from "../components/FavoriteItem";
import { FAVORITES } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import SildeButton from "../components/SildeButton";
import "swiper/css";
import "swiper/css/grid";

function Favorite() {
  return (
    <section className="section-two-background py-24">
      <div className="masked_container">
        <h3 className="font-body text-primary text-center text-[20px] font-medium">
          Choose Your Favorite
        </h3>
        <h2 className="font-main text-primary text-center text-[30px] font-black">
          CHUẨN GU ĐÚNG VỊ
        </h2>
        <Swiper
          className="p-8"
          spaceBetween={36}
          modules={[Grid]}
          grid={{ fill: "row", rows: 2 }}
          slidesPerView={3}
          loop={true}
        >
          {FAVORITES.map((item, index) => (
            <SwiperSlide key={index}>
              <FavoriteItem index={index} {...item} />
            </SwiperSlide>
          ))}
          <SildeButton buttonType="left" />
          <SildeButton buttonType="right" />
        </Swiper>
      </div>
    </section>
  );
}

export default Favorite;
