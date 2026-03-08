import { BiSolidQuoteSingleLeft } from "react-icons/bi";

function QCard({ text, author, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center h-full px-20 pt-24 pb-16 ${className}`}>
      <div
        className="
        relative
        w-full
        h-100
        bg-white/95
        backdrop-blur-md
        ring-4 ring-[#063b6e]
        rounded-[5rem]
        px-24 py-18
        text-center
        overflow-visible
        flex flex-col justify-center
      ">
        {/* Decorative Quotes */}
        <div className="absolute -top-12 left-20 flex z-20 pointer-events-none">
          <BiSolidQuoteSingleLeft className="text-[8rem] text-[#063b6e]" />
          <BiSolidQuoteSingleLeft className="text-[8rem] text-[#063b6e] -ml-16" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6">
          <h2 className="text-4xl leading-snug font-zilla text-gray-800">
            {text}
          </h2>

          <p className="text-[#063b6e] text-2xl font-semibold">{author}</p>
        </div>
      </div>
    </div>
  );
}

export default QCard;
