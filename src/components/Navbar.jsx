"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
const links=[
    {
        url:"/",
        title:"Home"
    },
    {
        url:"/about",
        title:"about"
    },
    {
        url:"/contact",
        title:"contact"
    },
    {
        url:"/projects",
        title:"projects"
    }
]
const Navbar = () => {
    const [open,setOpen]= useState(false);
    const pathName = usePathname();
    const topVariant={
        closed:{
            rotate:0
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const midVariant={
        closed:{
            opacity:1
        },
        opened:{
            opacity:0
        }
    }
    const bottomVariant={
        closed:{
            rotate:0
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const listVariant={
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                staggerChildren:0.3,
            }
        }
    }
    const listItemVariant={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }
  return (
    <div className='flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        
        {/* Links */}
        <div className='hidden md:flex gap-8 w-1/3 '>
        {links.map((link)=>(
            <Link className={`text-md font-medium capitalize rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url} key={link.title}>{link.title}</Link>
        ))}
        </div>
        <div className='font-semibold capitalize text-xl md:hidden lg:block w-auto'>
            <Link href={"/"}>portfolio</Link>
        </div>
        {/* social Links */}
        <div className='hidden md:flex gap-8 w-1/3 justify-end'>
            <Link href={"/"}>
                <Image src={"/github.png"} width={24} height={24} alt='social icons'/>
            </Link>
            <Link href={"/"}>
                <Image src={"/dribbble.png"} width={24} height={24} alt='social icons'/>
            </Link>
            <Link href={"/"}>
                <Image src={"/facebook.png"} width={24} height={24} alt='social icons'/>
            </Link>
            <Link href={"/"}>
                <Image src={"/instagram.png"} width={24} height={24} alt='social icons'/>
            </Link>
            <Link href={"/"}>
                <Image src={"/linkedin.png"} width={24} height={24} alt='social icons'/>
            </Link>
        </div>
        {/* Button */}
       <div className='md:hidden realtive z-50'>
       <button className='w-10 h-8 flex flex-col justify-between' onClick={() => setOpen((prev) => !prev)}>
            <motion.div variants={topVariant} animate={open ? "opened" :" closed"} className="origin-left w-10 h-1 bg-black rounded-full"></motion.div>
            <motion.div variants={midVariant} animate={open ? "opened" :" closed"} className="w-10 h-1 bg-black rounded-full"></motion.div>
            <motion.div variants={bottomVariant} animate={open ? "opened" :" closed"} className="origin-left w-10 h-1 bg-black rounded-full"></motion.div>
        </button>
       </div>
        {/* Menus list for mobile */}
        { open && (
                <motion.div variants={listVariant} initial="closed" animate="opened"  className='z-40 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl'>
            {
                links.map((link)=>(
                    <motion.div variants={listItemVariant} key={link.title}>
                        <Link className={`rounded p-1 text-md font-medium capitalize ${pathName === link.url && "bg-white text-black"}`} href={link.url} >{link.title}</Link>
                    </motion.div>
                ))
            }
        </motion.div>
            )
        }
    </div>
  )
}

export default Navbar