type NewItemProps = {
  item: {
    title: string;
    faq: string;
  };
  index: number;
  itemLength: number;
};

function NewItem({ item, index, itemLength }: NewItemProps) {
  const isLastIndex = index === itemLength - 1;

  return (
    <>
      <a
        href="javascript:void(0)"
        className="text-AlmostWhite active:text-Yellow mt-[31px] block text-xl leading-6 font-extrabold"
      >
        {item.title}
      </a>
      <p
        className={`text-Silver border-Gunmetal mt-2 ${!isLastIndex ? "border-b" : ""} pb-[29px] text-[0.94rem] leading-[1.63rem] font-normal`}
      >
        {item.faq}
      </p>
    </>
  );
}

export default NewItem;
