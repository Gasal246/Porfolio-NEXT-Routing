"use client"
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from "./hooks/useThemeSwitcher"

const CostumLink = ({href, title, className=""}:{href:string, title:string, className?:string}) => {
    const router = usePathname()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router === href ? 'w-full' : 'w-0'} dark:bg-light
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher() as [string, React.Dispatch<React.SetStateAction<string>>]
    
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CostumLink title='Home' href="/" className='mr-4'/>
            <CostumLink title='About' href="/about" className='mx-4'/>
            <CostumLink title='Project' href="/projects" className='mx-4'/>
            <CostumLink title='Articles' href="/articles" className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com" target='_blank' 
            whileHover={{ y:-3 }} whileTap={{scale:0.9}}
            className="w-7 mr-3"
            >
                <TwitterIcon />
            </motion.a>

            <motion.a href="https://github.com/Gasal246" target='_blank'
            whileHover={{ y:-3 }} whileTap={{scale:0.9}}
            className="w-7 mx-3"
            >
                <GithubIcon />
            </motion.a>

            <motion.a href="https://github.com/Gasal246" target='_blank'
            whileHover={{ y:-3 }} whileTap={{scale:0.9}}
            className="w-7 mx-3"
            >
                <LinkedInIcon />
            </motion.a>

            <motion.a href="https://github.com/Gasal246" target='_blank'
            whileHover={{ y:-3 }} whileTap={{scale:0.9}}
            className="w-7 mx-3"
            >
                <PinterestIcon />
            </motion.a>

            <motion.a href="https://github.com/Gasal246" target='_blank'
            whileHover={{ y:-3 }} whileTap={{scale:0.9}}
            className="w-7 ml-3"
            >
                <DribbbleIcon />
            </motion.a>

            {/* dark Mode button */}
            <button
            onClick={() => setMode((prevMode) => prevMode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                {
                    mode === "dark" ? 
                    <SunIcon className='fill-dark' />
                    : <MoonIcon className='fill-dark' />
                }
            </button>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar