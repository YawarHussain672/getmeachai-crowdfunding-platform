import React from 'react'

const Footer = () => {
const currentYear = new Date().getFullYear();

  return (
   <footer className='bg-black text-slate-500 flex items-center justify-center px-4 h-7'>
         <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
   </footer>
  )
}

export default Footer
