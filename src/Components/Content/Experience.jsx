import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../All_Lists/ExperienceList';
import { Helmet } from 'react-helmet';

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's professional experience, including past roles, responsibilities, and achievements." />
        <meta name="keywords" content="Vinkle Srivastav, experience, professional, career, work history" />
        <meta property="og:title" content="Vinkle Srivastav - Experience" />
        <meta property="og:description" content="Explore Vinkle Srivastav's professional experience, including past roles, responsibilities, and achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io/" />
      </Helmet>
      <section className="min-h-screen py-20 bg-white dark:bg-stone-950">
        <div id='Experience' className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">Work Experience</h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </motion.div>

          <div className="space-y-6 border-l-2 border-stone-300 dark:border-stone-600">
            {experiences.map((exp, index) => (
              <article key={exp.id} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full bg-amber-600 dark:bg-amber-400 flex items-center justify-center">
                    <FaBriefcase className="h-3.5 w-3.5 text-white dark:text-stone-900" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-6 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">{exp.position}</h2>
                        <span className="text-sm font-semibold text-stone-600 dark:text-stone-300">{exp.timeFrame}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-stone-500 dark:text-stone-400">{exp.company}</h3>
                      <p className="mt-4 text-stone-600 dark:text-stone-300">{exp.description}</p>
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
};

export default Experience;
