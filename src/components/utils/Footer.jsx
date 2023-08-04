
import { useRef,useEffect, useState } from 'react';
import {BsApple,BsGooglePlay,BsTwitch,BsTwitter,BsInstagram,BsArrowDown} from 'react-icons/bs'
export default function Footer({heroColor, investColor}) {
  const footerRef=useRef();
  const rgbvalue='rgb(0,0,0)'

  function rgbToHex(rgb) {
    const rgba = rgb.replace(/^rgba?\(|\s+|\)$/g, '').split(',')  ;
    const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
    return hex;
  }
  
  useEffect(() => {
    updateFooterClass(heroColor);
  }, [heroColor]);

  useEffect(() => {
    updateFooterClass(investColor)
  }, [investColor]);

  const updateFooterClass = (backgroundColor) => {
    // Determine the class name based on the background color
    const className = backgroundColor === 'rgba(0,0,0,0)' ? 'hero-footer' : 'invest-footer';
    console.log('bg',typeof(backgroundColor));
    // Update the class name of the footer
    // footerRef.current.classList.add(className);
    
  };



  return (
    <div id='footer' className={` flex items-center justify-around w-[96%] m-auto`}>
        <div className='flex justify-between w-[50%]'>
            <div className='flex gap-3'>
            <button className='z-10 rounded-md uppercase font-semibold text-center text-xs p-2 w-[10rem] tracking-wider'><span className='text-green px-1 text-base inline-block'><BsApple/></span>App store</button>
            <button className='z-10 rounded-md uppercase font-semibold text-xs p-2 w-[10rem] tracking-wider'><span className='text-green  px-1 text-base inline-block'><BsGooglePlay/></span>googleplay</button>
            </div>
            <div className='text-green text-center text-3xl cursor-pointer'>
                <BsArrowDown/>
            </div>
        </div>
        <div className="w-[50%] flex justify-around items-center">
        <p className="text-[0.625rem] w-[60%] z-10 py-1 ml-5 font-['Mulish']">Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
        <div className="flex justify-around w-[20%] items-center text-xl cursor-pointer">
        <span><BsTwitch/></span>
        <span><BsTwitter/></span>
        <span><BsInstagram/></span>
        </div>
        </div>
    </div>
  )
}
