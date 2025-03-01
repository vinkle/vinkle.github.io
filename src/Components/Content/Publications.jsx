import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsList from '../../All_Lists/ProjectsList';
import { AiFillGithub } from 'react-icons/ai';
import { SiArxiv } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa"; 
import { FaGoogleScholar } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Publications() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore the latest publications and research projects." />
        <meta name="keywords" content="publications, research, projects, articles" />
      </Helmet>
      <div id='Publications' className='bg-white text-black dark:bg-slate-900 dark:text-white p-6 md:p-20 flex flex-col items-left justify-center'>
        <h1 className="text-3xl md:text-[52px] font-semibold mb-8 md:mb-20 leading-normal uppercase text-white-500">
          Publications
          <span className="text-[15px] block normal-case font-medium text-gray-400 dark:text-gray-400">
            <a href="https://scholar.google.fr/citations?user=FDWwdoQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium"> 
              <FaGoogleScholar/> Google Scholar
            </a> 
          </span>
        </h1>
        {ProjectsList.slice().reverse().map((project) => (
          <div key={project.id} data-aos='fade-down' className='flex flex-col md:flex-row items-start justify-between mb-8 p-6 border-2 border-gray-300 rounded-lg shadow-lg'>
            {/* Text Content */}
            <div className='flex flex-col w-full md:w-2/3'>
              <h2 className='text-xl md:text-2xl font-bold mb-2'>{project.title}</h2>
              {project.youtube_message && (
                <a target="_blank" href={project.youtube} className='text-green-500 hover:text-green-700 flex items-center mb-2'>
                  <FaYoutube className='mr-2' />
                  <p className='italic'>{project.youtube_message}</p>
                </a>
              )}              
              {project.message && (
                <div className='flex items-center text-yellow-600 dark:text-yellow-400 mb-2'>
                  <FaInfoCircle className='mr-2' />
                  <p className='italic'>{project.message}</p>
                </div>
              )}          
              <p className='text-gray-700 dark:text-gray-300 mb-2'>{project.authors}</p>
              <p className='text-gray-600 dark:text-gray-400 italic mb-2'>{project.booktitle}, {project.year}</p>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.summary}</p>
              <div className='flex items-center'>
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

            {/* Image */}
            {project.image && (
              <div className='w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 flex items-center justify-center'>
                <a target="_blank" href={project.github}>
                  <img 
                    className='w-full h-auto max-h-48 md:max-h-64 object-contain rounded-lg' 
                    src={project.image} 
                    alt={project.title} 
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Publications;