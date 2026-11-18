import React from 'react'
import { X } from 'lucide-react'

function Login() {
  return (
    <>
      <form action="">
        <div className='rounded-2xl p-15 w-120 bg-blue-50 grid gap-10 m-auto'>
          <div className='flex justify-between'>
            <p className='text-2xl'>Login</p>
            <X />
          </div>

          <div className='grid gap-2'>
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="" className='border border-gray-500 outline-blue-100 w-full rounded-2xl h-10' />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" className='border  border-gray-500 outline-blue-100 w-full rounded-2xl h-10' />
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <input type="checkbox" name="" id="" />
              <span>Rememer me</span>
            </div>

            <p className='text-red-500'>Forgot Password?</p>
          </div>


          <button type="submit" className='border bg-blue-500 text-white rounded-2xl p-2 hover:bg-blue-600'>Submit</button>

        </div>

      </form>

    </>
  )
}

export default Login