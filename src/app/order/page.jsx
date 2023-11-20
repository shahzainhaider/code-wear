import React from 'react'
import tshirt from '../../../public/tshirt.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h2 className='text-xl font-semibold tracking-wider'>Order Id: #4365564</h2>
        <div className="flex mb-4">
          <a className="flex-grow  border-b-2 text-center  py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 text-center border-gray-300 py-2 text-lg px-1">Qauntity</a>
          <a className="flex-grow border-b-2 text-center border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>
        <div className="flex justify-between border-gray-200 py-2">
          <span className="text-gray-500">wear the code</span>
          <span className="text-gray-500">1</span>
          <span className=" text-gray-900">500</span>
        </div>
        <div className="flex justify-between border-gray-200 py-2">
          <span className="text-gray-500">wear the code</span>
          <span className="text-gray-500">1</span>
          <span className=" text-gray-900">500</span>
        </div>
        <div className="flex mt-6">
          <span className="title-font font-medium text-2xl text-gray-900">Total: $58.00</span>
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Track Order</button>
          
        </div>
      </div>
      <Image width='400' height='400' alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover px-10 rounded" src={tshirt}/>
    </div>
  </div>
</section>
      
    </>
  )
}

export default page
