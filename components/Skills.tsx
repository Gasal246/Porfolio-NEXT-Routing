import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}:{name?:string, x?:string, y?:string}) => {
  return (
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5 shadow-dark cursor-pointer
  absolute dark:text-dark dark:bg-light'
      whileHover={{ scale:1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y, transition: { duration:1.2 }}}
      >
        {name}
      </motion.div>
  )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-7xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer'
      whileHover={{
        scale:1.05
      }}>
        Web
      </motion.div>

      <Skill name='HTML' x="-20vw" y="2vw" />
      <Skill name='CSS' x="-5vw" y="-10vw" />
      <Skill name='JavaScript' x="20vw" y="6vw" />
      <Skill name='React JS' x="0vw" y="12vw" />
      <Skill name='Next JS' x="-20vw" y="-15vw" />
      <Skill name='TypeScript' x="15vw" y="-12vw" />
      <Skill name='Node Express' x="32vw" y="-5vw" />
      <Skill name='Node' x="0" y="-20vw" />
      <Skill name='MySQL' x="-25vw" y="18vw" />
      <Skill name='Mongo' x="18vw" y="18vw" />
      <Skill name='Tailwind CSS' x="-36vw" y="5vw" />
      <Skill name='Framer Motion' x="-25vw" y="-5vw" />
      <Skill name='GIT' x="30vw" y="-15vw" />
      <Skill name='CI/CD' x="30vw" y="12vw" />
      <Skill name='Figma' x="0" y="22vw" />
    </div>
    </>
  )
}

export default Skills