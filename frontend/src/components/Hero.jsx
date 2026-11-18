import React from 'react'
import { CalendarDays, Users, BookOpen, CircleCheckBig, X, ChartColumnIncreasing, ChevronDown, Circle, Zap, ArrowRight } from 'lucide-react'

function Hero() {
    const currentDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <div>
            <div>
                <div className='flex justify-between items-center border p-2'>
                    <div>
                        <p className='text-2xl font-semibold'>Welcome back, Student!</p>
                        <p className='text-sm font-light'>Here's what's happening in your LMS today.</p>
                    </div>

                    <div className='flex items-center gap-2 p-2 bg-blue-50 rounded-xl text-xs'>
                        <CalendarDays size={15}/>
                        <span>{currentDate}</span>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-5'>

                    <div className='rounded-lg border flex gap-2 p-5 items-start'>
                        <div className='p-1.5 rounded-full bg-blue-100'>
                            <Users className='fill-blue-900'/>
                        </div>
                        <div>
                            <p className='font-bold text-lg'>250</p>
                            <p className='text-xs font-extralight text-gray-600'>Total Teachers</p>
                        </div>
                    </div>

                    <div className='rounded-lg border flex gap-2 p-5 items-start'>
                        <div className='p-1.5 rounded-full bg-purple-100'>
                            <BookOpen className='fill-purple-600'/>
                        </div>
                        <div>
                            <p className='font-bold text-lg'>12</p>
                            <p className='text-xs font-extralight text-gray-600'>Total Courses</p>
                        </div>
                    </div>

                    <div className='rounded-lg border flex gap-2 p-5 items-start'>
                        <div className='p-1.5 rounded-full bg-green-100'>
                            <CircleCheckBig className='fill-green-900' color='#FFFFFF' />
                        </div>
                        <div>
                            <p className='font-bold text-lg'>215</p>
                            <p className='text-xs font-extralight text-gray-600'>Total Attendance</p>
                        </div>
                    </div>

                    <div className='rounded-lg border flex gap-2 p-5 items-start'>
                        <div className='p-1.5 rounded-full bg-red-200'>
                            <X color='#FF0000'/>
                        </div>
                        <div>
                            <p className='font-bold text-lg'>250</p>
                            <p className='text-xs font-extralight text-gray-600'>Total Teachers</p>
                        </div>
                    </div>

                    <div className='rounded-lg border text-center col-span-2'>
                        <div className='flex justify-between items-center border m-1'>
                            <div className='flex gap-1'>
                                <ChartColumnIncreasing color='#00008B' size={28}/>
                                <span className='font-semibold'>Attendance Overview</span>
                            </div>

                            <div className='flex gap-1 border rounded-lg border-gray-400 p-1'>
                                <span className='text-xs'>This Week</span>
                                <ChevronDown size={18}/>
                            </div>
                        </div>

                        <div className='flex border justify-between items-center p-10'>
                            <div>
                                86% present
                            </div>

                            <div className='grid gap-2'>
                                <div className='flex gap-10 justify-between items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <Circle size={15} color='#006400' fill='#006400'/>
                                        <span className='text-sm'>Present</span>
                                    </div>

                                    <div className='text-sm'>86%</div>
                                </div>

                                <div className='flex gap-10 justify-between items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <Circle size={15} color='#8B0000' fill='#8B0000' />
                                        <span className='text-sm'>Absent</span>
                                    </div>

                                    <div className='text-sm'>14%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-lg border text-center col-span-2 grid gap-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-1'>
                                <Zap color='#00008B' fill='#00008B'/>
                                <p className='font-semibold'>Recent Activity</p>
                            </div>

                            <div className='flex items-center gap-1'>
                                <p className='text-xs text-blue-900'>View All</p>
                                <ArrowRight size={14} color='#00008B'/>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div className='h-8 w-8 bg-green-800 rounded-full'>
                                    <img src="" alt="" />
                                </div>
                                <p className='text-sm'>Rahul Sharma marked</p>
                                <p className='bg-green-300 px-1.5 py-0.5 text-green-800 rounded-xl text-sm'>Present</p>
                            </div>

                            <div className='text-xs font-light text-gray-600'>
                                Today, 10:24A M
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div className='h-8 w-8 bg-green-800 rounded-full'>
                                    <img src="" alt="" />
                                </div>
                                <p className='text-sm'>Aman Verma marked</p>
                                <p className='bg-red-200 px-1.5 py-0.5 text-red-800 rounded-xl text-sm'>Absent</p>
                            </div>

                            <div className='text-xs font-light text-gray-600'>
                                Today, 10:24A M
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div className='h-8 w-8 bg-green-800 rounded-full'>
                                    <img src="" alt="" />
                                </div>
                                <p className='text-sm'>Priya Singh marked</p>
                                <p className='bg-green-300 px-1.5 py-0.5 text-green-800 rounded-xl text-sm'>Present</p>
                            </div>

                            <div className='text-xs font-light text-gray-600'>
                                Today, 10:24A M
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero