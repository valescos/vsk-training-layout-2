import gift from "../imgs/gift.png";
import beans from "../icons/beans.svg";
import mountins from "../icons/mountins.svg";
import { useState } from "react";

function Giftset() {
  const [currentTab, serCurrenTab] = useState(1);

  return (
    <section className="section-three-background py-24">
      <div className="responsive-wrapper">
        <h3 className="font-body text-primary text-center text-[20px] font-medium">
          Best Gift For Best Friend
        </h3>
        <h2 className="font-main text-primary text-center text-[30px] font-black">
          GIFTSET
        </h2>
        <div className="mt-8 flex gap-2 bg-white half-transpanent-background">
          <img src={gift} alt="" className="-ml-12 mt-8" />
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[20px] text-accent font-body">285.000</p>
            <h4 className="text-[24px] text-primary font-body font-bold">
              Giftset "Cà phê phin Việt Nam"
            </h4>
            <p>
              Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
              cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ
              những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người
              làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho
              bạn.
            </p>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-2 items-end">
                <img src={beans} alt="" />
                <div>
                  <p className="text-[14px] -mb-1">Loại hạt</p>
                  <strong className="text-primary">Fine Robusta Blend</strong>
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <img src={mountins} alt="" />
                <div>
                  <p className="text-[14px] -mb-1">Độ cao</p>
                  <strong className="text-primary">700 - 800m</strong>
                </div>
              </div>
            </div>
            <div className="flex gap-16">
              <button className="bg-accent text-[16px] text-white px-8 py-2 rounded-full">
                MUA NGAY
              </button>
              <button className="text-[16px]">CHI TIẾT</button>
            </div>
          </div>
          <div className="flex flex-col justify-between pl-8 items-center ">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                onClick={() => serCurrenTab(item)}
                className={
                  item === currentTab
                    ? "tab_selected w-full h-full transition-all flex items-center font-black text-[30px] font-main px-8 text-primary cursor-pointer"
                    : "w-full h-full transition-all flex items-center font-black text-[30px] font-main px-8 text-[#edf0f5] cursor-pointer bg-[#f9fbff]"
                }
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Giftset;
