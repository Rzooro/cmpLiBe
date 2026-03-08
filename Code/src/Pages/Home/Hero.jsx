import heroImg from "../../assets/home/hero.jpg";

function Home() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* HERO BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(6,59,110,0.65)]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
        <h1 className="text-6xl font-bold leading-tight">
          BUILDING A MORE INCLUSIVE BHARAT,
          <br /> REGION BY REGION
        </h1>

        <button className="mt-10 bg-orange-500 px-10 py-4 rounded-xl text-xl font-semibold">
          Explore more
        </button>
      </div>
    </section>
  );
}

export default Home;
