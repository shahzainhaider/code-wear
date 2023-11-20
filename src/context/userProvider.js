'use client'
import { useEffect, useState } from 'react'
import UserContext from './userContext'
// import { toast } from 'react-toastify'

const UserProvider = ({children}) => {
  const [products, setProducts] = useState([])
    const [cart,setCart] = useState({})
    const [subTotal,setSubTotal] = useState()

    useEffect(()=>{
        try {
          if(localStorage.getItem('products')){
            setProducts(JSON.parse(localStorage.getItem('products')))
          }
            const dataLoad = async () => {
                      await getProducts()
                      console.log('data loaded')
                  }
                  dataLoad()
          
            if(localStorage.getItem('cart')){
                setCart(JSON.parse(localStorage.getItem('cart')))
            }
            if(localStorage.getItem('subt')){
                setSubTotal(JSON.parse(localStorage.getItem('subt')))
            }

        } catch (error) {
            localStorage.clear()
        }
    },[])

    const addToCart=async(itemCode,qty,name,price,size,variant)=>{
     
        let newCart = cart;
        if(itemCode in cart){
          newCart[itemCode].qty = newCart[itemCode].qty + qty
        }else{
          newCart[itemCode] = {qty:1,name,price,size,variant}
        }
        setCart(newCart)
        saveCart(newCart)
      
    }
    const removeFromCart=(itemCode,qty,name,price,size,variant)=>{
      let newCart = cart;
      if(itemCode in cart){
        newCart[itemCode].qty = newCart[itemCode].qty - qty
      } 
        if(newCart[itemCode].qty ===0){
        delete newCart[itemCode]
      }
      setCart(newCart)
      saveCart(newCart)
    }

    const saveCart = (newCart) =>{
        localStorage.setItem('cart',JSON.stringify(newCart))
        let keys = Object.keys(cart)
        let subt = 0
        for(let i = 0; i<keys.length;i++){
            subt += cart[keys[i]].qty * cart[keys[i]].price
        }
        setSubTotal(subt)
        localStorage.setItem('subt',JSON.stringify(subt))
    }

    const clearCart = () =>{
        setCart({})
        setSubTotal(0)
        saveCart({})
    }

    //fetching products
    const getProducts = async () =>{
      const res = await fetch('http://localhost:3000/api/products')
      const data =await res.json()
      localStorage.setItem('products',JSON.stringify(data))
      setProducts(data)
    }


  return (
   <UserContext.Provider value={{cart,addToCart,removeFromCart,clearCart,subTotal,getProducts,products}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider
