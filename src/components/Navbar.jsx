"use client";
import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext, useRef } from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from "react-icons/ai";

const Navbar = () => {
  const context = useContext(UserContext)
  const { cart, clearCart, removeFromCart, addToCart, subTotal } = context
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("-right-[50%]")) {
      ref.current.classList.remove("-right-[50%]");
      ref.current.classList.add("right-0");
    } else {
      ref.current.classList.remove("right-0");
      ref.current.classList.add("-right-[50%]");
    }
  };


  return (
    <>
      <nav className="sticky top-0 z-20  ">
        <div className="flex px-8 text-white justify-between shadow-blue-300 drop-shadow-xl shadow-lg py-4 items-center bg-blue-500">
          <Link href={"#!"} className="text-3xl font-semibold">
            E-Commerce
          </Link>
          <div className="">
            <ul className="flex gap-6 items-center">
              <Link
                rel="preload"
                href={"/"}
                className="hover:scale-110 active:scale-90"
              >
                Home
              </Link>
              
              <Link
                rel="preload"
                href={"/tshirts"}
                className="hover:scale-110 active:scale-90"
              >
                Tshirts
              </Link>
              <Link
                rel="preload"
                href={"/mugs"}
                className="hover:scale-110 active:scale-90"
              >
                Mug
              </Link>
              <Link
                rel="preload"
                href={"/about"}
                className="hover:scale-110 active:scale-90"
              >
                About
              </Link>
              <Link
                rel="preload"
                href={"/contact"}
                className="hover:scale-110 active:scale-90"
              >
                Contact
              </Link>
              
            </ul>
          </div>

          <div className="">
            <ul className="flex gap-4 items-center">
              <Link
                rel="preload"
                href={"/login"}
                className="hover:scale-110 active:scale-90"
              >
                Login
              </Link>
              <li className="h-6 w-[2px] bg-black/20"></li>
              <Link
                rel="preload"
                href={"/signup"}
                className="hover:scale-110 active:scale-90"
              >
                Signup
              </Link>
            </ul>
          </div>
          <div className="">
            <button
              onClick={toggleCart}
              className="px-3 relative py-2 rounded-lg hover:scale-110 duration-200"
            >
              <AiOutlineShoppingCart className="text-2xl" />
              {Object.keys(cart).length !==0 &&<span className="absolute top-0 -right-2 rounded-full h-6 w-6 text-center bg-red-500 ">{Object.keys(cart).length}</span>}
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={ref}
        className="fixed z-30 select-none -right-[50%] duration-300 h-full px-4 py-8 bg-blue-200 top"
      >
        <AiFillCloseCircle
          onClick={toggleCart}
          className="absolute cursor-pointer hover:text-blue-700 text-2xl text-blue-500 top-4 right-4"
        />
        <h2 className="text-center text-2xl font-semibold">Shopping Cart</h2>
        <ol className="list-decimal my-4 pl-4 flex flex-col gap-8">
          {Object.keys(cart).length == 0 ? <div className="">your cart is empty!</div> : Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="flex items-center gap-2">
                <div className=" text-lg ">{cart[k].name}</div>
                <div className="">
                  <span>({cart[k].variant} / {cart[k].size})</span>
                  </div>
                <div className="flex justify-center items-center ml-auto gap-1">
                  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, 2, 3, 4, 5) }} className="text-2xl cursor-pointer hover:text-blue-700 text-blue-500" />
                  <span className="text-xl w-6 text-center font-semibold">{cart[k].qty}</span>
                  <AiFillPlusCircle onClick={() => { addToCart(k,1, 1,1 ,1 ) }} className="text-2xl cursor-pointer hover:text-blue-700 text-blue-500" />
                </div>
              </div>
            </li>
          })}
        </ol>
        {Object.keys(cart).length > 0 &&<div className="w-full h-[1px] mt-20 bg-gray-500"></div>}
        {Object.keys(cart).length > 0 && <div className="flex justify-around">
          <span>Total</span>
          <span>{subTotal}/-</span>
        </div>}
        <div className="  flex justify-center items-center gap-4">
          <Link href={'/checkout'} className="flex justify-center items-center text-center mx-auto px-3 py-2 gap-2 bg-blue-500 hover:bg-blue-700 mt-10 text-white rounded-lg" ><AiOutlineShoppingCart className="text-white text-2xl" />Checkout</Link>
          <button onClick={clearCart} className="text-center mx-auto px-3 py-2 gap-2 bg-blue-500 hover:bg-blue-700 mt-10 text-white rounded-lg"> Clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
