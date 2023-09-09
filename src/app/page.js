
import Link from 'next/link'

import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImage } from '@/components/AnimatedImage'



export default function Home() {
  return (
    <>
      <div className='w-full h-full p-32 '>
        <main className='flex items-center justify-between w-full '>
          
          <AnimatedImage src='https://portfolio-demo-g1q6mr7h6-jonadrar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=1920&q=75'/>
          <div className='w-1/2'>
              <AnimatedText text={'Turning Vision Into Reality With Code And Design.'}/>
              
              <p className='my-4 font-medium text-base '>
                  
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.

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
