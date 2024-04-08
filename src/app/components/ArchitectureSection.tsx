import React from 'react'

function ArchitectureSection() {
  return (
    <div className="flex justify-center w-full mt-20 ">

      <div className=' flex justify-center w-3/4'>
        <div className='w-1/2 bg-white p-10'>
        <h2 className="font-bold font-montserrat text-lg leading-5 text-gray-600">
               Make Modern with
            </h2>


            <h1 className="font-bold font-montserrat text-4xl leading-10 text-black mt-5">
                 Hardie™ Architectural Collection
             </h1>

             <p className="text-gray-700 leading-6 mt-5">
               Combining our existing portfolio with fresh textures and profiles, Hardie™ Architectural Collection offers curated combinations that help you mix and match products. The result? Unmissable street appeal. New to the suite is Hardie™ Brushed Concrete Cladding, an embedded texture panel that’s perfect for creating modern minimalist facades with interest. For expert tips and dream home inspiration, explore the Hardie™ Architectural Collection interactive magazine.
                 </p>
                 <h2 className="mt-5 font-semibold font-montserrat text-lg uppercase leading-10 text-green-500 hover:underline cursor-pointer">
                      VIEW INTERACTIVE MEGAZINE
                   </h2>


      </div>
      <div className='w-1/2'>
          <img src="./images/Jameshardie.webp" alt="Farm House" />
      </div>
      </div>
    </div>
  )
}

export default ArchitectureSection
