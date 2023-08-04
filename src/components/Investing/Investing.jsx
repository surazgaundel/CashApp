import {useEffect,useRef, useState} from 'react'
import Footer from '../utils/Footer'
import InvestBitcoin from '/src/assets/Investing/investing-bitcoin.png';
import InvestGraph1 from '/src/assets/Investing/investing-graph-1.png';
import InvestGraph2 from '/src/assets/Investing/investing-graph-2.png';
import InvestGraph3 from '/src/assets/Investing/investing-graph-3.png';
import InvestStocks from '/src/assets/Investing/investing-stocks.png';


export default function Investing() {
  const investRef = useRef();
  const[investColor,setInvestColor]=useState('')

  useEffect(() => {
    const colorInvest=getComputedStyle(investRef.current).backgroundColor; 
    setInvestColor(colorInvest);
  }, []);

  return (
    <div id='investing' ref={investRef}>
      <h1 className='text-4xl font-bolder text-white tracking-wider text-center w-full mt-5 absolute top-[5%]'>Investing</h1>
      <div className='flex justify-center items-center w-full h-[90vh]'>
        <div className='flex items-center justify-around w-[50%]'>
          <section className='flex flex-col w-1/2 items-start z-20'>
          <h1 className='text-3xl font-bolder tracking-wider'>Stocks</h1>
          <p className="font-['Mulish'] leading-6">Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
          </section>
        <div className="flex items-center">
          <img src={InvestStocks} className=" z-20"  alt='stocks-image'/>  
        </div>
      </div>
        <div className='flex flex-row-reverse justify-around items-center w-[50%]'>
          <section className='flex flex-col w-1/2 items-start z-20'>
          <h1 className='text-3xl font-bolder tracking-wider'>Bitcoin</h1>
          <p className="font-['Mulish'] leading-6">Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
          </section>
        <div className="flex items-center justify-center">
          <img src={InvestBitcoin} className=" z-20"  alt='bitcoin-image'/>  
        </div>
      </div>
    </div>
    <div className=" flex">
      <img src={InvestGraph1} className='absolute bottom-0 z-0' alt='graph1'/>
      <img src={InvestGraph2} className='absolute right-0 bottom-[35%] z-0'alt='graph2'/>
      <img src={InvestGraph3} className='absolute bottom-[5%] right-0 z-0'  alt='graph3'/>
      </div>
      <div className='invest-footer'>
        <Footer/> 
      </div>
    </div>
  )
}
