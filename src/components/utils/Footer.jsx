import {BsApple,BsGooglePlay,BsTwitch,BsTwitter,BsInstagram,BsArrowDown} from 'react-icons/bs'
export default function Footer() {

  return (
    <div id='footer' className={` flex items-center justify-around w-[96%] m-auto`}>
        <div className='flex justify-between w-[50%]'>
            <div className='flex flex-wrap gap-3'>
            <button className='z-10 rounded-md uppercase font-semibold text-center text-xs p-2 w-[10rem] tracking-wider'><span className='text-green px-1 text-base inline-block'><BsApple/></span>App store</button>
            <button className='z-10 rounded-md uppercase font-semibold text-xs p-2 w-[10rem] tracking-wider'><span className='text-green  px-1 text-base inline-block'><BsGooglePlay/></span>googleplay</button>
            </div>
            <div className='text-green hidden md:block text-center text-3xl cursor-pointer down-arrow'>
                <BsArrowDown/>
            </div>
        </div>
        <div className="w-[50%] flex justify-around items-center">
        <p className=" text-[0.5rem] md:text-[0.625rem] w-full md:w-[60%] z-10 py-1 ml-0 md:ml-5 font-['Mulish']">Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
        <div className="flex flex-wrap justify-around w-[20%] items-center gap-1 text-xl cursor-pointer">
        <span><BsTwitch/></span>
        <span><BsTwitter/></span>
        <span><BsInstagram/></span>
        </div>
        </div>
    </div>
  )
}
