'use client'
import React, { useContext, useEffect, useState } from 'react'
import tshirt from '../../../../public/tshirt.jpg'
import Image from 'next/image'
import UserContext from '@/context/userContext'
import { toast } from 'react-toastify'

const page = ({ params }) => {
  const { productId } = params
  const context = useContext(UserContext)
  const {addToCart,products} = context
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const [color, setColor] = useState('color')
  const [size, setSize] = useState('size')

  let product = products.filter((item)=>{
    return item.slug === productId
    
  })

  let variants = products.filter((item)=>{
    return item.title === product[0].title

  })


  // creating object:{color:{
  // size:{
  //   avaiableQty,slug}
  //  }
  // }
  let colorSizeSlug = {}
  for(let item of variants){
    if(item.color in colorSizeSlug){
      colorSizeSlug[item.color][item.size] = {avaiableQty:item.avaiableQty, slug : item.slug}

    }else{
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = {avaiableQty:item.avaiableQty, slug : item.slug}
    }
  }


  const setColorSize= (color)=>{
    let size = Array.from(Object.keys(colorSizeSlug[color]))
    setColor(color)
    setSize(size[0])
  }

  //add to cart
  const addToCartBtn =(qty,name,price)=>{
    if (size === 'size' && color ==='color') {
      toast.error('Select item Color and Size !!')
      return true
    } else {
      console.log('else')
      addToCart(colorSizeSlug[color][size].slug,qty,name,price,size,color)
      console.log(color)
      toast.success(`item added with color ${color} and Size ${size}`)
    }
  }


  const checkPin = async () => {
    const res = await fetch(`https://code-wear.vercel.app/api/pincodes`)
    const pinJson = await res.json()
    if (pinJson.includes(parseInt(pin))) {
      setService(true)
    } else {
      setService(false)
    }
  }
console.log(colorSizeSlug);
  return (
    <>
      {product.map((item,id)=>{
        return<section key={id} className="text-gray-600 body-font overflow-hidden">
          <div className="hidden bg-purple-500 bg-green-500 bg-yellow-500 bg-black-500"></div>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image priority alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-10 object-cover object-center rounded" src={tshirt} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <div className="flex items-center gap-4">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
              <span className='text-xl tracking-wider'>{color}  /  {size}</span>
              </div> 
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{item.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {
                     Object.keys(colorSizeSlug).map((item,id)=>{
                      return <button onClick={()=>setColorSize(item)} key={id} className={`border-2 border-gray-300 focus:scale-110 focus:ring-4 focus:ring-${item}-300 focus:border-${item}-500 outline-none ml-2 bg-${item}-500 rounded-full w-6 h-6 focus:outline-none`}>
                      </button>
                    })
                  }
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size}  onChange={(e)=>{setSize(e.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                      <option  disabled>select size</option>
                      {
                       colorSizeSlug[color] && Object.keys(colorSizeSlug[color]).map((item,id)=>{
                          return <option key={id} value={item}>{item}</option>
                        })
                      }
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="qty ml-6">
                  {
                   colorSizeSlug[color] && <span >Avaiavle Quantity: {colorSizeSlug[color][size].avaiableQty}</span>
                  }
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{item.price}</span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded">Buy Now</button>
                <button onClick={()=>{addToCartBtn(1,item.title,item.price)}} className="flex ml-4 text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded">Add to Cart</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pincode flex mt-4 mb-2">
                <input onChange={(e) => { setPin(e.target.value) }} className='px-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 border border-gray-200 outline-none rounded-md text-lg tracking-wide' type="text" name="" id="" placeholder='Enter Pincode' />
                <button onClick={checkPin} className='flex ml-4 text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded' >Check</button>
              </div>
              {(!service && service !== undefined) &&
                <p className="text-sm text-red-600">
                  sorry service is not avaible.
                </p>
              }
              {(service && service !== undefined) &&
                <p className="text-sm text-green-600">
                  Ready for checkout.
                </p>
              }
            </div>
          </div>
        </div>
      </section>
      })
}
    </>
  )
}

export default page






// MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit