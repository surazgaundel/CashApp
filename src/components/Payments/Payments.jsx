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
      <div className='flex items-center justify-center h-[85vh]'>
        <section className='flex flex-col w-1/4 items-start -mr-28 '>
        <h1 className='text-3xl font-bolder tracking-wider'>Payments</h1>
        <p className="font-['Mulish'] text-black">Send and receive money with anyone, donate  to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their  QR code to pay.</p>
        </section>
      <div className="flex items-center justify-center -ml-40">
        <img src={MobileImage}  alt='mobile image'/>
      </div>
      </div>
      <div className=" flex">
        <img src={BigPillarImage} className='absolute bottom-0' alt='big pillar image'/>
        <img src={SmallPillarImage} className='absolute bottom-16 start-[26%]'alt='small pillar image'/>
        <img src={MediumPillarImage} className='absolute bottom-6 left-72' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute start-[44%] bottom-10 z-10' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute end-[15%] bottom-[15%] z-0' alt='medium pillar image'/>
        <img src={MediumPillarImage} className='absolute start-[52%] -bottom-14 z-10' alt='medium pillar image'/>
        <img src={LargePillarImage} className='absolute start-[50%] bottom-[15%] z-0' alt='large pillar image'/>
        <img src={ColumnImage} className='absolute bottom-5 right-0' alt='column image'/>
        <img src={Column2Image} className='absolute bottom-0 h-1/2 right-[20%] z-10' alt='column2 image'/>
      </div>
    </div>
  )
}
