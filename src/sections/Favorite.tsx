import { FAVORITES } from "../data";

function Favorite() {
  return (
    <section className="section-two-background py-24">
      <div className="responsive-wrapper">
        <h3 className="font-body text-primary text-center text-[20px] font-medium">
          Choose Your Favorite
        </h3>
        <h2 className="font-main text-primary text-center text-[30px] font-black">
          CHUẨN GU ĐÚNG VỊ
        </h2>
        <div className="pt-8 grid grid-cols-2 gap-8 ">
          {FAVORITES.map((item, index) => (
            <div key={index} className="flex shadow-xl">
              <img src={item.img} alt="" className="bg-[#EDF0F5]" />
              <div className="bg-white p-6 flex flex-col gap-4 justify-center w-full">
                <div>
                  <p className="text-[20px] font-body text-accent">
                    {item.price}
                  </p>
                  <h4 className="text-main text-[24px] font-body font-bold">
                    {item.title}
                  </h4>
                </div>
                <p className="font-body font-thin">{item.body}</p>
                <div className="flex gap-4">
                  <button className="bg-accent text-[16px] text-white px-4 py-1 rounded-full">
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

export default Favorite;
