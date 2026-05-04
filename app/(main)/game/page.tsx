export default function GamePage() {
  return (
    <div className="flex flex-col items-center p-10 font-mono space-y-12 bg-[#E4DDD0] min-h-screen">
      
      {/* PC-98 Games Section */}
      <section className="w-full max-w-2xl bg-[#8B7A6A] border-2 border-black/10 p-6 rounded-lg shadow-md">
        <h2 className="text-center font-bold text-2xl mb-4 border-b border-black/20 pb-2 text-[#D8CFBC]">
          PC-98 Games
        </h2>
        <ul className="text-center space-y-1 text-lg text-[#F0E8DC]">
          <li>TH01 Highly Responsive to Prayers</li>
          <li>TH02 Story of Eastern Wonderland</li>
          <li>TH03 Phantasmagoria of Dim.Dream</li>
          <li>TH04 Lotus Land Story</li>
          <li>TH05 Mystic Square</li>
        </ul>
      </section>

      {/* Windows Games Section */}
      <section className="w-full max-w-2xl bg-[#B8C8B5] border-2 border-black/10 p-6 rounded-lg shadow-md">
        <h2 className="text-center font-bold text-2xl mb-4 border-b border-black/20 pb-2 text-[#2E4030]">
          Windows Games
        </h2>
        <ul className="text-center space-y-1 text-lg text-[#2E4030]">
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
      <section className="w-full max-w-2xl bg-[#D4A87A] border-2 border-black/10 p-6 rounded-lg shadow-md">
        <h2 className="text-center font-bold text-2xl mb-4 border-b border-black/20 pb-2 text-[#5C3210]">
          Other Games
        </h2>
        <ul className="text-center space-y-1 text-lg text-[#3D2010]">
          <li>Gold Rush</li>
          <li>Seihou Project</li>
          <li>Samidare</li>
          <li>Banshiryuu</li>
          <li>Pink Sweets</li>
        </ul>
      </section>

    </div>
  );
}