import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// Assets (Ensure these paths match your project structure)
import heroImg from "../../assets/home/hero.jpg";
import img1 from "../../assets/home/img1.jpeg";
import img2 from "../../assets/home/img2.png";
import img3 from "../../assets/home/img3.png";
import img4 from "../../assets/home/img4.png";
import pimg from "../../assets/home/phone_app.png";
import dia from "../../assets/home/dialogue.png";

// ================= INTERNAL COMPONENTS ================= //

// QCard Component for Testimonials
const QCard = ({ text, author, isActive }) => (
  <div
    className={`relative flex items-center justify-center h-full px-4 md:px-8 lg:px-12 pt-12 lg:pt-16 pb-8 lg:pb-12 transition-all duration-500 ${
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
    }`}>
    <div className="relative w-full min-h-[250px] lg:min-h-[280px] xl:min-h-[320px] bg-white/90 backdrop-blur-xl border border-sky-100/50 shadow-[0_15px_40px_rgba(0,40,69,0.06)] rounded-3xl lg:rounded-[2.5rem] px-6 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-10 text-center flex flex-col justify-center">
      {/* Decorative Quotes */}
      <div className="absolute -top-6 lg:-top-8 left-6 lg:left-12 flex z-20 pointer-events-none opacity-10">
        <BiSolidQuoteSingleLeft className="text-[4rem] lg:text-[6rem] text-[#004270]" />
        <BiSolidQuoteSingleLeft className="text-[4rem] lg:text-[6rem] text-[#004270] -ml-6 lg:-ml-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5 lg:gap-8">
        <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-snug font-medium text-gray-700 italic">
          "{text}"
        </h2>
        <div className="w-10 lg:w-16 h-1 bg-[#f47920] mx-auto rounded-full opacity-80"></div>
        <p className="text-[#004270] text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-widest">
          {author}
        </p>
      </div>
    </div>
  </div>
);

// ================= MAIN HOME COMPONENT ================= //

