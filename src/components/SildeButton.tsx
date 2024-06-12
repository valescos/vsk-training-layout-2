import { useSwiper } from "swiper/react";
import slideArrow from "../icons/slideArrow.svg";

type Props = {
  buttonType: "left" | "right";
};

function SildeButton(props: Props) {
  const swiper = useSwiper();
  const { buttonType } = props;

  return (
    <button
      onClick={
        buttonType === "left"
          ? () => swiper.slidePrev()
          : () => swiper.slideNext()
      }
      className={
        buttonType === "left"
          ? "absolute left-[19.5%] top-[50%] -translate-y-[50%] z-50"
          : "absolute right-[19.5%] top-[50%] -translate-y-[50%] z-50"
      }
    >
      <img
        src={slideArrow}
        alt=""
        className={
          buttonType === "left"
            ? "hover:scale-105 transition-all rotate-180"
            : "hover:scale-105 transition-all"
        }
      />
    </button>
  );
}

export default SildeButton;
