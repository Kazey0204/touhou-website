const characters = [
  { name: 'Reimu Hakurei', role: 'Shrine Maiden', image: null },
  { name: 'Marisa Kirisame', role: 'Witch', image: null },
  { name: 'Sakuya Izayoi', role: 'Maid', image: null },
  { name: 'Remilia Scarlet', role: 'Vampire', image: null },
  { name: 'Flandre Scarlet', role: 'Vampire', image: null },
  { name: 'Youmu Konpaku', role: 'Half-phantom', image: null },
  { name: 'Yuyuko Saigyouji', role: 'Ghost', image: null },
  { name: 'Yukari Yakumo', role: 'Youkai Sage', image: null },
  { name: 'Suika Ibuki', role: 'Oni', image: null },
]

export default function CharacterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-base font-bold mb-6" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
        Characters
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {characters.map((char) => (
          <div key={char.name}
            className="rounded-xl overflow-hidden border hover:shadow-md transition"
            style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0' }}
          >
            {/* Image box */}
            <div className="aspect-square flex items-center justify-center"
              style={{ backgroundColor: '#C4B09A' }}>
              <div className="text-center p-2">
                <p className="text-xs font-bold" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>
                  char
                </p>
                <p className="text-xs" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>name</p>
                <p className="text-xs" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>and</p>
                <p className="text-xs" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>imgae</p>
              </div>
            </div>
            {/* Info */}
            <div className="p-2">
              <p className="text-xs font-semibold truncate" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>
                {char.name}
              </p>
              <p className="text-xs" style={{ color: '#7A6A58', fontFamily: 'Courier New' }}>
                {char.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
