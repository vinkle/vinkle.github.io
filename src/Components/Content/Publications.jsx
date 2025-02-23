import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsList from '../../All_Lists/ProjectsList';
import { AiFillGithub } from 'react-icons/ai';
import { SiArxiv } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa"; 
import { FaGoogleScholar } from "react-icons/fa6";

function Publications() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='Publications' className='bg-white text-black dark:bg-slate-900 dark:text-white p-20 flex flex-col items-left justify-center'>
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500">
      Publications
      <span className="text-[15px] block normal-case font-medium text-gray-400 dark:text-gray-400">
        <a href="https://scholar.google.fr/citations?user=FDWwdoQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline  font-medium"> <FaGoogleScholar/> Google Scholar</a> 
      </span>
    </h1>
      {ProjectsList.slice().reverse().map((project) => (
        <div key={project.id} data-aos='fade-down' className='flex flex-row items-center justify-between mb-10 p-6 border-2 border-gray-300 rounded-lg shadow-lg'>
          <div className='flex flex-col w-2/3'>
            <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
            {project.message && (
              <div className='flex items-center text-yellow-600 dark:text-yellow-400 mb-2'>
                <FaInfoCircle className='mr-2' />
                <p className='italic'>{project.message}</p>
              </div>
            )}
            <p className='text-gray-700 dark:text-gray-300'>{project.authors}</p>
            <p className='text-gray-600 dark:text-gray-400 italic'>{project.booktitle}, {project.year}</p>
            <div className='flex items-center mt-4'>
              {project.github && (
                <a target="_blank" href={project.github} className='text-white-500 hover:text-blue-700 flex items-center mr-4'>
                  <AiFillGithub className='mr-2' /> GitHub
                </a>
              )}
              {project.arxiv && (
                <a target="_blank" href={project.arxiv} className='text-red-600 hover:text-white-700 flex items-center'>
                  <SiArxiv className='mr-2' /> arXiv
                </a>
              )}
            </div>
          </div>
          {project.image && (
            <a target="_blank" href={project.github} className='w-1/3 h-40 bg-white flex items-center justify-center rounded-lg'>
              <img 
                className='w-full h-full object-contain rounded-lg' 
                src={project.image} 
                alt={project.title} 
                style={{ backgroundColor: 'white' }}
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Publications;