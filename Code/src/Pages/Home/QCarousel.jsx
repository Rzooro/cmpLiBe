import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import QCard from "./Qcard.jsx";

import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function QCarousel() {
  const swiperRef = useRef(null);

  const quotes = [
    {
      text: "Even as a class topper, I struggled to find the opportunities I dreamed of. cMPLiBe helped me discover how to create them, not just wait for them. Proud to be a lifelong cMPliBe LEarner.",
      author: "From a student",
    },
    {
      text: "cMPLiBe has redefined how we prepare and present our students. Today, they’re not just job seekers, they’re opportunity-ready professionals who make us proud on every platform.",
      author: "From the Director of a partner institute",
    },
    {
      text: "cMPLiBe made hiring seamless - a curated pool of relevant talent, ready to learn-on-the-job, perform and grow. Every student we hired came with optimism, agility and a hunger to learn- exactly what the future workplace needs.",
      author: "From the HR head of a reputed company",
    },
  ];

  const handleNext = () => {
    if (!swiperRef.current) return;

    if (swiperRef.current.isEnd) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    if (swiperRef.current.isBeginning) {
      swiperRef.current.slideTo(quotes.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="relative py-20 bg-gray-100">
      <div className="mx-auto relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides
          slidesPerView={1.3}
          spaceBetween={80}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass:
              "w-2.5 h-2.5 bg-gray-400 rounded-full transition-all duration-300",
            bulletActiveClass: "!bg-[#0d3b66] scale-125",
          }}
          className="py-10">
          {quotes.map((q, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <QCard
                  text={q.text}
                  author={q.author}
                  className={isActive ? "scale-100" : "scale-90 opacity-50"}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 
                     z-20 group/btn bg-white
                     scale-95 hover:scale-105
                     duration-200 rounded-3xl p-3 shadow-md"
          aria-label="Previous Slide">
          <BsChevronCompactLeft
            className="size-8 text-[#0d3b66] duration-200 
                       group-hover/btn:-translate-x-1"
          />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 
                     z-20 group/btn bg-white
                     scale-95 hover:scale-105
                     duration-200 rounded-3xl p-3 shadow-md"
          aria-label="Next Slide">
          <BsChevronCompactRight
            className="size-8 text-[#0d3b66] duration-200 
                       group-hover/btn:translate-x-1"
          />
        </button>

        <div className="custom-pagination flex justify-center gap-3" />
      </div>
    </section>
  );
}

export default QCarousel;
