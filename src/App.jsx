import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import FAQ from './components/FAQ'
function App() {

  return (
    <div className='w-[80%] mx-auto font-inter'>
      <Header />
      <Container />
      <FAQ />
    </div>
  )
}

export default App