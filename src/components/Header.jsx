import React from 'react'

const Header = () => {
  return (
    <header className='header flex justify-between mx-auto items-center'>
      <div className="brand flex items-center">
        <img src="logo_blue.png" className=' w-20' alt="logo" />
        <h1 className='text-blue-up text-3xl'>Hygge<span className='font-black'>X</span></h1>
      </div>

      <div className="nav flex gap-8 font-medium items-center">
        <a href="#">Home</a>
        <a href="#">Flashcard</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>

        <button className="login bg-gradient py-2 px-8 rounded-3xl">Login</button>
      </div>
    </header>
  )
}

export default Header