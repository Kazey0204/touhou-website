"use client";

import { Button } from "antd";

export default function CreatorPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#D8CFBC' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
          Creator
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <div className="w-full md:w-[40%]">
            <div 
              className="rounded-xl overflow-hidden border shadow-sm" 
              style={{ borderColor: '#B0A090', backgroundColor: '#E4DDD0', width: 'fit-content' }}
            >
              <img 
                src="/god-zun.jpg" 
                alt="ZUN" 
                loading="eager"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  height: 'auto' 
                }} 
              />
            </div>
          </div>

          <div className="w-full md:w-[60%] space-y-6">
            
            <div 
              className="rounded-xl p-6 border shadow-sm" 
              style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}
            >
              <p className="text-m leading-relaxed" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                <strong>ZUN</strong> (本名: 太田 順也) is the sole member of Team Shanghai Alice 
                and the creator of the Touhou Project series. He handles music composition, 
                game design, programming, and artwork entirely by himself.
              </p>
            </div>

            <div 
              className="rounded-xl p-6 border shadow-sm" 
              style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}
            >
              <h3 className="font-bold mb-2 text-m" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                Description Text
              </h3>
              <p className="text-m leading-relaxed" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                Known for his distinctive art style and intricate bullet patterns, 
                ZUN has been creating Touhou games since 1996. He is also famous for 
                his love of beer.
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                style={{ 
                  fontFamily: 'Courier New', 
                  backgroundColor: 'transparent', 
                  borderColor: '#7A6A58', 
                  color: '#3D2E20' 
                }}
              >
                Twitter
              </Button>
              <Button 
                style={{ 
                  fontFamily: 'Courier New', 
                  backgroundColor: 'transparent', 
                  borderColor: '#7A6A58', 
                  color: '#3D2E20' 
                }}
              >
                Website
              </Button>
              <Button 
                style={{ 
                  fontFamily: 'Courier New', 
                  backgroundColor: 'transparent', 
                  borderColor: '#7A6A58', 
                  color: '#3D2E20' 
                }}
              >
                Music
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}