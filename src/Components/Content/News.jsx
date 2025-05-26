import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { newsItems } from '../../All_Lists/NewsItems';
import { Helmet } from 'react-helmet';

function News() {
  useEffect(() => {
    // Remove AOS initialization since we're using Framer Motion now
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
        <meta property="og:url" content="https://vinkle.github.io/" />
      </Helmet>
      <section className="min-h-screen py-50 bg-white dark:bg-gray-900">
        <div id='News' className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">News</h1>
          </motion.div>

          <div className="space-y-6 border-l-2 border-dashed border-primary/50 dark:border-primary/30">
            {newsItems.map((item, index) => (
              <article key={index} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: index * 0.001 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full dark:text-white bg-white dark:bg-gray-900">
                    <FaExternalLinkAlt className="h-3 w-3 text-primary mx-auto mt-1" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary dark:text-white">{item.date}</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-0">
                        <div className="flex-1">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm  dark:text-white hover:underline flex items-center gap-0"
                              aria-label="Read more about this news"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <h2 className="text-lg font-bold dark:text-white">{item.text}</h2>
                          )}
                        </div>
                        {item.image && (
                          <div className="w-full md:w-1/5 mt-6 flex-shrink-1">
                            <img 
                              src={item.image} 
                              alt="TFUScapes dataset: 3D tFUS simulation" 
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;