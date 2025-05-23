import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { newsItems } from '../../All_Lists/NewsItems';
import { Helmet } from 'react-helmet';

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Stay updated with the latest news and events related to Vinkle Srivastav's research and professional activities." />
        <meta name="keywords" content="Vinkle Srivastav, news, events, updates, research, professional activities" />
        <meta property="og:title" content="Vinkle Srivastav - News" />
        <meta property="og:description" content="Stay updated with the latest news and events related to Vinkle Srivastav's research and professional activities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="News" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-gray-800 dark:text-gray-200"
        >
          News
        </h1>

        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <article
              key={index}
              data-aos="fade-down"
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg p-3"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                {item.date}
              </span>
              <div className="flex-1 flex items-center ml-4">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                    aria-label="Read more about this news"
                  >
                    {item.text}
                    <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-gray-800 dark:text-gray-200">
                    {item.text}
                  </span>
                )}
              </div>
              {item.image && (
                <div className="ml-4 w-60 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt="TFUScapes dataset: Transcranial focused ultrasound (tFUS) simulation dataset" 
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;