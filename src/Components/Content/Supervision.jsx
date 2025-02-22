import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { phdCandidates } from '../../All_Lists/PhDCandidates';
import { researchInternships } from '../../All_Lists/ResearchCandidates';

const CandidatesAndInterns = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="Supervision" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
    <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500">
      Supervision
      <span className="text-[15px] block normal-case font-medium text-gray-400 dark:text-gray-400">
        (along with Prof. Nicolas Padoy)
      </span>
    </h1>
      <div className="space-y-8">
        <div>
          <h2
            className="text-2xl font-semibold mb-6 text-white-600 dark:text-white-400"
          >
            PhD Candidates
          </h2>
          <div className="space-y-4">
            {phdCandidates.map((candidate, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg p-3"
              >
                <span className="text-gray-600 dark:text-gray-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                  {candidate.period}
                </span>
                {/* Clickable image */}
                <a
                  href={candidate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="flex-1 ml-4">
                  <a
                    href={candidate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {candidate.name}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {candidate.thesis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-semibold mb-6 text-white-600 dark:text-white-400"
          >
            Research Internships
          </h2>
          <div className="space-y-4">
            {researchInternships.map((intern, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg p-3"
              >
                <span className="text-gray-600 dark:text-gray-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                  {intern.period}
                </span>
                <a
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <img
                    src={intern.image}
                    alt={intern.name}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="flex-1 ml-4">
                  <a
                    href={intern.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {intern.name}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {intern.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidatesAndInterns;