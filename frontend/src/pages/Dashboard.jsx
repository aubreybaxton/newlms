import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuickAccess from '../components/QuickAccess'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <div className='flex'>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5 h-h-lvh'>
        <Navbar />
        <Hero />
        <QuickAccess />
      </div>
    </div>
  )
}

export default Dashboard