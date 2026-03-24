import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { newsItems } from '../../All_Lists/NewsItems';
import { Helmet } from 'react-helmet';

function News() {
  useEffect(() => {
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
      <section className="min-h-screen py-20 bg-white dark:bg-stone-950">
        <div id='News' className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">News</h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </motion.div>

          <div className="space-y-6 border-l-2 border-stone-300 dark:border-stone-600">
            {newsItems.map((item, index) => (
              <article key={index} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: index * 0.05 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full bg-amber-600 dark:bg-amber-400 flex items-center justify-center">
                    <FaExternalLinkAlt className="h-3 w-3 text-white dark:text-stone-900" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-6 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-stone-600 dark:text-stone-300">{item.date}</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-0">
                        <div className="flex-1">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400 hover:underline flex items-center gap-0"
                              aria-label="Read more about this news"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <h2 className="text-lg font-bold dark:text-stone-100">{item.text}</h2>
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
