import Link from 'next/link'
import React from 'react'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, PinterestIcon, XIcon } from './Icons'

export const Navbar = () => {
  return (
    <>
       <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                
                <Link href="/" >Home </Link>
                <Link href="/about" >About </Link>
                <Link href="/projects" >Projects</Link>
                

            </nav>
            <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
                VB
            </div>
            <nav className='flex items-center justify-center flex-wrap gap-2 '>
                <a href='https://x.com ' target={'_blank'}><XIcon/></a>
                <a href='https://github.com' target={'_blank'}><GitHubIcon/></a>
                <a href='https://linkedin.com' target={'_blank'}><LinkedInIcon/></a>
                <a href='https://pinterest.com' target={'_blank'}><PinterestIcon/></a>
                <a href='https://dribbble.com' target={'_blank'}><DribbbleIcon/></a>

            </nav>

       </header>
    
    
    </>
  )
}
