import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fundingItems } from '../../All_Lists/FundingItems';
import { Helmet } from 'react-helmet';

const Fundings = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
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

      <section id="Fundings" className="bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1
              data-aos="fade-right"
              className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100"
            >
              Fundings
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {fundingItems.map((item, index) => (
              <article
                key={index}
                data-aos="fade-down"
                className="flex flex-col sm:flex-row justify-between border-b border-stone-200 dark:border-stone-700 pb-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 rounded-lg p-3"
              >
                <span className="text-stone-500 dark:text-stone-400 font-mono w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                  {item.projectNumber}. {item.title} - {item.year}:
                </span>

                <div className="text-stone-700 dark:text-stone-200 flex-1 ml-4 space-y-2">
                  <p>
                    Project on the <strong>{item.topic}</strong> in collaboration with {item.institution}.
                  </p>
                  <p>Duration: {item.duration}</p>
                  <p>
                    {item.collaborators.length > 1 ? "Co-PIs: " : "Co-PI: "}
                    {item.collaborators.map((collab, idx) => (
                      <React.Fragment key={idx}>
                        <a
                          href={collab.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-200"
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
        </div>
      </section>
    </>
  );
};

export default Fundings;
