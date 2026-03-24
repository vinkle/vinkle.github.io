import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { phdCandidates } from '../../All_Lists/PhDCandidates';
import { researchInternships } from '../../All_Lists/ResearchCandidates';
import { Helmet } from 'react-helmet';
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedinIn } from 'react-icons/fa';

const CandidatesAndInterns = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's supervision and mentorship of PhD candidates and research interns, along with Prof. Nicolas Padoy." />
        <meta name="keywords" content="Vinkle Srivastav, supervision, mentorship, PhD candidates, research internships, academic guidance" />
        <meta property="og:title" content="Vinkle Srivastav - Supervision" />
        <meta property="og:description" content="Explore Vinkle Srivastav's supervision and mentorship of PhD candidates and research interns, along with Prof. Nicolas Padoy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io/" />
      </Helmet>
      <section id="Supervision" className="bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">
              Supervision
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
            <span className="text-base block mt-4 font-medium text-stone-500 dark:text-stone-400">
              (Co-supervision along with <a href='https://camma.unistra.fr/npadoy/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300'>Prof. Nicolas Padoy</a>)
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-stone-700 dark:text-stone-200">
                PhD Candidates
              </h2>
              <div className="space-y-4">
                {phdCandidates.map((candidate, index) => (
                  <article
                    key={index}
                    className="flex flex-col sm:flex-row justify-between border-b border-stone-200 dark:border-stone-700 pb-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 rounded-lg p-3"
                  >
                    <span className="text-stone-500 dark:text-stone-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                      {candidate.period}
                    </span>
                    <a
                      href={candidate.linkedin_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-stone-200 dark:border-stone-700 hover:border-amber-500 transition-all duration-200"
                      aria-label={`View ${candidate.name}'s LinkedIn profile`}
                    >
                      <img
                        src={candidate.image}
                        alt={`Profile picture of ${candidate.name}`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="flex-1 ml-4">
                      <a
                        href={candidate.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-200"
                        aria-label={`View ${candidate.name}'s LinkedIn profile`}
                      >
                        {candidate.name}
                      </a>
                      <p className="text-stone-500 dark:text-stone-400 mt-1">
                        {candidate.thesis}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <a href={candidate.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${candidate.name}'s LinkedIn profile`}>
                          <FaLinkedinIn className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300" size={16} />
                        </a>
                        {candidate.scholar_link && (
                          <a href={candidate.scholar_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${candidate.name}'s Google Scholar profile`}>
                            <FaGoogleScholar className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300" size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-stone-700 dark:text-stone-200">
                Research Internships
              </h2>
              <div className="space-y-4">
                {researchInternships.map((intern, index) => (
                  <article
                    key={index}
                    className="flex flex-col sm:flex-row justify-between border-b border-stone-200 dark:border-stone-700 pb-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 rounded-lg p-3"
                  >
                    <span className="text-stone-500 dark:text-stone-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                      {intern.period}
                    </span>
                    <a
                      href={intern.linkedin_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-stone-200 dark:border-stone-700 hover:border-amber-500 transition-all duration-200"
                      aria-label={`View ${intern.name}'s LinkedIn profile`}
                    >
                      <img
                        src={intern.image}
                        alt={`Profile picture of ${intern.name}`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="flex-1 ml-4">
                      <a
                        href={intern.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-200"
                        aria-label={`View ${intern.name}'s LinkedIn profile`}
                      >
                        {intern.name}
                      </a>
                      <p className="text-stone-500 dark:text-stone-400 mt-1">
                        {intern.description}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <a href={intern.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${intern.name}'s LinkedIn profile`}>
                          <FaLinkedinIn className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300" size={16} />
                        </a>
                        {intern.scholar_link && (
                          <a href={intern.scholar_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${intern.name}'s Google Scholar profile`}>
                            <FaGoogleScholar className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300" size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidatesAndInterns;
