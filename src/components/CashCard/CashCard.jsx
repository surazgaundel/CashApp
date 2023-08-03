import React from 'react'

export default function CashCard() {
  return (
    <div id='cashcard'>
        <div className='flex items-center justify-center h-[85vh]'>
      <section className='flex flex-col w-1/4 items-start -mr-28 '>
      <h1 className='text-2xl font-bolder tracking-wider'>Cash Card & Boost</h1>
      <p className="font-['Mulish'] text-white text-sm">The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
      </section>
    <div className="flex items-center justify-center -ml-40">
      {/* <img src={MobileImage}  alt='mobile image'/>   */}
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
