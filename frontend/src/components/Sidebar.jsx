import React from 'react'
import { GraduationCap, ShieldUser, House, CalendarCheck, BookOpen, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div className='h-lvh flex flex-col justify-between bg-blue-900 text-white'>

            <div className='flex flex-col gap-10 m-1'>

                <div className='flex gap-2 px-4 py-2 font-semibold items-center'>
                    <GraduationCap size={36} />
                    <p className='text-xl'>NewLMS</p>
                </div>
    
                <nav className='flex flex-col gap-5'>
                    <div className='flex gap-2 px-4 py-2 hover:bg-blue-700 rounded-lg'>
                        <House />
                        <NavLink to='/'>Dashboard</NavLink>
                    </div>

                    <div className='flex gap-2 px-4 py-2 hover:bg-blue-700 rounded-lg'>
                        <CalendarCheck />
                        <NavLink to='/attendance'>Attendance</NavLink>
                    </div>

                    <div className='flex gap-2 px-4 py-2 hover:bg-blue-700 rounded-lg'>
                        <BookOpen />
                        <NavLink to='/courses'>Courses</NavLink>
                    </div>

                    <div className='flex gap-2 px-4 py-2 hover:bg-blue-700 rounded-lg'>
                        <Users />
                        <NavLink to='/teachers'>Teachers</NavLink>
                    </div>
                </nav>
            </div>

            <div className='flex px-4 py-2'>
                <ShieldUser />
                <div>
                    <p>Admin Panel</p>
                    <p>v1.0.0</p>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Sidebar