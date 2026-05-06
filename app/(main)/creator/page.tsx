"use client";

import { Button } from "antd";

export default function CreatorPage() {
  return (

    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#D8CFBC' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
          Creator
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          <div className="w-full md:w-[40%] flex justify-center md:justify-start">
            <div 
              className="rounded-xl overflow-hidden border shadow-lg transform hover:scale-[1.02] transition-transform" 
              style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0', maxWidth: '320px' }}
            >
              <img 
                src="/god-zun.jpg" 
                alt="ZUN" 
                loading="eager"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="w-full md:w-[60%] space-y-6">
            
            <div 
              className="rounded-xl p-6 border shadow-sm" 
              style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}
            >
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                <strong className="text-xl">ZUN</strong> (本名: 太田 順也) is the sole member of Team Shanghai Alice 
                and the creator of the Touhou Project series. He handles music composition, 
                game design, programming, and artwork entirely by himself.
              </p>
            </div>

            <div 
              className="rounded-xl p-6 border shadow-sm" 
              style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}
            >
              <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                Description
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                Known for his distinctive art style and intricate bullet patterns, 
                ZUN has been creating Touhou games since 1996. He is also famous for 
                his love of beer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {['Twitter', 'Website', 'Music'].map((text) => (
                <Button 
                  key={text}
                  className="hover:!bg-[#7A6A58] hover:!text-[#E4DDD0] transition-all"
                  style={{ 
                    fontFamily: 'Courier New', 
                    backgroundColor: 'transparent', 
                    borderColor: '#7A6A58', 
                    color: '#3D2E20',
                    height: '40px',
                    minWidth: '100px'
                  }}
                >
                  {text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}