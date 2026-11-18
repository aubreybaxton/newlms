import React from 'react'
import { CalendarDays, ChevronRight, BookOpen, Users } from 'lucide-react'

function QuickAccess() {
  return (
    <div>
        <div className='border grid gap-2'>
            <p className='font-semibold'>Quick Access</p>

            <div className='flex justify-start border gap-5'>
                <div className='flex justify-between items-center gap-2 border bg-blue-50 rounded-md border-gray-300 p-1'>
                    <CalendarDays color='#00008B'/>
                    <span className='text-blue-900 text-sm'>View Attendance</span>
                    <ChevronRight color='#00008B'/>
                </div>

                <div className='flex justify-between items-center gap-2 border bg-blue-50 rounded-md border-gray-300 p-1'>
                    <BookOpen color='#00008B'/>
                    <span className='text-blue-900 text-sm'>View Attendance</span>
                    <ChevronRight color='#00008B'/>
                </div>

                <div className='flex justify-between items-center gap-2 border bg-blue-50 rounded-md border-gray-300 p-1'>
                    <Users color='#00008B'/>
                    <span className='text-blue-900 text-sm'>View Attendance</span>
                    <ChevronRight color='#00008B'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickAccess