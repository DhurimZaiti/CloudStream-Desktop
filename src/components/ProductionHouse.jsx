import React from 'react'
// Images
import DisneyPlus from './../assets/images/DisneyPlus.png';
import HBOMax from './../assets/images/HBOMax.png';
import Netflix from './../assets/images/netflix.png';
import Peacock from './../assets/images/peacock.png';
import PrimeVideo from './../assets/images/primeVideo.png';
// Videos
import DisneyIntro from './../assets/Videos/DisneyIntro.mp4';
import HBOMAXIntro from './../assets/Videos/HBOMAXIntro.mp4';
import NetflixIntro from './../assets/Videos/NetflixIntro.mp4';
import PeacockIntro from './../assets/Videos/PeacockIntro.mp4';
import PrimeVideoIntro from './../assets/Videos/PrimeVideoIntro.mp4';

function ProductionHouse() {
    const productionHouseList =[
        {
            id: 1,
            image: DisneyPlus,
            video: DisneyIntro
        },
        {
            id: 2,
            image: HBOMax,
            video: HBOMAXIntro
        },
        {
            id: 3,
            image: Netflix,
            video: NetflixIntro
        },
        {
            id: 4,
            image: Peacock,
            video: PeacockIntro
        },
        {
            id: 5,
            image: PrimeVideo,
            video: PrimeVideoIntro
        }
    ]

  return (
    <div className='flex gap-5 p-2 px-16'>

        {productionHouseList.map((item) => (
            <div
                key = {item.id} className='relative'
                >
                
                <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                    <video src={item.video} 
                    autoPlay
                    muted 
                    loop 
                    playsInline
                    className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-100'/>
                    <img 
                    src={item.image} 
                    className='w-full z-[1]' />
                </div>
            </div>
        ))}

    </div>
  )
}

export default ProductionHouse