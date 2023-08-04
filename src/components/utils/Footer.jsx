import React from 'react'
import {BsApple,BsGooglePlay,BsTwitch,BsTwitter,BsInstagram,BsArrowDown} from 'react-icons/bs'
export default function Footer() {
    
  return (
    <div id='footer' className='flex items-center justify-around w-[96%] m-auto'>
        <div className='flex justify-between w-[50%]'>
            <div className='flex gap-3'>
            <button className='border-2  border-white rounded-md uppercase font-semibold text-center bg-black text-xs p-2 w-[10rem] tracking-wider'><span className='text-green px-1 text-base inline-block'><BsApple/></span>App store</button>
            <button className='border-2 z-10 border-white rounded-md uppercase font-semibold bg-black text-xs p-2 w-[10rem] tracking-wider'><span className='text-green  px-1 text-base inline-block'><BsGooglePlay/></span>googleplay</button>
            </div>
            <div className='text-green text-center text-3xl cursor-pointer'>
                <BsArrowDown/>
            </div>
        </div>
        <div className="w-[50%] flex justify-around items-center">
        <p className="text-[0.625rem] w-[60%] z-10 py-1 text-gray ml-5 font-['Mulish']">Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
        <div className="flex justify-around w-[20%] items-center text-xl cursor-pointer">
        <span><BsTwitch/></span>
        <span><BsTwitter/></span>
        <span><BsInstagram/></span>
        </div>
        </div>
    </div>
  )
}
