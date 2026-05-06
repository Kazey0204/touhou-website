import Image from 'next/image';
import { Carousel } from 'antd';

export default function HomePage() {
  const gifSlides = [
    "/flying-marisa.gif",
    "/fallen-reimu.gif", 
    "/komachi.gif",
    "/yuyuko-firework.gif",
  ];

  return (
    <div className="flex flex-col items-center justify-center font-mono bg-[#E4DDD0] min-h-[calc(100vh-80px)] py-8 md:py-12 px-4 sm:px-8 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl w-full">
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start order-2 md:order-1">
          <div className="flex items-center gap-2 sm:gap-6 mb-6 w-full justify-center md:justify-start">

            <div className="relative w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <Image src="/touhou-pic1.png" alt="Left Icon" fill sizes='150px' className="object-contain" />
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold italic text-[#2d2d2d] md:whitespace-nowrap text-center">
              Welcome to Touhou Project!
            </h1>

            <div className="relative w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image src="/touhou-pic2.png" alt="Right Icon" fill sizes='150px' className="object-contain" />
            </div>
          </div>

          <div className="bg-[#e9d8b6] p-6 sm:p-10 lg:p-12 rounded-sm border border-[#4b4d42]/20 shadow-md w-full">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose italic text-gray-800 text-center md:text-left">
              "The Touhou Project is a series of 20 vertically-scrolling 
              danmaku shooting games made by Team Shanghai Alice, 
              with seven spinoffs games co-produced with Twilight Frontier."
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] order-1 md:order-2">
          <div 
            className="rounded-2xl overflow-hidden border-2 shadow-2xl" 
            style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0' }}
          >
            <Carousel autoplay autoplaySpeed={3000} effect="fade">
              {gifSlides.map((src, index) => (
                <div key={index}>
                  <img 
                    src={src} 
                    alt={`Slide ${index}`} 
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover block"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

      </div>
    </div>
  );
}