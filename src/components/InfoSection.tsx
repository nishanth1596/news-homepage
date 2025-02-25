import { infoItemsData } from "../data";
import InfoItem from "./InfoItem";

function InfoSection() {
  return (
    <section className="mx-4 mt-16 space-y-8 pb-20 md:mx-5 md:mt-[72px] md:flex md:gap-[30px] lg:pb-0 xl:mx-0">
      <h2 className="sr-only">Information Section</h2>
      {infoItemsData.map((item) => (
        <InfoItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default InfoSection;
