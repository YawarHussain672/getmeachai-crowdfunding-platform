'use client'
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
 

  return (
    <nav className='bg-black/80 flex text-white justify-between items-center px-4 md:h-13 fixed top-0 z-1 w-full flex-col md:flex-row'>
       <div>
          <Link className="logo font-bold text-lg text-yellow-200 flex justify-center items-center" href='/'>
          <img className='invertImg' src="tea.gif" width={40} alt="" />
          <span className='text-xl md:text-base my-3 md:my-0'>GetMe@Chai!</span>
          </Link>
       </div>
       {/* <ul className='flex justify-between gap-6'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Login</li>
       </ul>
       */}

<div className='relative flex justify-center items-center  md:block gap-4'>
        {session && <>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
            setTimeout(() => {
              setShowdropdown(false)
            }, 100);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center  dark:bg-blue-600/60 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700/70`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        {/* {session && <Link href={"/dashboard"}><button className='text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 '>Dashboard</button></Link>} */}

          {session && <button className='text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 ' onClick={()=>{signOut()}}>Logout</button>}

        {!session && <Link href={"/login"}>
       <button className='text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer' >Login</button>
       </Link>}

       </div>

    </nav>
  )
}

export default Navbar





