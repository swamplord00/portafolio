
import Link from 'next/link'

import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImage } from '@/components/AnimatedImage'



export default function Home() {
  return (
    <>
      <div className='w-full h-full p-10 '>
        <main className='flex items-center justify-between w-full flex-wrap '>
          
          <AnimatedImage src='https://res.cloudinary.com/dfi52sqwg/image/upload/v1695587508/portafolio/roxar9dgqvivurufz2iv.png'/>
          <div className='w-full md:w-1/2 p-3'>
              <AnimatedText text={'Bringing your ideas to life.'}/>
              
              <p className='my-4 font-medium text-base '>
                  
              Creating the website of your dreams. As a full-stack developer, I am dedicated to turning your ideas into custom web applications. Explore my portfolio of projects that reflect my knowledge, skills and experience in React.js and web development.

              </p>
              <Link href='/assets/docs/CV.pdf' className='flex items-center justify-center bg-slate-950 text-slate-100 p-2 rounded-lg text-lg hover:bg-slate-100 hover:text-slate-900 ' target={'_blank'} download={true}>
                Curriculum
              </Link>
          </div>


        </main>

      </div>
    </>
  )
}