const Home = () => {
  const swiperRef = useRef(null);

  const quotes = [
    {
      text: "Even as a class topper, I struggled to find the opportunities I dreamed of. cMPLiBe helped me discover how to create them, not just wait for them. Proud to be a lifelong cMPliBe LEarner.",
      author: "A cMPLiBe Student",
    },
    {
      text: "cMPLiBe has redefined how we prepare and present our students. Today, they’re not just job seekers, they’re opportunity-ready professionals who make us proud on every platform.",
      author: "Partner Institute Director",
    },
    {
      text: "cMPLiBe made hiring seamless - a curated pool of relevant talent, ready to learn-on-the-job, perform and grow. Every student we hired came with optimism, agility and a hunger to learn- exactly what the future workplace needs.",
      author: "Corporate HR Head",
    },
  ];

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.isEnd
      ? swiperRef.current.slideTo(0)
      : swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.isBeginning
      ? swiperRef.current.slideTo(quotes.length - 1)
      : swiperRef.current.slidePrev();
  };

  return (
    <div className="w-full font-sans bg-[#f8fafc]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[50svh] lg:h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#002845]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Premium Deep Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002845]/80 via-[#004270]/60 to-[#002845]/90 mix-blend-multiply" />

        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 pt-20 lg:pt-28 xl:pt-32 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold leading-tight xl:leading-tight tracking-tight drop-shadow-xl uppercase">
            Building a More <br className="hidden md:block" />
            <span className="text-sky-300">Inclusive Bharat,</span> <br />
            Region by Region
          </h1>

          <div className="w-16 lg:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 xl:mt-10 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>

          <Link
            to="/about"
            className="mt-8 lg:mt-10 xl:mt-12 bg-[#f47920] hover:bg-[#d96617] text-white px-8 lg:px-6 xl:px-12 py-3 lg:py-2 xl:py-4 rounded-full text-base xl:text-xl font-semibold transition-all duration-300 shadow-[0_10px_25px_rgba(244,121,32,0.3)] hover:shadow-[0_15px_35px_rgba(244,121,32,0.4)] hover:-translate-y-1">
            Explore more
          </Link>
        </div>
      </section>

      {/* ================= INTRO & MISSION SECTION ================= */}
      <section className="w-full py-12 lg:py-16 xl:py-28 px-6 lg:px-12 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
          {/* Forced aspect ratio to prevent the image from becoming overwhelmingly tall */}
          <div className="w-full aspect-[4/3] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-4 lg:border-[6px] border-gray-50 bg-gray-100">
            <img
              src={img1}
              alt="Students collaborating"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8 justify-center text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270] leading-tight">
              Sparking a New Wave of{" "}
              <span className="text-[#f47920]">Ambition</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed font-medium">
              Across the higher education landscape in India's tier ll & lll
              cities/towns, cMPLiBe is transforming graduate students into a
              pre-validated talent pipeline for companies and elevating
              institutions into recognizable leaders who shape regional growth.
            </p>
            <div className="flex justify-center lg:justify-start mt-2 xl:mt-4">
              <Link
                to="about"
                className="w-fit bg-[#004270] hover:bg-[#002845] text-white px-6 lg:px-8 xl:px-10 py-2.5 lg:py-3 xl:py-3.5 rounded-full text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LQ METRIC STATEMENT BANNER ================= */}
      <section className="w-full py-10 lg:py-16 xl:py-24 px-6 bg-gradient-to-r from-[#002845] via-[#004270] to-[#002845] text-center flex justify-center shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#00a3e0] rounded-full opacity-10 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl">
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-light text-white leading-snug">
            cMPLiBe's unique solution is based on its proprietary{" "}
            <br className="hidden lg:block" />
            <span className="font-bold text-[#f47920] tracking-wide mt-1 lg:mt-2 block">
              learnAgilitiQuotient®
            </span>{" "}
            metric.
          </h2>
        </div>
      </section>

      {/* ================= OPTIONS / SERVICES SECTION ================= */}
      <section className="w-full py-12 lg:py-16 xl:py-32 px-6 lg:px-12 xl:px-20 bg-gray-50 flex flex-col gap-12 lg:gap-16 xl:gap-32">
        {/* Option 1: Institutions (Image Left) */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
          <div className="w-full aspect-[5/4] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border-4 border-white bg-gray-100">
            <img
              src={img2}
              alt="For Institutions"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6 text-center lg:text-left">
            <h3 className="text-xs lg:text-sm xl:text-base font-bold tracking-widest text-[#f47920] uppercase">
              Differntiated Positioning
            </h3>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270]">
              For Institutions
            </h2>
            <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
              We come in as your strategic partner to reveal the growth-mindset
              (GM) & innovation-mindset (IM) of your graduate students. We help
              you build Institutional Leadership differentiated on ‘unique
              value’ to your customers.
            </p>
            <div className="mt-3 xl:mt-5 flex justify-center lg:justify-start">
              <Link
                to="/institutions"
                className="w-fit bg-transparent border-2 border-[#004270]/80 text-[#004270] hover:bg-[#004270] hover:text-white px-5 xl:px-8 py-2 xl:py-2.5 rounded-full text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300">
                Know More
              </Link>
            </div>
          </div>
        </div>

        {/* Option 2: Graduates (Image Right) */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6 text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-xs lg:text-sm xl:text-base font-bold tracking-widest text-[#00a3e0] uppercase">
              Exclusive Visibility
            </h3>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270]">
              For Graduates
            </h2>
            <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
              We quantify hard-to-measure, critical attributes hidden in you &
              reward you with unique micro-Credentials, preparing you & giving
              you ‘exclusive visibility’ in the world of opportunities.
            </p>
            <div className="mt-3 xl:mt-5 flex justify-center lg:justify-start">
              <Link
                to="/graduates"
                className="w-fit bg-transparent border-2 border-[#004270]/80 text-[#004270] hover:bg-[#004270] hover:text-white px-5 xl:px-8 py-2 xl:py-2.5 rounded-full text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300">
                Know More
              </Link>
            </div>
          </div>
          <div className="w-full aspect-[5/4] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border-4 border-white bg-gray-100 order-1 lg:order-2">
            <img
              src={img3}
              alt="For Graduates"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Option 3: Corporates (Image Left) */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
          <div className="w-full aspect-[5/4] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border-4 border-white bg-gray-100">
            <img
              src={img4}
              alt="For Corporates"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6 text-center lg:text-left">
            <h3 className="text-xs lg:text-sm xl:text-base font-bold tracking-widest text-[#f47920] uppercase">
              Reliable Pipeline
            </h3>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270]">
              For Corporates
            </h2>
            <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
              We help you by providing seamless access to proven growth-mindsets
              across campuses in Bharat’s heartland for all your talent
              requirements - local, regional, national, or global.
            </p>
            <div className="mt-3 xl:mt-5 flex justify-center lg:justify-start">
              <Link
                to="/corporates"
                className="w-fit bg-transparent border-2 border-[#004270]/80 text-[#004270] hover:bg-[#004270] hover:text-white px-5 xl:px-8 py-2 xl:py-2.5 rounded-full text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS CAROUSEL ================= */}
      <section className="relative py-12 lg:py-16 xl:py-28 bg-[#001f36] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#004270] rounded-full opacity-30 blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10 px-4">
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              Impact <span className="text-[#f47920]">Stories</span>
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            centeredSlides
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.2, spaceBetween: 20 },
              1024: { slidesPerView: 1.4, spaceBetween: 40 },
            }}
            speed={800}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass:
                "w-2.5 h-2.5 bg-white/30 rounded-full transition-all duration-300 cursor-pointer mx-1.5",
              bulletActiveClass: "!bg-[#f47920] scale-150",
            }}
            className="py-2 lg:py-8">
            {quotes.map((q, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <QCard text={q.text} author={q.author} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls - Hidden on mobile */}
          <div className="hidden sm:flex absolute top-[55%] -translate-y-1/2 left-0 right-0 z-20 justify-between px-2 lg:px-6 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto bg-white/10 hover:bg-white text-white hover:text-[#004270] backdrop-blur-md transition-all duration-300 rounded-full p-2.5 lg:p-3 shadow-lg hover:scale-110"
              aria-label="Previous Slide">
              <BsChevronCompactLeft className="size-6 lg:size-8" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto bg-white/10 hover:bg-white text-white hover:text-[#004270] backdrop-blur-md transition-all duration-300 rounded-full p-2.5 lg:p-3 shadow-lg hover:scale-110"
              aria-label="Next Slide">
              <BsChevronCompactRight className="size-6 lg:size-8" />
            </button>
          </div>

          <div className="custom-pagination flex justify-center mt-4 lg:mt-8" />
        </div>
      </section>

      {/* ================= APP PROMOTION SECTION ================= */}
      <section className="bg-gradient-to-b from-[#005086] to-[#002845] py-12 lg:py-16 xl:py-28 px-6 lg:px-12 xl:px-20 relative overflow-hidden flex items-center justify-center">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-24 relative z-10">
          {/* Phone Image */}
          <div className="w-48 md:w-56 lg:w-64 xl:w-80 shrink-0 relative">
            <div className="absolute inset-0 bg-[#00a3e0] rounded-full blur-[60px] lg:blur-[80px] opacity-40"></div>
            <img
              src={pimg}
              alt="cMPLiBe App Interface"
              className="w-full h-auto relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:gap-8 xl:gap-12 items-center lg:items-start text-center lg:text-left">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-4xl leading-relaxed lg:leading-relaxed xl:leading-relaxed font-light">
              The{" "}
              <span className="font-semibold text-[#f47920]">cMPLiBe App</span>{" "}
              turns goal-oriented learning into a curious & exciting journey
              with real games, real challenges, real opportunities and real
              rewards, blending physical and digital experiences.
            </h2>

            <a
              href="https://play.google.com/store/apps/details?id=com.tagmango.cmplibe&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300 ease-out">
              <img
                src={dia}
                alt="Dialogue illustration"
                className="w-full max-w-[200px] md:max-w-xs lg:max-w-sm xl:max-w-md drop-shadow-xl"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
