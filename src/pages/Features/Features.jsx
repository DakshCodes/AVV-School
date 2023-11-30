import React from 'react'
import "../../App.css"
import { MdGroups } from "react-icons/md"
import { PiBooksFill } from "react-icons/pi"
import { FaMap } from "react-icons/fa"

const data = [
    {
        id: "1",
        title: "Social Activities",
        content: "To Teach Student to care for the environment and the surrounding community",
        icon: MdGroups,
    },
    {
        id: "1",
        title: "Books and Stationery",
        content: "In order for student to remain well faciliated , we provide stationery in schools ",
        icon: PiBooksFill,
    },
    {
        id: "3",
        title: "Best Education Plans",
        content: "Have a long term plan to make student more focused on determining their future",
        icon: FaMap,
    },
]

const Features = () => {
    return (
        <>
            <main className=' border-green-500 p-[30px] h-fit my-[4rem]'>

                <header className=' text-center  '>
                    <h1 className='text-[4rem]'> <span className='font-bold'>OUR </span> <span className='font-round font-bold text-[#7600FF]'>  FEATURES</span></h1>
                </header>

                <article className=' grid grid-cols-1 lg:grid-cols-3  py-2 gap-8 mt-[2rem] border-black'>
                    {data.map((item, index) => {
                        return (
                            <>
                                <div key={item.id} className=' border-black'>
                                    <div className='bg-[#7600FF] text-white p-4 text-center font-round text-2xl rounded-lg'>
                                        {item.title}
                                    </div>

                                    <div className='flex items-center justify-between px-[1.3rem]'>
                                        <div className='w-[0.2rem] h-[4rem] bg-[#000]'></div>
                                        <div className='w-[0.2rem] h-[4rem] bg-[#000]'></div>
                                    </div>

                                    <div className='font-semibold  p-4 py-8 text-justify border-2 rounded-lg relative border-[#7600FF] '>
                                        <div className='bg-[#7600FF] rounded-full absolute top-1 w-[0.51rem] h-[0.51rem]'></div>
                                        <div className='bg-[#7600FF] rounded-full absolute top-1 right-[1rem] w-[0.51rem] h-[0.51rem]'></div>
                                        <div className='bg-[#7600FF] w-fit p-4 mb-4 rounded-lg'> {<item.icon className='text-3xl text-white' />}</div>
                                        <div>{item.content}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </article>
            </main>
        </>
    )
}

export default Features
