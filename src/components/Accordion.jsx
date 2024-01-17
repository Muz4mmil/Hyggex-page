// import React from 'react'


// const Accordions = () => {

//     return (
//         <div>
//             {/* {accData.map((accord)=>{ */}
//             <div className='border rounded-xl'>
//                 <h4 className="heading flex justify-between px-4 py-3 border h-12" onClick={ (e)=> e.target.classList.toggle('h-40')}>
//                     heading1 <span className="material-symbols-outlined">expand_more</span></h4>
//                 <p className='py-3 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nesciunt accusantium repellat tenetur, fuga quam, expedita enim veritatis corporis nemo aliquid quo accusamus deleniti. Enim!</p>
//             </div>
//             {/* })} */}
//         </div>
//     )
// }

// export default Accordions


import React, { useState } from 'react';

const Accordion = ({ heading, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[700px] text-sm">
      <div className="mb-4 border rounded-xl border-blue-down">
        <button
          className="w-full flex justify-between items-center py-2 px-4 font-semibold"
          onClick={toggleAccordion}
        >
          {heading} <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
        </button>
        <div
          className={`accordion-content transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'h-20' : 'h-0'
            }`}
        >
          <div className={`px-4 pb-3 text-gray-800 transition-all duration-1000 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
            {data}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

