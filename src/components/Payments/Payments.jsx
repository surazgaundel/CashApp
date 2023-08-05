import React from 'react'
import MobileImage from '/src/assets/Payment/payments-phone.png'
import BigPillarImage from '/src/assets/Payment/payments-column-big.png'
import SmallPillarImage from '/src/assets/Payment/payments-pillar-small.png'
import MediumPillarImage from '/src/assets/Payment/payments-pillar-medium.png'
import LargePillarImage from '/src/assets/Payment/payments-pillar-large.png'
import ColumnImage from '/src/assets/Payment/payments-column.png'
import Column2Image from '/src/assets/Payment/payments-column2.png'
export default function Payments() {
  return (
    <div id='payment'>
      <div className='flex flex-col sm:flex-row  items-center sm:items-center justify-center md:justify-center w-full md:w-[60%] ml-0 sm:ml-[10%] h-[85vh]'>
        <section className='flex flex-col w-1/2 lg:-mr-24 lg:w-1/3 items-start z-20'>
        <h1 className='text-2xl sm:text-3xl font-bolder tracking-wider'>Payments</h1>
        <p className="font-['Mulish'] text-xs sm:text-base leading-6 text-black">Send and receive money with anyone, donate  to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their  QR code to pay.</p>
        </section>
      <div className="z-10 flex items-center justify-center">
        <img src={MobileImage} className="h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-max z-20"  alt='mobile image'/>
      </div>
      </div>
      <div>
        <img src={BigPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max bottom-0 left-0 z-0' alt='big pillar image'/>
        <img src={SmallPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max bottom-16 start-[26%]'alt='small pillar image'/>
        <img src={LargePillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max start-[50%] bottom-[15%] z-0' alt='large pillar image'/>
        <img src={ColumnImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max bottom-5 right-0' alt='column image'/>
        <img src={Column2Image} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max bottom-0  right-[20%] z-10' alt='column2 image'/>
      </div>
      <div>
        <img src={MediumPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max bottom-6 left-72' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max start-[44%] bottom-10 z-10' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max end-[15%] bottom-[15%] z-0' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute h-[15%] sm:h-[25%] md:h-[40%] lg:h-max start-[52%] -bottom-14 z-10' alt='medium pillar image'/>
      </div>
    </div>
  )
}
