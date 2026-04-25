import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InstTable from './components/InstTable'
import Partner from './components/Partner'
import Footer from './components/Footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section class="main">
        <Hero />
        <InstTable />
        <Partner />
      </section>
      <Footer />
    </>
  )
}

export default App
