type Props = {
  id: string;
  price: string;
  priceWhitOut: string;
  title: string;
  body: string;
  img: string;
  index: number;
};

function PersonolizedItem(props: Props) {
  const { img, price, priceWhitOut, title, body, index } = props;

  return (
    <div
      className={
        index === 0
          ? "shadow-sm hover:shadow-xl bg-white flex flex-col justify-start w-full"
          : "shadow-sm hover:shadow-xl bg-white flex flex-col justify-start w-full"
      }
    >
      <img src={img} alt="" className="bg-[#EDF0F5]" />
      <div className=" px-6 pt-4 pb-6 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-[20px] text-accent">{price}</span>
          <span className="text-[14px] text-primary line-through">
            {priceWhitOut}
          </span>
        </div>
        <h4 className="text-[24px] font-body text-primary font-bold">
          {title}
        </h4>
        <p className="text-[16px] font-body">{body}</p>
        <div className="flex gap-4 pt-4">
          <button className="bg-accent text-[16px] text-white px-6 py-1 rounded-full">
            MUA NGAY
          </button>
          <button className="text-[16px]">CHI TIẾT</button>
        </div>
      </div>
    </div>
  );
}

export default PersonolizedItem;
