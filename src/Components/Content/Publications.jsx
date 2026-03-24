import React from 'react';
import ProjectsList from '../../All_Lists/ProjectsList';
import { AiFillGithub } from 'react-icons/ai';
import { SiArxiv } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Publications() {

  const groupedProjects = ProjectsList.reduce((acc, project) => {
    const type = project.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(project);
    return acc;
  }, {});

  const publicationOrder = ["Preprint", "Patent", "Book Chapter", "Conference", "Journal"];

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's latest publications and research projects in surgical data science, AI, and healthcare." />
        <meta name="keywords" content="Vinkle Srivastav, publications, research, projects, articles, surgical data science, AI, healthcare" />
        <meta property="og:title" content="Vinkle Srivastav - Publications" />
        <meta property="og:description" content="Explore Vinkle Srivastav's latest publications and research projects in surgical data science, AI, and healthcare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="Publications" className='bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-100 p-6 md:p-20 flex flex-col items-left justify-center'>
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">
              Publications
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
            <span className="text-sm block mt-4 font-medium text-stone-500 dark:text-stone-400">
              <a href="https://scholar.google.fr/citations?user=FDWwdoQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-amber-700 dark:text-amber-400 hover:underline font-medium inline-flex items-center gap-1" aria-label="View Vinkle Srivastav's Google Scholar profile">
                <FaGoogleScholar /> Google Scholar
              </a>
            </span>
          </div>

          {publicationOrder.map((type) => {
            const projects = groupedProjects[type];
            if (!projects) return null;

            return (
              <div key={type}>
                <h2 className="font-heading text-xl md:text-2xl font-semibold mt-12 mb-6 border-b border-stone-200 dark:border-stone-700 pb-2 text-stone-700 dark:text-stone-200">
                  {type}
                </h2>
                {projects.slice().reverse().map((project) => (
                  <article key={project.id} className='flex flex-col md:flex-row items-start justify-between mb-6 p-6 border border-stone-200 dark:border-stone-700 rounded-lg shadow-sm hover:shadow-md bg-white dark:bg-stone-800 transition-shadow duration-300'>
                    <div className='flex flex-col w-full md:w-2/3'>
                      <h2 className='text-xl md:text-2xl font-bold mb-2'>{project.title}</h2>
                      {project.youtube_message && (
                        <a target="_blank" href={project.youtube} className='text-green-600 dark:text-green-400 hover:text-green-800 flex items-center mb-2' aria-label={`Watch ${project.title} on YouTube`}>
                          <FaYoutube className='mr-2' />
                          <p className='italic'>{project.youtube_message}</p>
                        </a>
                      )}
                      {project.message && (
                        <div className='flex items-center text-amber-600 dark:text-amber-400 mb-2'>
                          <FaInfoCircle className='mr-2' />
                          <p className='italic'>{project.message}</p>
                        </div>
                      )}
                      <p className='text-stone-600 dark:text-stone-300 mb-2'>
                        {project.authors.split(/(Vinkle Srivastav)/g).map((part, index) =>
                          part === 'Vinkle Srivastav'
                            ? <span key={index} className="font-bold text-amber-700 dark:text-amber-400">{part}</span>
                            : part
                        )}
                      </p>
                      <p className='text-stone-500 dark:text-stone-400 italic mb-2'>{project.booktitle}, {project.year}</p>
                      <p className='text-stone-500 dark:text-stone-400 mb-4'>{project.summary}</p>
                      <div className='flex items-center gap-4'>
                        {project.github && (
                          <a target="_blank" href={project.github} className='hover:text-amber-700 dark:hover:text-amber-400 flex items-center transition-colors duration-200' aria-label={`View ${project.title} on GitHub`}>
                            <AiFillGithub className='mr-2' /> GitHub
                          </a>
                        )}
                        {project.arxiv && (
                          <a target="_blank" href={project.arxiv} className='text-red-600 dark:text-red-400 hover:text-red-800 flex items-center transition-colors duration-200' aria-label={`View ${project.title} on arXiv`}>
                            <SiArxiv className='mr-2' /> arXiv
                          </a>
                        )}
                      </div>
                    </div>

                    {project.image && (
                      <div className='w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 flex items-center justify-center'>
                        <a target="_blank" href={project.github} aria-label={`View ${project.title} on GitHub`}>
                          <img
                            className='w-full h-auto max-h-48 md:max-h-64 object-contain rounded-lg'
                            src={project.image}
                            alt={`Cover image for ${project.title}`}
                          />
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Publications;
