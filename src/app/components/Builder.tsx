import React from 'react'

function Builder() {
  return (
    <div className='mt-20 relative'>
  <img src="./images/Team.webp" alt="Team" className="w-full" />
  <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
    <h1 className="text-white text-3xl font-bold">Find a builder near you</h1>
    <h2 className="text-white text-lg">Explore a list of builders in your area</h2>
    
    <div className="p-20 flex items-center w-full ">
            
  
    <select className="bg-white py-2.5 px-4 w-2/5 border-r-3">
    <option disabled selected hidden aria-placeholder="Project Type" className='text-gray-200'>
  Project Type
</option>

  <option className="hover:bg-gray-200">Option 1</option>
  <option className="hover:bg-gray-200">Option 2</option>
  <option className="hover:bg-gray-200">Option 3</option>
</select>



    
    <input
      type="text"
      placeholder="Search Your Build Address"
      className=" py-2 px-4  w-full"
    />
             
  
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-1/5">
                Search
             </button>
    </div>

  </div>
</div>

  )
}

export default Builder
