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
      <section className="min-h-screen py-20 bg-white dark:bg-gray-900">
        <div id='Education' className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Education</h1>
          </motion.div>

          <div className="space-y-6 border-l-2 border-dashed border-primary/50 dark:border-primary/30">
            {education.map((exp, index) => (
              <article key={exp.id} className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full dark:text-white bg-white dark:bg-gray-900">
                    <FaGraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div className="ml-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold dark:text-white">{exp.position}</h2>
                        <span className="text-sm font-semibold text-primary dark:text-white">{exp.timeFrame}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{exp.company}</h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">{exp.description}</p>

                      {/* Combined Thesis Directors and Committee Section */}
                      {(exp.supervisors || exp.committee) && (
                        <div className="flex gap-4 mt-4">
                          {/* Thesis Directors Section */}
                          {exp.supervisors && (
                            <div className="flex-1">
                              <h4 className="font-semibold dark:text-gray-200">Thesis Directors:</h4>
                              <ul className="list-disc dark:text-gray-200 list-inside">
                                {exp.supervisors.map((supervisor, i) => (
                                  <li key={i}>
                                    <a
                                      href={exp.supervisors_link[i]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500 hover:underline dark:text-blue-400"
                                    >
                                      {supervisor}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Thesis Committee Section */}
                          {exp.committee && (
                            <div className="flex-1">
                              <h4 className="font-semibold dark:text-gray-200">Thesis Committee:</h4>
                              <ul className="list-disc dark:text-gray-200 list-inside">
                                {exp.committee.map((member, i) => (
                                  <li key={i}>
                                    <a
                                      href={exp.committee_link[i]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500 hover:underline dark:text-blue-400"
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
                          className="mt-4 inline-flex items-center text-green-500 hover:underline"
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