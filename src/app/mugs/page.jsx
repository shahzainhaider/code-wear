'use client'
import Image from 'next/image'
import React from 'react'
import tshirt from '../../../public/mug.webp'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="main my-8 px-8">
        <div className="card-container flex flex-wrap  justify-center items-center gap-8 max-w-7xl mx-auto">
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
            <Link href={'/product/mug'} className='card rounded-md overflow-hidden w-full md:w-[23%] shadow-lg hover:scale-105 duration-300' >
                <Image className='w-full ' src={tshirt} alt='tshirt' width={''} height={''} />
                <div className="details p-2">
                <p>Catogery</p>
                <p>name</p>
                <p>price</p>
                </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default page
