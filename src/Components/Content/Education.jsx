import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';
import { education } from '../../All_Lists/EducationList';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's educational background, including degrees, certifications, and academic achievements." />
        <meta name="keywords" content="Vinkle Srivastav, education, degrees, certifications, academic achievements" />
        <meta property="og:title" content="Vinkle Srivastav - Education" />
        <meta property="og:description" content="Explore Vinkle Srivastav's educational background, including degrees, certifications, and academic achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io/" />
      </Helmet>
      <section className="min-h-screen py-20 bg-stone-50 dark:bg-stone-900">
        <div id='Education' className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">Education</h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </motion.div>

          <div className="space-y-6 border-l-2 border-stone-300 dark:border-stone-600">
            {education.map((exp, index) => (
              <article key={exp.id} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full bg-amber-600 dark:bg-amber-400 flex items-center justify-center">
                    <FaGraduationCap className="h-4 w-4 text-white dark:text-stone-900" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-6 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">{exp.position}</h2>
                        <span className="text-sm font-semibold text-stone-600 dark:text-stone-300">{exp.timeFrame}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-stone-500 dark:text-stone-400">{exp.company}</h3>
                      <p className="mt-4 text-stone-600 dark:text-stone-300">{exp.description}</p>

                      {(exp.supervisors || exp.committee) && (
                        <div className="flex gap-4 mt-4">
                          {exp.supervisors && (
                            <div className="flex-1">
                              <h4 className="font-semibold text-stone-700 dark:text-stone-200">Thesis Directors:</h4>
                              <ul className="list-disc text-stone-600 dark:text-stone-300 list-inside">
                                {exp.supervisors.map((supervisor, i) => (
                                  <li key={i}>
                                    <a
                                      href={exp.supervisors_link[i]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-amber-700 hover:underline dark:text-amber-400"
                                    >
                                      {supervisor}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.committee && (
                            <div className="flex-1">
                              <h4 className="font-semibold text-stone-700 dark:text-stone-200">Thesis Committee:</h4>
                              <ul className="list-disc text-stone-600 dark:text-stone-300 list-inside">
                                {exp.committee.map((member, i) => (
                                  <li key={i}>
                                    <a
                                      href={exp.committee_link[i]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-amber-700 hover:underline dark:text-amber-400"
                                    >
                                      {member}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {exp.thesis_link && (
                        <a
                          href={exp.thesis_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-amber-700 dark:text-amber-400 hover:underline"
                          aria-label="Download Thesis"
                        >
                          <FaDownload className="mr-2" /> Download Thesis
                        </a>
                      )}
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

export default Education;
