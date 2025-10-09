import Image from "next/image";

const logos = [
  { src: "/logo/LOGO 1.png", alt: "Logo DOGGA CLAN" },
  { src: "/logo/LOGO 2.png", alt: "Logo CENTURY 21" },
  { src: "/logo/LOGO 3.png", alt: "Logo Palatinum Academy" },
  { src: "/logo/LOGO 4.png", alt: "Logo Funded Mind" },
  { src: "/logo/LOGO 5.png", alt: "Logo Selling Hub" },
  { src: "/logo/LOGO 6.png", alt: "Logo Parseq" },
  { src: "/logo/LOGO 7.png", alt: "Logo Vostrey" },
];

const WhoWeHelped = () => {
  return (
    <div
      className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 mt-10 flex flex-col justify-center items-center gap-6 py-8 overflow-hidden"
      id="partneri"
    >
      <div className="w-full">
        <div className="flex whitespace-nowrap gap-10 marquee">
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 h-16 flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={50}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* levý fade */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>
        {/* pravý fade */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default WhoWeHelped;
