import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function News() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const newsItems = [
    { date: '2025/02/03', text: 'Two papers accepted at IPCAI 2025' },
    { date: '2024/09/25', text: 'One paper accepted at NeurIPS 2024' },
    // { date: '2024/06/19', text: 'Best Paper Award at IPCAI 2024!' },
    // { date: '2024/06/17', text: 'Two papers accepted at MICCAI 2024' },
    // { date: '2024/02/23', text: 'One paper accepted at CVPR 2024' },
    // { date: '2024/02/23', text: 'One paper accepted at IPCAI 2024' },
  ];

  return (
    <div id="News" className="bg-white text-black dark:bg-slate-900 dark:text-white py-5 px-4 lg:px-10">
      <h1 data-aos="fade-right" className="text-2xl font-bold mb-4 uppercase text-gray-800 dark:text-gray-300 border-b border-blue-500 pb-1">News</h1>
      <div className="space-y-2">
        {newsItems.map((item, index) => (
          <div key={index} data-aos="fade-down" data-aos-delay={index * 10} className="flex text-sm border-b border-gray-800 dark:border-gray-700 py-1">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-28">{item.date}</span>
            <span className="text-gray-800 dark:text-gray-200 flex-1">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;