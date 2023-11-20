import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a> */}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="name" name="name" id="name" className="w-full outline-none border border-slate-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 rounded-lg px-2 duration-300 py-2 tracking-wider text-lg" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="email" className="w-full outline-none border border-slate-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 rounded-lg px-2 duration-300 py-2 tracking-wider text-lg" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="w-full outline-none border border-slate-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 rounded-lg px-2 duration-300 py-2 tracking-wider text-lg" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-700 duration-300 text-white">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link href={'/login'} className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
      
    </>
  )
}

export default page
