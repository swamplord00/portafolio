import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedText } from "@/components/AnimatedText";
import { ProjectCard } from "@/components/ProjectCard";

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
      description: "Una tienda en línea para productos de cosmética natural.",
      link: "https://cosmeticanatural.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472117/qiq5wabnopo4kolzv4eh.png",
      title: "Reviews products Page",
      description: "Una página de reseñas de productos de cosmética.",
      link: "https://reviews-c-page.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472117/z5a8fscfrk72gtprlnek.png",
      title: "Forecast Page",
      description: "Una página para consultar el pronóstico del tiempo.",
      link: "https://forescast-api-team5.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472118/rzdg3o8g8etjo24oet3e.png",
      title: "Restorant Sushi Page",
      description: "Una página de reserva de mesas en un restorante.",
      link: "https://sushironin.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dfi52sqwg/image/upload/v1695472118/dwb2nbhqjgev43yp4cyt.png",
      title: "Ecommerce Fashion Store Page",
      description: "Una página de compra de ropa y accesorios.",
      link: "https://fashionstorecl.netlify.app/",
    },
  ];

  return (
    <>
      <div className="p-8">

        <AnimatedText text={'Portfolio'}/>

      </div>

      <div className="flex flex-col items-center gap-2">

      {projects.map((project, index) => (
        <AnimatedCard key={index} {...project} />
      ))}
    </div>

    </>
  );
};

export default page;
