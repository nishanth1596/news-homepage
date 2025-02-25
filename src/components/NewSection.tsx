import { infoData } from "../data";
import NewItem from "./NewItem";

function NewSection() {
  return (
    <section className="bg-DarkSpaceBlue mx-4 mt-16 px-5 py-6 md:row-span-2 md:mx-0 md:mt-0 md:px-6 md:py-8">
      <h2 className="text-Yellow pb-1 text-[2rem] leading-[2rem] font-bold md:text-[2.5rem] md:leading-[2.5rem]">
        New
      </h2>
      {infoData.map((item, index) => (
        <NewItem
          key={item.title}
          index={index}
          item={item}
          itemLength={infoData.length}
        />
      ))}
    </section>
  );
}

export default NewSection;
