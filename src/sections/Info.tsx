import { INFO_ITEMS } from "../data";

function Info() {
  return (
    <section className="responsive-wrapper py-24">
      <h3 className="font-body text-primary text-center text-[20px] font-medium">
        Your Personalized Coffee
      </h3>
      <h2 className="font-main text-primary text-center text-[30px] font-black">
        COFFEE BUILD YOUR BASE
      </h2>
      <div className="flex justify-between pt-8 gap-8">
        {INFO_ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <img src={item.icon} className="self-center" />
            <h4 className="font-bold font-body text-[24px]">{item.title}</h4>
            <p className="text-center">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
