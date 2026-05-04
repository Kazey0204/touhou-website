import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-16 font-mono bg-[#E4DDD0] min-h-screen">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-25 h-25">
          <Image 
            src="/touhou-pic1.png" 
            alt="Left Icon"
            fill sizes='80px'
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold italic text-[#2d2d2d] text-center">
          Welcome to Touhou Project!
        </h1>

        <div className="relative w-22 h-22">
          <Image 
            src="/touhou-pic2.png"
            alt="Right Icon"
            fill sizes='80px'
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-3xl bg-[#e9d8b6] p-10 rounded-sm border border-[#4b4d42]/10 shadow-sm text-center">
        <p className="text-lg leading-loose italic text-gray-800">
          "The Touhou Project is a series of 20 vertically-scrolling 
          danmaku shooting games made by Team Shanghai Alice, 
          with seven spinoffs games co-produced with Twilight Frontier."
        </p>
      </div>
    </div>
  );
}