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
    <div className='flex items-center justify-start w-[60%] ml-[10%] h-[100vh]'>
      <section className='flex flex-col w-1/2 items-start z-20'>
      <h1 className='text-3xl font-bolder tracking-wider'>Cash Card & Boost</h1>
      <p className="font-['Mulish'] text-white leading-6">The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
      </section>
    <div className="flex items-center justify-center">
      <img src={BoostPhone} className=" z-10"  alt='boost phone image'/>  
    </div>
    </div>
    <div className=" flex">
      <img src={BoostBurger} className='absolute top-[10%] left-[5%] z-10' alt='burger'/>
      <img src={BoostCard} className='absolute top-[28%] right-[20%] z-10'alt='card'/>
      <img src={BoostCoffee} className='absolute bottom-[15%] right-[20%] z-10'  alt='coffee'/>
      <img src={BoostHand} className='absolute top-[12%] right-[13%] z-10' alt='hand'/>
      <img src={BoostShoe} className='absolute end-[5%] bottom-[5%] z-10' alt='shoe'/>
      <img src={BoostStairs1} className='absolute bottom-0 right-0 h-screen z-0' alt='stairs1'/>
      <img src={BoostStairs2} className='absolute left-0 bottom-0 z-0' alt='stairs2'/>
      </div>
  </div>
  )
}
