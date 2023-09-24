"use client";
import Image from "next/image";
import { useState } from "react";

export const ProjectCard = ({ image, title, description, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 flex md:flex-row flex-col items-center md:space-x-4 space-y-4 md:space-y-0">
      <Image src={image} alt={title} className="w-1/2 h-48 object-cover rounded-lg" width={500} height={500} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Ver más
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <iframe src={link} title={title} className="w-full h-96"></iframe>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};
