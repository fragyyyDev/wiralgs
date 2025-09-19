import Image from "next/image";

const logos = [
  { src: "/logos/logo1.png", alt: "Logo ÚSTÍ Rapid" },
  { src: "/logos/logo2.png", alt: "Logo eSports" },
  { src: "/logos/logo4.png", alt: "Logo Czech ski and snowboard" },
  { src: "/logos/logo5.png", alt: "Logo SK INTEROBAL plzen 1991" },
  { src: "/logos/logo6.png", alt: "Logo Womens World Championship IIHF" },
  { src: "/logos/logo7.png", alt: "Logo Česká házená" },
  { src: "/logos/logo8.png", alt: "Logo Plážová házená" },
  { src: "/logos/logo9.png", alt: "Logo Domculette photo" },
  { src: "/logos/logo10.png", alt: "Logo Sluneta" },
  { src: "/logos/logo11.png", alt: "Logo Český Hokej" },
  { src: "/logos/logo12.png", alt: "Logo Oktagon MMA" },
  { src: "/logos/logo13.png", alt: "Logo Česká lípa" },
  { src: "/logos/logo14.png", alt: "Logo Viagem" },
  { src: "/logos/logo15.png", alt: "Logo Prosperity" },
  { src: "/logos/logo16.png", alt: "Logo Fitness sluneta" },
  { src: "/logos/logo17.png", alt: "Logo Bílí tygři" },
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
