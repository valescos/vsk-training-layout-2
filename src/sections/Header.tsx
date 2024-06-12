import main_img from "../imgs/main_img.png";
import logo_img from "../imgs/revo_logo.png";
import Cart from "../components/Cart";
import { TITLE, COFFEE_PICKER } from "../data";
import { useState } from "react";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <header className="h-[768px] section-one-background flex flex-col justify-between pt-16 pb-24">
      <div className="responsive-wrapper flex justify-between z-10">
        <a href="/">
          <img src={logo_img} alt="" />
        </a>
        <div className="relative">
          <Cart />
        </div>
      </div>
      <div className="z-10">
        <h1 className="responsive-wrapper [&>*]:text-[54px] [&>*]:font-main [&>*]:font-extrabold [&>*]:uppercase leading-[54px]">
          {TITLE.split(" ").map((word, index) => (
            <span
              key={index}
              className={
                index % 2 === 0
                  ? "text-primary"
                  : "text-white bg-accent px-4 -mx-4"
              }
            >
              {word}
              <br />
            </span>
          ))}
        </h1>
      </div>
      <ul className="absolute top-52 right-[20%] translate-x-[90%] [&>li]:font-body [&>li]:text-[16px] [&>li]:text-lightgray [&>li]:cursor-pointer flex flex-col gap-8">
        {COFFEE_PICKER.map((item, index) => (
          <li
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={
              index === currentIndex
                ? "font-bold transition-all hover:underline decoration-accent decoration-2"
                : "font-light transition-all hover:underline decoration-accent decoration-2"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="absolute z-0 top-0 left-[35%] overflow-hidden">
        <img
          src={main_img}
          alt=""
          className="hover:scale-[102%] transition-all shadow-xl"
        />
      </div>
    </header>
  );
}

export default Header;
