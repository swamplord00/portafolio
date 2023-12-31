import {
  SvgExpressjs,
  SvgMongodb,
  SvgNextUi,
  SvgNextjs,
  SvgNodejs,
  SvgReact,
  SvgTailwind,
} from "@/components/Icons";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "about",
  description: "",
};

const page = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-items-center gap-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {" "}
            Imagine, design, create, and improve without limits...
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 m-4">
            <a
              href="#"
              className="block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Service
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                I possess a high commitment, adaptability, and creativity to
                support client processes.
              </p>
            </a>
          </div>

          <section className="curriculum">
            <a
              href="#"
              className="block max-w-4xl p-6 bg-black border text-white border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 dark:hover:bg-gray-200"
            >
              <section className="intro flex justify-center items-center my-8">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                  <div>
                    <img
                      className="h-16 w-16 rounded-full mx-auto"
                      src="https://res.cloudinary.com/dfi52sqwg/image/upload/v1695993374/portafolio/rdzwjj7dpymcjsreusqa.jpg"
                      alt="Foto"
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      Victor Briones
                    </h2>
                    <p className="mt-2 text-gray-600 text-justify">
                      {" "}
                      I am characterized by being energetic, respectful, and
                      empathetic, with outstanding team-working skills. My
                      creativity is paired with my enjoyment in solving problems
                      of any kind, especially those related to technology. I
                      have a genuine interest in continuous improvement
                      processes and in reflecting on the obtained results,
                      always seeking more efficient ways to face the challenges
                      of my profession.
                    </p>
                  </div>
                </div>
              </section>

              <section className="beneficios flex justify-center items-center my-8 m-2">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    Benefits
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {" "}
                    High commitment, adaptability, and creativity to support
                    various project processes.
                  </p>
                </div>
              </section>
              <section className="por-que flex justify-center items-center my-8 m-2">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    Why me?
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {" "}
                    conduct a precise analysis of client requirements to ensure
                    a customized product or solution.
                  </p>
                </div>
              </section>
              <section className="credibilidad flex justify-center items-center my-8 m-2">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    Credibility
                  </h2>
                  <p className="mt-2 text-gray-600">
                    My portfolio includes experience as a technology
                    coordinator, Computer Science Engineer , and FullStack Web
                    Developer.
                  </p>
                </div>
              </section>

              <p className="font-normal dark:text-gray-700 text-gray-400"></p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-gray-200">
                Contact
              </h5>
              <p className="font-normal dark:text-gray-700 text-gray-400">
                Email: vbrionesparra@gmail.com
              </p>
              <p className="font-normal dark:text-gray-700 text-gray-400">
                LinkedIn: https://www.linkedin.com/in/victor-briones-82324558/
              </p>
              <p className="font-normal dark:text-gray-700 text-gray-400">
                Github: swamplord00
              </p>
            </a>

            <h2>Skills & Knowledge</h2>
            <p>
              Full Stack Developer, React, Node.js, Next.js, Tailwind CSS, etc.
            </p>

            <section className="tecnologias flex justify-center items-center flex-wrap my-8 max-w-[895px]">
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgReact />
                <p className="mt-2 text-gray-600">React</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgNextjs />
                <p className="mt-2 text-gray-600">Next.js</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgTailwind />
                <p className="mt-2 text-gray-600">Tailwind CSS</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgNextUi />
                <p className="mt-2 text-gray-600">Next UI</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgNodejs />
                <p className="mt-2 text-gray-600">Node.js</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgExpressjs />
                <p className="mt-2 text-gray-600">Express.js</p>
              </div>
              <div className="tech-card max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg m-2 flex flex-col items-center">
                <SvgMongodb />
                <p className="mt-2 text-gray-600">Mongodb</p>
              </div>
            </section>
            <div className="flex flex-wrap gap-2 items-center justify-center">
 
              <Link href='/assets/docs/CV.pdf' className='flex items-center justify-center bg-slate-800 text-slate-100 p-2 rounded-lg text-lg hover:bg-slate-100 hover:text-slate-900 ' target={'_blank'} download={true}>
                Curriculum
              </Link>
              <Link href="/projects" className='flex items-center justify-center bg-slate-800 text-slate-100 p-2 rounded-lg text-lg hover:bg-slate-100 hover:text-slate-900 '>
                Portfolio
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
