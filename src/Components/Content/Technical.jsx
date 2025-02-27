import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../../All_Lists/Skills';
import { Helmet } from 'react-helmet';
const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore my technical skills and expertise." />
        <meta name="keywords" content="skills, expertise, technologies, tools" />
      </Helmet>
    <section id="Skills" className="bg-gray-50 dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-gray-700 dark:text-white"
      >
        Technical Skills
      </h1>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} data-aos="fade-up" className="p-5 border-b border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">{skill.category}</h2>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default TechnicalSkills;
