'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import tshirt from '../../../public/tshirt.jpg'
import Link from 'next/link'
import UserContext from '@/context/userContext'

const page = () => {
    const context = useContext(UserContext)
    const { products } = context


    const allShirts = products.filter((item) => {
        return item.category === 'tshirt'
    })

    let allVariants = {}

    for (let item of allShirts) {
        if (item.title in allVariants) {
            if (!allVariants[item.title].color.includes(item.color) && item.avaiableQty > 0) {
                allVariants[item.title].color.push(item.color)
            }
            if (!allVariants[item.title].size.includes(item.size) && item.avaiableQty > 0) {
                allVariants[item.title].size.push(item.size);
            }

        } else {
            allVariants[item.title] = JSON.parse(JSON.stringify(item))
            if (item.avaiableQty > 0) {
                allVariants[item.title].color = [item.color]
                allVariants[item.title].size = [item.size]
            }
        }
    }

    return (
        <>
            <div className="main mt-16 mb-8 px-8">
                <h1 className='text-4xl font-semibold text-center my-6 border-b border-slate-600 w-40 mx-auto'>T-Shirts</h1>
                <div className="card-container flex flex-wrap justify-center items-center gap-4 max-w-7xl mx-auto">
                    {
                        Object.keys(allVariants).map((item, id) => {
                            return (
                                <Link key={id} href={`/product/${allVariants[item].slug}`} className='card relative w-full md:w-[24%]  hover:shadow-blue-300 shadow-lg hover:scale-105 duration-300' >
                                
                                    <Image className='w-full p-6 ' src={tshirt} alt='tshirt' width='300' height='300' />
                                    <div className="details p-2">
                                        <p>{allVariants[item].category}</p>
                                        <p>{allVariants[item].title}</p>
                                        <p>{allVariants[item].price}</p>
                                        <div className="flex gap-2">
                                        {
                                                allVariants[item].size.map((size,id)=>{
                                                    return(<div key={id} className='border border-gray-600 p-1'>{size}</div>)
                                                })
                                            }
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {
                                                allVariants[item].color.map((color,id)=>{
                                                    return<button key={id} className={`border-2 border-gray-300 ml-1 bg-${color}-500 rounded-full w-6 h-6 focus:outline-none`}></button>
                                                })
                                            }
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default page
