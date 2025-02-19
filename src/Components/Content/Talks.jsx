import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { talksItems } from '../../All_Lists/TalkItems';
const Talks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="Talks" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500"
      >
        Talks
      </h1>

      <div className="space-y-4">
        {talksItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-down"
            className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg p-3"
          >
            <span className="text-gray-600 dark:text-gray-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
              {item.date}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 flex-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ml-4"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Talks;