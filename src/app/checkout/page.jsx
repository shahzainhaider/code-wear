'use client'
import UserContext from '@/context/userContext'
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import React, { useContext } from 'react'
import Link from 'next/link';

const page = () => {
  const context = useContext(UserContext)
  const {cart,subTotal ,addToCart,removeFromCart} = context
  return (
    <>
    <div className="max-w-7xl mx-auto my-10">
      <h1 className='text-4xl font-semibold text-center'>Checkout</h1>
      <h2 className='text-2xl font-semibold tracking-wider' >Delivery Details:</h2>
      <form>
        <div className="flex my-4">
          <div className="w-1/2 px-6">
            <label htmlFor="name">Name:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="name" id="name" />
          </div>
          <div className="w-1/2 px-6">
            <label htmlFor="email">Email:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="email" id="email" />
          </div>
        </div>
        <div className="px-6  my-4">
          <label htmlFor="address">Address:</label>
          <textarea className='w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg border border-slate-400' name="address" id="address" cols="30" rows="4"></textarea>
        </div>
        <div className="flex my-4">
          <div className="w-1/2 px-6">
            <label htmlFor="phone">Phone:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="phone" id="phone" />
          </div>
          <div className="w-1/2 px-6">
            <label htmlFor="city">City:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="city" id="city" />
          </div>
        </div>

        <div className="flex my-4">
          <div className="w-1/2 px-6">
            <label htmlFor="state">State:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="state" id="state" />
          </div>

          <div className="w-1/2 px-6">
            <label htmlFor="pincode">Pin code:</label>
            <input className='w-full rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-slate-400 px-2 py-3' type="text" name="pincode" id="pincode" />
          </div>
        </div>

      </form>
      <h2 className='text-2xl font-semibold tracking-wider my-4'>Review & Pay:</h2>


      <div className="review   select-none py-4 px-4 mx-6 bg-blue-300 rounded-lg  ">
      <ol className="list-decimal my-4 pl-4 flex flex-col gap-8">
          {Object.keys(cart).length == 0 ? <div className="">your cart is empty!</div> : Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="flex items-center gap-2">
                <div className='name   text-xl font-medium w-60' >{cart[k].name}</div>
                <div className="">{cart[k].size}</div>
                <div className="flex justify-center items-center ml-10  gap-1">
                  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, 2, 3, 4, 5) }} className="text-2xl cursor-pointer hover:text-blue-700 text-blue-500" />
                  <span className="text-xl w-6 text-center font-semibold">{cart[k].qty}</span>
                  <AiFillPlusCircle onClick={() => { addToCart(k, 1, 2, 3, 4, 5) }} className="text-2xl cursor-pointer hover:text-blue-700 text-blue-500" />
                </div>
              </div>
            </li>
          })}
        </ol>

        {Object.keys(cart).length !==0 &&<div className="total  flex justify-between border-t  py-4 px-4 border-slate-400">
          <div className="text-xl">Total:  <span>{subTotal}</span>/-</div>
          <div className="btn">
            <Link href={'/order'} className='text-center mx-auto px-3 py-2 gap-2 duration-300 bg-blue-500 hover:bg-blue-700 text-white rounded-lg'>Pay Now</Link>
          </div>
        </div>}
      </div>

    </div>
      
    </>
  )
}

export default page
