export default function CreatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-base font-bold mb-6" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
        Creator
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* ZUN Image placeholder */}
        <div className="rounded-lg overflow-hidden border" style={{ borderColor: '#B0A090' }}>
          <div className="h-52 flex items-center justify-center"
            style={{ backgroundColor: '#E4DDD0' }}>
            <p className="text-sm" style={{ color: '#7A6A58', fontFamily: 'Courier New' }}>
              Zun's Image
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center gap-4">
          <div className="p-4 rounded-lg border" style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0' }}>
            <p className="text-xs leading-relaxed" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>
              <span className="font-bold">ZUN</span> (本名: 太田 順也) is the sole member of Team Shanghai Alice
              and the creator of the Touhou Project series. He handles music composition, game design,
              programming, and artwork entirely by himself.
            </p>
          </div>

          <div className="p-4 rounded-lg border" style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0' }}>
            <p className="text-xs font-bold mb-2" style={{ color: '#3D2E20', fontFamily: 'Courier New' }}>
              Description Text
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#5C4A38', fontFamily: 'Courier New' }}>
              Known for his distinctive art style and intricate bullet patterns,
              ZUN has been creating Touhou games since 1996. He is also famous
              for his love of beer.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {['Twitter', 'Website', 'Music'].map(link => (
              <span key={link}
                className="text-xs px-3 py-1 rounded border cursor-pointer hover:opacity-80"
                style={{ borderColor: '#6B5E4E', color: '#6B5E4E', fontFamily: 'Courier New' }}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
