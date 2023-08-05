import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
import Footer from '../utils/Footer';
import data from './data.js';
import Logo from '/src/assets/Logo.svg';
import EyeButton from '/src/assets/eyebutton.svg';
import MobileImage from '/src/assets/Hero/mobileimage.png';
import IntroCube from '/src/assets/Hero/intro-cube.png';
import IntroStair from '/src/assets/Hero/intro-stairs.png';
import IntroCubes from '/src/assets/Hero/intro-cubes.png';
import IntroPillar from '/src/assets/Hero/intro-pillar.png';
export default function Hero() {
  const [isOpen, setOpen]=useState(false);

    const openBarMenu=()=>{
        setOpen(true);
        console.log(true)
    }
    const closeBarMenu=()=>{
        setOpen(false);
        console.log(false)
    }

  return (
    <div id='hero'>
      {/* navigation bar */}
        <div className='flex md:justify-between justify-around  items-center w-[94%] m-auto'>
          <img src={Logo}  alt='logo'/>
          {/* <div className='flex gap-4 leading-tight justify-around items-center'>
            {data.map((list)=>{
              const {id,name}=list;
              return (
                <li key={id} className='uppercase md:block md:tracking-tight z-10 font-bold md:text-xs lg:text-sn lg:tracking-wider'>{name}</li>
              )
            })}
          </div> */}
          <button className={`burger-container ${isOpen?'isOpen':''}`} onClick={openBarMenu}>
                <GiHamburgerMenu/>
            </button>
            <div className={`flex gap-4 leading-tight justify-around items-center tabs-container ${isOpen?'isOpen':''}`}>
                <button className="cross-container" onClick={closeBarMenu}>
                    <RxCross2/>
                </button>
                {data.map((link)=>{
                  const {id,name}=link
                    return( <li key={id} className='uppercase md:block md:tracking-tight z-10 font-bold sm:text-sm md:text-xs lg:text-base lg:tracking-wider cursor-pointer link'>{name}</li>)
                })}
            </div>
          <img src={EyeButton} className="mr-18 md:mr-24" alt='eye button'/>
        </div>
        {/* middle section */}
        <div>
          <div className='flex items-center lg:items-start gap-14 lg:gap-0 justify-center md:justify-between inset-x-40 absolute z-0'>
            <img src={IntroCube}  alt='intro-cube'/>
            <img src={IntroStair} className='h-[10vh] sm:h-[20vh] lg:h-[40vh]' alt='intro-stair'/>
          </div>
          <div className='flex flex-col items-center justify-center h-[80vh] '>
            <h1 className='big-font z-0 sm:top-1/3 md:top-1/4'>Cash</h1>
            <img src={MobileImage} className=' h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-full z-10'alt='mobile image'/>
            <h1 className='big-font z-20 bottom-[25%]'>app</h1>
          </div>
          <div className='flex items-start justify-around -start-20 w-full absolute bottom-3 z-0'>
            <img src={IntroCubes} alt='intro-cubes'/>
            <img src={IntroPillar} alt='intro-pillar'/>
          </div>
        </div>

        {/* Footer */}
        <div className='hero-footer'>
        <Footer />
        </div>
    </div>
  )
}
