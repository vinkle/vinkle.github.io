import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { newsItems } from '../../All_Lists/NewsItems';

function News() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div id="News" className="bg-white text-black dark:bg-slate-900 dark:text-white px-10 py-16 flex flex-col items-start">
      <h1 data-aos="fade-right" className="text-4xl font-bold mb-8 uppercase text-gray-800 dark:text-gray-200">News</h1>
      <div className="space-y-3 w-full">
        {newsItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="flex items-center text-sm border-b border-gray-300 dark:border-gray-700 py-3"
          >
            <span className="text-gray-500 dark:text-gray-400 font-medium w-24">{item.date}</span>
            <span className="text-gray-900 dark:text-gray-100 flex-1">{item.text}</span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-xs ml-3 hover:underline"
              >
                Click Here <FaExternalLinkAlt className="text-[10px]" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;