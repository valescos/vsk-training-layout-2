type Props = {
  id: string;
  price: string;
  title: string;
  body: string;
  img: string;
  index: number;
};

function FavoriteItem(props: Props) {
  const { price, title, body, img, index } = props;

  return (
    <div key={index} className="flex shadow-sm hover:shadow-xl">
      <img src={img} alt="" className="bg-[#EDF0F5]" />
      <div className="bg-white p-6 flex flex-col gap-4 justify-center w-full">
        <div>
          <p className="text-[20px] font-body text-accent">{price}</p>
          <h4 className="text-main text-[24px] font-body font-bold">{title}</h4>
        </div>
        <p className="font-body font-thin">{body}</p>
        <div className="flex gap-4">
          <button className="bg-accent text-[16px] text-white px-4 py-1 rounded-full">
            MUA NGAY
          </button>
          <button className="text-[16px]">CHI TIẾT</button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItem;
