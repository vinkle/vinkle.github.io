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
      <section className="min-h-screen py-20 bg-white dark:bg-gray-900">
        <div id='Experience' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Work Experience</h1>
          </motion.div>

          <div className="space-y-6 border-l-2 border-dashed border-primary/50 dark:border-primary/30">
            {experiences.map((exp, index) => (
              <article key={exp.id} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full dark:text-white bg-white dark:bg-gray-900">
                    <FaBriefcase className="h-7 w-7 text-primary" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold dark:text-white">{exp.position}</h2>
                        <span className="text-sm font-semibold text-primary dark:text-white">{exp.timeFrame}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{exp.company}</h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">{exp.description}</p>
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