export default function GamePage() {
  return (
    <div className="flex flex-col items-center p-6 md:p-10 font-mono bg-[#E4DDD0] min-h-screen">
      
      <h1 className="text-3xl font-bold mb-10 text-[#3D2E20] border-b-4 border-[#8B7A6A] pb-2">
        Touhou Project Games
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* PC-98 Games Section */}
        <section className="bg-[#8B7A6A] border-2 border-black/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-center font-bold text-xl md:text-2xl mb-4 border-b border-black/20 pb-2 text-[#D8CFBC]">
            PC-98 Games
          </h2>
          <ul className="text-center space-y-2 text-sm md:text-base lg:text-lg text-[#F0E8DC]">
            <li className="hover:text-white transition-colors cursor-default">TH01 Highly Responsive to Prayers</li>
            <li className="hover:text-white transition-colors cursor-default">TH02 Story of Eastern Wonderland</li>
            <li className="hover:text-white transition-colors cursor-default">TH03 Phantasmagoria of Dim.Dream</li>
            <li className="hover:text-white transition-colors cursor-default">TH04 Lotus Land Story</li>
            <li className="hover:text-white transition-colors cursor-default">TH05 Mystic Square</li>
          </ul>
        </section>

        {/* Windows Games Section */}
        <section className="bg-[#B8C8B5] border-2 border-black/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow lg:row-span-2">
          <h2 className="text-center font-bold text-xl md:text-2xl mb-4 border-b border-black/20 pb-2 text-[#2E4030]">
            Windows Games
          </h2>
          <ul className="text-center space-y-2 text-sm md:text-base lg:text-lg text-[#2E4030]">
            <li>TH06 Embodiment of Scarlet Devil</li>
            <li>TH07 Perfect Cherry Blossom</li>
            <li>TH07.5 Immaterial and Missing Power</li>
            <li>TH08 Imperishable Night</li>
            <li>TH09 Phantasmagoria of Flower View</li>
            <li>TH09.5 Shoot the Bullet</li>
            <li>TH10 Mountain of Faith</li>
            <li>TH10.5 Scarlet Weather Rhapsody</li>
            <li>TH11 Subterranean Animism</li>
            <li>TH12 Undefined Fantastic Object</li>
            <li>TH12.3 Touhou Hisoutensoku</li>
            <li>TH12.5 Double Spoiler</li>
            <li>TH12.8 Fairy Wars</li>
            <li>TH13 Ten Desires</li>
          </ul>
        </section>

        {/* Other Games Section */}
        <section className="bg-[#D4A87A] border-2 border-black/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-center font-bold text-xl md:text-2xl mb-4 border-b border-black/20 pb-2 text-[#5C3210]">
            Other Games
          </h2>
          <ul className="text-center space-y-2 text-sm md:text-base lg:text-lg text-[#3D2010]">
            <li className="hover:text-[#5C3210] transition-colors cursor-default">Gold Rush</li>
            <li className="hover:text-[#5C3210] transition-colors cursor-default">Seihou Project</li>
            <li className="hover:text-[#5C3210] transition-colors cursor-default">Samidare</li>
            <li className="hover:text-[#5C3210] transition-colors cursor-default">Banshiryuu</li>
            <li className="hover:text-[#5C3210] transition-colors cursor-default">Pink Sweets</li>
          </ul>
        </section>

      </div>
    </div>
  );
}