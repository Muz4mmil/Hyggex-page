import React from 'react'
import Accordion from './Accordion'


const accData = [
  {
    heading: 'Can education flashcards be used for all age groups?',
    data: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
  },
  {
    heading: 'How do education flashcards work?',
    data: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
  },
  {
    heading: 'Can education flashcards be used for test preparation?',
    data: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
  },
]


const FAQ = () => {
  return (
    <div className='my-32'>
      <h1 className="text-4xl text-gradient font-bold">FAQ</h1>

      <div className="acc-container h-[300px] my-10">
        {
          accData.map((accord) => [
            <Accordion heading={accord.heading} data={accord.data} />

          ])
        }
      </div>
    </div>
  )
}

export default FAQ