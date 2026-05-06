import Image from 'next/image';
import { Carousel } from 'antd'; // Import Carousel từ Ant Design

export default function HomePage() {
  const gifSlides = [
    "/flying-marisa.gif",
    "/fallen-reimu.gif", 
    "/komachi.gif",
    "/yuyuko-firework.gif",
  ];

  return (
    <div className="flex flex-col items-center justify-center font-mono bg-[#E4DDD0] min-h-[calc(100vh-80px)] py-12 px-8 md:px-16">
      
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl w-full">
        
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start">
          
          <div className="flex items-center gap-6 mb-8 w-full justify-center md:justify-start">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image src="/touhou-pic1.png" alt="Left Icon" fill sizes='150px' className="object-contain" />
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold italic text-[#2d2d2d] whitespace-nowrap">
              Welcome to Touhou Project!
            </h1>

            <div className="relative w-20 h-20 flex-shrink-0">
              <Image src="/touhou-pic2.png" alt="Right Icon" fill sizes='150px' className="object-contain" />
            </div>
          </div>

          <div className="bg-[#e9d8b6] p-10 lg:p-12 rounded-sm border border-[#4b4d42]/20 shadow-md w-full">
            <p className="text-xl leading-loose italic text-gray-800 text-center md:text-left">
              "The Touhou Project is a series of 20 vertically-scrolling 
              danmaku shooting games made by Team Shanghai Alice, 
              with seven spinoffs games co-produced with Twilight Frontier."
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%]">
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
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover' 
                    }} 
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