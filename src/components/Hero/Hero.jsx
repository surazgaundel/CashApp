import React from 'react'
import Footer from '../utils/Footer';
import data from './data.js';
import Logo from '/src/assets/Logo.svg';
import EyeButton from '/src/assets/eyebutton.svg';
import MobileImage from '/src/assets/mobileimage.png';
import IntroCube from '/src/assets/intro-cube.png';
import IntroStair from '/src/assets/intro-stairs.png';
import IntroCubes from '/src/assets/intro-cubes.png';
import IntroPillar from '/src/assets/intro-pillar.png';
export default function Hero() {
  return (
    <div id='hero'>
      {/* navigation bar */}
        <div className='flex justify-between items-center w-[94%] m-auto'>
          <img src={Logo}  alt='logo'/>
          <div className='flex gap-4 leading-tight justify-around items-center'>
            {data.map((list)=>{
              const {id,name}=list;
              return (
                <li key={id} className='uppercase font-bold text-sm tracking-wider'>{name}</li>
              )
            })}
          </div>
          <img src={EyeButton} alt='eye button'/>
        </div>
        {/* middle section */}
        <div>
          <div className='flex items-center justify-around relative z-0'>
            <img src={IntroCube} className='z-10 absolute top-1'alt='intro-cube'/>
            <img src={IntroStair} className='z-10 absolute top-1'alt='intro-stair'/>
          </div>
          <div className='flex items-center justify-center h-[80vh]'>
            <h1 className='big-font z-0 top-1/4'>Cash</h1>
            <img src={MobileImage} className='z-10'alt='mobile image'/>
            <h1 className='big-font z-20 bottom-1/3'>app</h1>
          </div>
          <div className='flex items-center justify-around relative z-0'>
            <img src={IntroCubes} className='z-10 absolute bottom-3'alt='intro-cubes'/>
            <img src={IntroPillar} className='z-10 absolute bottom-3'alt='intro-pillar'/>
          </div>
        </div>

        {/* Footer */}
      <div>
      <Footer/>
      </div>
    </div>
  )
}
