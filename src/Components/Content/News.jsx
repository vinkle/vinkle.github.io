import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { newsItems } from '../../All_Lists/NewsItems';
import './News.css'; // Import CSS for scrollbar styles
import { Helmet } from 'react-helmet';
function News() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Stay updated with the latest news and events." />
        <meta name="keywords" content="news, events, updates, announcements" />
      </Helmet>
    <div id="News" className="bg-white text-black dark:bg-slate-900 dark:text-white px-10 py-16 flex flex-col items-start">
      <h1 data-aos="fade-right" className="text-4xl font-bold mb-8 uppercase text-gray-800 dark:text-gray-200">News</h1>
      <div className="w-full max-h-96 overflow-y-auto pr-4 custom-scrollbar">
        {newsItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex items-center text-sm border-b border-gray-300 dark:border-gray-700 py-3"
          >
            <span className="text-gray-500 dark:text-gray-400 font-medium w-24">{item.date}</span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 dark:text-blue-400 flex items-center gap-3 text-l ml-2 hover:underline  font-medium"
              >
                {item.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default News;
