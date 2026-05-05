const characters = [
  { name: 'Reimu Hakurei', role: 'Shrine Maiden of the Hakurei Shrine', imageUrl: '/reimu.jpg' },
  { name: 'Marisa Kirisame', role: 'Ordinary Magician', imageUrl: '/marisa.jpg' },
  { name: 'Sakuya Izayoi', role: 'Perfect and Elegant Maid', imageUrl: '/sakuya.jpg' },
  { name: 'Remilia Scarlet', role: 'The Eternal Young Scarlet Moon', imageUrl: '/remilia.jpg' },
  { name: 'Flandre Scarlet', role: 'Sister of the Devil', imageUrl: '/flandre.jpg' },
  { name: 'Alice Margatroid', role: 'Seven-Colored Puppeteer', imageUrl: '/alice.jpg'},
  { name: 'Youmu Konpaku', role: 'Phantom-Human Gardener', imageUrl: '/youmu.jpg' },
  { name: 'Yuyuko Saigyouji', role: 'Ghost Girl in the Netherworld Tower', imageUrl: '/yuyuko.jpg' },
  { name: 'Yukari Yakumo', role: 'Youkai of Boundaries', imageUrl: '/yukari.jpg' },
  { name: 'Keine Kamishirasawa', role: 'Half Beast of Knowledge and History', imageUrl: '/keine.jpg'},
  { name: 'Reisen Udongein Inaba', role: 'Lunatic Moon Rabbit', imageUrl: '/reisen.jpg'},
  { name: 'Aya Shameimaru', role: 'Traditional Reporter of Fantasy', imageUrl: '/aya.jpg'},
  { name: 'Yuuka Kazami', role: 'Flower Master of the Four Seasons', imageUrl: '/yuuka.jpg'},
  { name: 'Sanae Kochiya', role: 'Deified Human of the Wind', imageUrl: '/sanae.jpg'},
  { name: 'Tenshi Hinanawi', role: 'Girl of the Sphere of Neither Perception nor Non-Perception', imageUrl: '/tenshi.jpg'},
  { name: 'Parsee Mizuhashi', role: 'The Jealousy Beneath the Earth Crust', imageUrl: '/parsee.jpg'},
  { name: 'Byakuren Hijiri', role: 'Sealed Great Magician', imageUrl: '/byakuren.jpg'},
  { name: 'Hata no Kokoro', role: 'The Expressive Poker Face', imageUrl: '/kokoro.jpg'},
  { name: 'Junko', imageUrl: '/junko.jpg'},
  { name: 'Kasen Ibaraki', role: 'One-Armed Horned Hermit', imageUrl: '/kasen.jpg'}
]

export default function CharacterPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D8CFBC' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
          Characters
        </h1>
        <div className="grid grid-cols-4 gap-3">
          {characters.map(char => (
            <div key={char.name} className="rounded-xl overflow-hidden border hover:shadow-md transition"
              style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}>
              <div className="aspect-square w-full overflow-hidden" style={{ backgroundColor: '#C4B09A' }}>
                <img 
                  src={char.imageUrl} 
                  alt={char.name}      
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-2">
                <p className="text-xs font-semibold truncate" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                  {char.name}
                </p>
                <p className="text-xs" style={{ fontFamily: 'Courier New', color: '#7A6A58' }}>
                  {char.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}