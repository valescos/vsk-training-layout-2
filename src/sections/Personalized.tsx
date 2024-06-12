import { PERSONALIZED } from "../data";

function Personalized() {
  return (
    <section className="section-four-background py-24">
      <div className="responsive-wrapper">
        <h3 className="font-body text-primary text-center text-[20px] font-medium">
          Your Personalized Coffee
        </h3>
        <h2 className="font-main text-primary text-center text-[30px] font-black">
          COMBO PHIN PHÊ
        </h2>
        <div className="flex gap-8 pt-8 h-[562px]">
          {PERSONALIZED.map((item, index) => (
            <div
              key={index}
              className="shadow-xl bg-white flex flex-col justify-start w-full"
            >
              <img src={item.img} alt="" className="bg-[#EDF0F5]" />
              <div className=" px-6 pt-4 pb-6 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[20px] text-accent">{item.price}</span>
                  <span className="text-[14px] text-primary line-through">
                    {item.priceWhitOut}
                  </span>
                </div>
                <h4 className="text-[24px] font-body text-primary font-bold">
                  {item.title}
                </h4>
                <p className="text-[16px] font-body">{item.body}</p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-accent text-[16px] text-white px-6 py-1 rounded-full">
                    MUA NGAY
                  </button>
                  <button className="text-[16px]">CHI TIẾT</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personalized;
