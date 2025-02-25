type InfoItemProps = {
  item: {
    img: string;
    id: string;
    title: string;
    faq: string;
  };
};

function InfoItem({ item }: InfoItemProps) {
  return (
    <article className="grid grid-cols-[100fr_219fr] gap-x-6">
      <img src={item.img} alt={item.title} className="" />
      <div>
        <h3 className="text-LightVermillion text-[2rem] leading-8 font-bold">
          {item.id}
        </h3>
        <a
          href="javascript:void(0)"
          className="text-DarkSpaceBlue active:text-LightVermillion mt-3 block text-lg leading-6 font-extrabold"
        >
          {item.title}
        </a>
        <p className="text-Gunmetal mt-2 text-[0.94rem] leading-[26px] font-normal">
          {item.faq}
        </p>
      </div>
    </article>
  );
}

export default InfoItem;
