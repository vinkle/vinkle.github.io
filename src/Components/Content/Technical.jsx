import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../../All_Lists/Skills';
import { Helmet } from 'react-helmet';

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's technical skills and expertise in various technologies and tools." />
        <meta name="keywords" content="Vinkle Srivastav, technical skills, expertise, technologies, tools, programming, software development" />
        <meta property="og:title" content="Vinkle Srivastav - Technical Skills" />
        <meta property="og:description" content="Explore Vinkle Srivastav's technical skills and expertise in various technologies and tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="Skills" className="bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1
              data-aos="fade-right"
              className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100"
            >
              Technical Skills
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <article key={index} data-aos="fade-up" className="p-5 border border-stone-200 dark:border-stone-700 rounded-lg shadow-sm bg-white dark:bg-stone-800 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-stone-700 dark:text-stone-200 mb-2">{skill.category}</h2>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-700 rounded-full text-sm font-medium">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSkills;
