import React from 'react'
import BankingPhone from '/src/assets/Banking/banking-phone.png';
import BankingColumn from '/src/assets/Banking/banking-column.png';
import BankingCubes from '/src/assets/Banking/banking-cubes.png';
import BankingHole from '/src/assets/Banking/banking-hole.png';
import BankingMonster from '/src/assets/Banking/banking-monster.png';
import BankingRamp1 from '/src/assets/Banking/banking-ramp-1.png';
import BankingRamp2 from '/src/assets/Banking/banking-ramp-2.png';
import BankingStairs1 from '/src/assets/Banking/banking-stairs-1.png';
import BankingStairs2 from '/src/assets/Banking/banking-stairs-2.png';
import BankingTrack1 from '/src/assets/Banking/banking-track-1.png';
import BankingTrack2 from '/src/assets/Banking/banking-track-2.png';
import BankingTube from '/src/assets/Banking/banking-tube.png';
export default function Banking() {
  return (
    <div id='banking'>
    <div className='flex items-center justify-start w-[60%] ml-[10%] h-[100vh]'>
      <section className='flex flex-col w-1/2 items-start z-20'>
      <h1 className='text-2xl md:text-3xl font-bolder tracking-wider'>Banking</h1>
      <p className="font-['Mulish'] text-xs md:text-base text-black  leading-6">Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
and account number.</p>
      </section>
    <div className="flex items-center justify-center">
      <img src={BankingPhone} className="h-[40vh] z-10"  alt='banking phone image'/>  
    </div>
    </div>
    <div className=" flex">
      <img src={BankingColumn} className='absolute top-[10%] left-[5%] z-10' alt='column'/>
      <img src={BankingCubes} className='absolute bottom-[10%] end-[25%]'alt='cubes'/>
      <img src={BankingHole} className='absolute top-0 left-0' alt='hole1'/>
      <img src={BankingHole} className='absolute -bottom-[17%] right-[15%] z-0' alt='hole2'/>
      <img src={BankingMonster} className='absolute end-[5%] bottom-[5%] z-10' alt='monster'/>
      <img src={BankingRamp1} className='absolute top-[35%] right-[25%] z-0' alt='ramp1'/>
      <img src={BankingRamp2} className='absolute start-[15%] bottom-[5%] z-10' alt='ramp2'/>
      <img src={BankingStairs1} className='absolute right-[5%] top-[40%] z-0' alt='stairs1'/>
      <img src={BankingStairs2} className='absolute bottom-[5%] left-[5%] right-0' alt='stairs2'/>
      <img src={BankingTrack1} className='absolute top-[20%] start-[26%] z-0' alt='track1'/>
      <img src={BankingTrack2} className='absolute top-[5%] right-[15%] h-1/4 z-0' alt='track2'/>
      <img src={BankingTube} className='absolute bottom-0 left-[40%] h-[10vh]  z-0' alt='tube'/>
    </div>
  </div>
  )
}
