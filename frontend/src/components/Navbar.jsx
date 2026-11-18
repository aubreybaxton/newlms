import React from 'react'
import { Menu, Bell, ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <>
        <div className='border flex justify-between items-center p-2'>

            <div>
                <Menu />
            </div>

            <div className='flex justify-between items-center gap-5'>
                <div className='relative'>
                    <div>
                        <Bell />
                    </div>
                    <div className='border bg-red-500 text-white text-center rounded-full h-5 w-5 p-0.5 text-xs absolute bottom-3 left-3'>4</div>
                </div>

                <div className='flex justify-between gap-2 items-center'>
                    <div className='p-1 rounded-full h-8 w-8 text-center bg-black text-white'>S</div>
                    <span>Student</span>
                    <ChevronDown />
                </div>
            </div>

        </div>
    </>
  )
}

export default Navbar