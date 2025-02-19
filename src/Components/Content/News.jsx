import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function News() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const newsItems = [
    { date: '', text: 'Registration is open for the 2025 edition of the Surgical Data Science Summer School. Apply now!', link: 'https://edu4sds.org/' },
    { date: '2025/02/03', text: 'Two papers accepted at IPCAI 2025' },
    { date: '2024/09/25', text: 'One paper accepted at NeurIPS 2024' },
    { date: '2024/06/17', text: 'Two papers accepted at MICCAI 2024' },
    { date: '2024/02/23', text: 'One paper accepted at CVPR 2024' },
    { date: '2024/02/23', text: 'One paper accepted at IPCAI 2024' },
  ];

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