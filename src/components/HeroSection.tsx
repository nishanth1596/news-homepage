import heroMobileImg from "../assets/images/image-web-3-mobile.jpg";
import heroDesktopImg from "../assets/images/image-web-3-desktop.jpg";

function HeroSection() {
  return (
    <section className="mx-4 mt-8 md:mx-0 md:mt-0 md:grid md:grid-rows-[300fr_183fr] md:gap-y-7">
      <picture className="md:row-span-2">
        <source srcSet={heroMobileImg} media="(max-width:767px)" />
        <source srcSet={heroDesktopImg} media="(min-width:768px)" />
        <img
          src={heroMobileImg}
          alt="A small building blocks representing the parts of web3"
        />
      </picture>

      <div className="md:grid md:grid-cols-2">
        <h1 className="text-DarkSpaceBlue mt-6 pr-7 text-[2.5rem] leading-[2.5rem] font-bold md:text-[3.5rem] md:leading-[3.5rem] md:font-extrabold">
          The Bright Future of Web 3.0?
        </h1>

        <div>
          <p className="text-Gunmetal mt-4 text-[0.94rem] leading-[1.63rem] font-normal">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="text-DarkSpaceBlue bg-LightVermillion active:bg-DarkSpaceBlue active:text-AlmostWhite mt-6 inline-block p-3.5 px-8 text-sm leading-6 font-bold tracking-[4.38px] uppercase md:mt-7"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
