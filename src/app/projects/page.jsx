import { AnimatedCard } from "@/components/AnimatedCard";

import { AnimatedText } from "@/components/AnimatedText";


import React from "react";
export const metadata = {
  title: "proyectos de Victor",
  description: "React, NextJS",
};

const page = () => {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472118/uxkglrtk4fvwes0flzqz.png",
      title: "Landing Page Cosmética Natural",
      description: "An online store for natural cosmetic products.",
      link: "https://cosmeticanatural.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472117/qiq5wabnopo4kolzv4eh.png",
      title: "Reviews products Page",
      description: "A cosmetic product review page.",
      link: "https://reviews-c-page.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472117/z5a8fscfrk72gtprlnek.png",
      title: "Forecast Page",
      description: "A page to check the weather forecast.",
      link: "https://forescast-api-team5.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472118/rzdg3o8g8etjo24oet3e.png",
      title: "Restorant Sushi Page",
      description: "A page for reserving tables at a restaurant.",
      link: "https://sushironin.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472118/dwb2nbhqjgev43yp4cyt.png",
      title: "Ecommerce Fashion Store Page",
      description: "A page for buying clothes and accessories.",
      link: "https://fashionstorecl.netlify.app/",
    },
  ];

  return (
    <>
    <div className="bg-gray-100 pb-8  items-center">

      <div className="p-8">

        <AnimatedText text={'Portfolio'}/>

      </div>

      <div className="flex flex-col items-center  gap-2">

      {projects.map((project, index) => (
        <AnimatedCard key={index} {...project} />
      ))}
    </div>

    </div>

    </>
  );
};

export default page;
