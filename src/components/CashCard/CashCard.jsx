import React from 'react'
import BoostPhone from '/src/assets/CashCard/boost-phone.png';
import BoostBurger from '/src/assets/CashCard/boost-burger.png';
import BoostCard from '/src/assets/CashCard/boost-card.png';
import BoostCoffee from '/src/assets/CashCard/boost-coffee.png';
import BoostHand from '/src/assets/CashCard/boost-hand.png';
import BoostShoe from '/src/assets/CashCard/boost-shoe.png';
import BoostStairs1 from '/src/assets/CashCard/boost-stairs-1.png';
import BoostStairs2 from '/src/assets/CashCard/boost-stairs-2.png';

export default function CashCard() {
  return (
    <div id='cashcard'>
      
    <div className='flex flex-col md:flex-row  items-center sm:items-start md:items-center justify-center md:justify-center w-full md:w-[60%] ml-0 sm:ml-[10%] h-[100vh]'>
      <section className='flex flex-col w-1/2 lg:w-1/3 items-start z-20'>
      <h1 className='text-2xl md:text-3xl font-bolder tracking-wider'>Cash Card & Boost</h1>
      <p className="font-['Mulish'] text-xs md:text-base text-white leading-6">The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
      </section>
    <div className="flex items-center justify-center">
      <img src={BoostPhone} className="h-[30vh] md:h-[40vh] lg:h-max z-20"  alt='boost phone image'/>  
    </div>
    </div>

    <div className="flex">
      <img src={BoostStairs1} className='absolute bottom-0 right-0 lg:h-screen z-0' alt='stairs1'/>
      <img src={BoostStairs2} className='absolute bottom-0 left-0 z-0 h-[20%] md:h-[40%] lg:h-max' alt='stairs2'/>
    </div>
    <div>
      <img src={BoostBurger} className='absolute h-[4%] md:h-[6%] lg:h-max z-10 bottom-[15%] right-[5%] md:bottom-[15%] md:right-[95%]  lg:bottom-[35%] lg:right-[25%]' alt='burger'/>
      <img src={BoostCard} className=' absolute  h-[4%] md:h-[6%] lg:h-max z-10 bottom-[5%] right-[70%] md:right-[10%] md:top-[50%] lg:top-[25%] lg:right-[20%]'alt='card'/>
      <img src={BoostCoffee} className='absolute h-[4%] md:h-[6%] lg:h-max z-10 bottom-[28%] right-[25%] md:right-[70%] md:bottom-[5%] lg:bottom-[15%] lg:right-[20%]'  alt='coffee'/>
      <img src={BoostHand} className='absolute  h-[4%] md:h-[6%] lg:h-max z-10 right-[80%] top-[60%] md:top-[90%] md:right-[20%] lg:top-[10%] lg:right-[12%]' alt='hand'/>
      <img src={BoostShoe} className='absolute  h-[4%] md:h-[6%] lg:h-max z-10 right-[60%] bottom-[80%] md:bottom-[20%] lg:bottom-[35%] lg:right-[1%]' alt='shoe'/>
    </div>
  </div>
  )
}
