import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import NewSection from "./components/NewSection";

function App() {
  return (
    <div className="mx-auto flex h-dvh max-w-[69.375rem] flex-col items-center">
      <Header />

      <main>
        <div className="md:mx-5 md:mt-[61px] md:grid md:grid-cols-[730fr_350fr] md:gap-x-[30px] xl:mx-0">
          <HeroSection />
          <NewSection />
        </div>
        <InfoSection />
      </main>
    </div>
  );
}

export default App;
