"use client"
import AnimateText from '@/components/AnimateText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, MouseEvent } from 'react'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImage = ({ title = '', img = '', link = '' }: { title?: any, img?: any, link?: any }) => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef: any = useRef(null)

  const handleMouse = (event: any) => {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-5)
  }

  const handleMouseLeave = (event: any) => {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }} />
    </Link>)
}

const Article = ({ img = '', title = '', date = '', link = '' }: { img?: any, title?: any, date?: any, link?: any }) => {
  return (
    <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light
    border-r-4 border-b-4' initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}>
      <div>
        <MovingImage title={title} img={img} link={link} />
      </div>
      <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img = '', title = '', time = '', summary = '', link = '' }: { img?: any, title?: any, time?: any, summary?: any, link?: any }) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg' >
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw, 33vw' />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
    </li>
  )
}

const page = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
      <Layout className='pt-16'>
        <AnimateText text='Words Can Change The World!' className='mb-16 text-8xl' />
        <ul className='grid grid-cols-2 gap-16'>
          <FeaturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read" link='/' img={article1}
          />
          <FeaturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read" link='/' img={article2}
          />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
        <ul>
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article3} date="Jan 14 2024" link="/" />
        </ul>
      </Layout>
    </main>
  )
}

export default page