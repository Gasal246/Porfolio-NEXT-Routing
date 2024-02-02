"use client"
import AnimateText from '@/components/AnimateText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({ type = '', title = '', summary = '', img = '', link = '#', github = '#' }: { type?: string, title?: any, summary?: string, img?: any, link?: any, github?: any }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw, 33vw' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
                <div className='mt-2 flex itmes-center'>
                    <Link href={github} target='_blank' className='w-10 ' >
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type = '', title = '', img = '', link = '#', github = '#' }: { type?: string, title?: any, img?: any, link?: any, github?: any }) => {
    return (
        <article className='w-full flex items-center flex-col justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg relative' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <div className='mt-2 flex itmes-center justify-between w-full'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline dark:text-light'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 ' >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const page = () => {
    return (
        <>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimateText text='Imagination Trumps Knowledge!' className='text-8xl mb-16' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency.'
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency.'
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                link='/'
                                github='/'
                                type='featured Project'
                                img={project1}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default page