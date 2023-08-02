import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Payments from './components/Payments/Payments'
import Banking from './components/Banking/Banking'
import CashCard from './components/CashCard/CashCard'
import Investing from './components/Investing/Investing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Payments/>
    <Banking/>
    <CashCard/>
    <Investing/>
    </>
  )
}

export default App
