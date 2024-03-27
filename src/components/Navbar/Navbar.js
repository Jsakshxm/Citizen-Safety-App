
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='fixed flex w-full justify-between px-10 lg:px-24 py-5 lg:py-10  dark:bg-slate-800 dark:text-white bg-gradient-to-r  from-40% from-slate-800 via-slate-700 to-60% to-slate-800 bg-opacity-50'>
      <div>Citizen Safety App</div>
      <ul className='flex dark:text-slate-400 '>
        <li className='px-2 lg:px-5'><Link href="/">Home</Link></li>
        <li className='px-2 lg:px-5'> <Link href="/UrlSearch">Url search</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
