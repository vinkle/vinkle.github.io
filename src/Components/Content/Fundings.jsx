import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fundingItems } from '../../All_Lists/FundingItems';
import { Helmet } from 'react-helmet';
//<p>Funding amount: {item.amount}</p>
const Fundings = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore research fundings and grants acquired by Vinkle Srivastav." />
        <meta name="keywords" content="Vinkle Srivastav, research funding, grants, projects" />
        <meta property="og:title" content="Vinkle Srivastav - Fundings" />
        <meta property="og:description" content="Explore research fundings and grants acquired by Vinkle Srivastav." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io/fundings" />
      </Helmet>

      <section id="Fundings" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500"
        >
          Fundings
        </h1>

        <div className="space-y-4">
          {fundingItems.map((item, index) => (
            <article
              key={index}
              data-aos="fade-down"
              className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg p-3"
            >
              <span className="text-gray-600 dark:text-gray-400 font-mono w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                {item.projectNumber}. {item.title} - {item.year}:
              </span>
              
              <div className="text-gray-800 dark:text-gray-200 flex-1 ml-4 space-y-2">
                <p>
                  Project on the <strong>{item.topic}</strong> in collaboration with {item.institution}.
                </p>
                <p>Duration: {item.duration}</p>
                <p>
                  {item.collaborators.length > 1 ? "Collaborators: " : "Collaborator: "}
                  {item.collaborators.map((collab, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href={collab.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                      >
                        {collab.name}
                      </a>
                      {idx < item.collaborators.length - 1 && 
                        (idx === item.collaborators.length - 2 ? " and " : ", ")}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Fundings;