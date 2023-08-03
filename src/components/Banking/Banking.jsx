import React from 'react'
import BankingPhoneImage from '/src/assets/Banking/banking-phone.png';
export default function Banking() {
  return (
    <div id='banking'>
    <div className='flex items-center justify-start w-[60%] m-auto h-[85vh]'>
      <section className='flex flex-col w-1/2 items-start'>
      <h1 className='text-3xl font-bolder tracking-wider'>Banking</h1>
      <p className="font-['Mulish'] text-black  leading-6">Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
and account number.</p>
      </section>
    <div className="flex items-center justify-center">
      <img src={BankingPhoneImage} className="h-[40vh]"  alt='banking phone image'/>  
    </div>
    </div>
    {/* <div className=" flex">
      <img src={BigPillarImage} className='absolute bottom-0' alt='big pillar image'/>
      <img src={SmallPillarImage} className='absolute bottom-16 start-[26%]'alt='small pillar image'/>
      <img src={MediumPillarImage} className='absolute bottom-6 left-72' alt='medium pillar image'/>
      <img src={MediumPillarImage} className='absolute start-[44%] bottom-10 z-10' alt='medium pillar image'/>
      <img src={MediumPillarImage} className='absolute end-[15%] bottom-[15%] z-0' alt='medium pillar image'/>
      <img src={MediumPillarImage} className='absolute start-[52%] bottom-0 z-10' alt='medium pillar image'/>
      <img src={LargePillarImage} className='absolute start-[50%] bottom-[15%] z-0' alt='large pillar image'/>
      <img src={ColumnImage} className='absolute bottom-5 right-0' alt='column image'/>
      <img src={Column2Image} className='absolute bottom-0 h-1/2 right-[20%] z-10' alt='column2 image'/>
    </div> */}
  </div>
  )
}
