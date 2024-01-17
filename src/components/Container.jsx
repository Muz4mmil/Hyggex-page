import React from 'react'
import Card from './Card'

const Container = () => {
  return (
    <div className=''>
      <div className="path my-6 text-sm text-gray-600 flex items-center gap-2">
        <span class="material-symbols-outlined">
          home
        </span> {' > '} Flashcard {' > '}  Mathemtics <span className='text-blue-up font-bold'>{' > '}  Relation and Function</span>
      </div>

      <h2 className="text-2xl font-montserrat font-bold text-gradient my-8">Relation and Functions ( Mathematics )</h2>


      <div className="tab flex w-max mb-6 gap-5 font-semibold text-gray-600 mx-auto">
        <div className=' px-2 text-blue-up border-b-2 border-blue-up'>Study</div>
        <div className=' px-2'>Quiz</div>
        <div className=' px-2'>Test</div>
        <div className=' px-2'>Game</div>
        <div className=' px-2'>Others</div>
      </div>

      <Card />

      <div className="card-controls flex gap-20 items-center mx-auto my-6 w-max">
        <span class="material-symbols-outlined text-gradient font-bold">
          refresh
        </span>
        <div className='flex gap-8 items-center'>
          <button className='bg-gradient rounded-full grid place-items-center p-1 text-lg'>
            <span class="material-symbols-outlined">
              chevron_left
            </span>
          </button>
          <p className='font-bold'>01/10</p>
          <button className='bg-gradient rounded-full grid place-items-center p-1 text-lg'>
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </button>
        </div>

        <span class="material-symbols-outlined text-gradient font-bold">
          fullscreen
        </span>
      </div>



      <div className='flex justify-between my-20'>
        <div className='flex gap-3'>
          <img src="logo_blue.png" className='h-12 rounded-full shadow-[0_0_20px_rgba(0,0,100,0.3)]' alt="logo" />
          <div>
            <p className="text-[10px]">Published by</p>
            <h1 className='text-2xl text-blue-up font-medium'>Hygge<span className=' font-bold'>X</span></h1>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-gradient rounded-full grid place-items-center p-1 text-lg">
            <span class="material-symbols-outlined font-bold">
              add
            </span>
          </button>
          <p className='text-gradient text-xl font-bold ml-2'>Create Flashcard</p>
        </div>
      </div>
    </div>
  )
}

export default Container