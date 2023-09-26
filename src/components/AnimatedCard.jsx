'use client'
import React from 'react'
import {motion} from 'framer-motion'

import { ProjectCard } from './ProjectCard'
const desdeIzquierda={
    initial:{
      opacity:0,
      x:-50,
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:3,
      }
    }
  
  }

export const AnimatedCard = ({ index, ...project }) => {
  return (
    <>
        <motion.div initial='initial' animate='animate' variants={desdeIzquierda} className='w-full md:w-1/2 '>
        <ProjectCard key={index} {...project} />
          </motion.div> 
    
    </>
  )
}