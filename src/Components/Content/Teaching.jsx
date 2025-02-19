import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Teaching = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const teachingItems = [
    { date: '2024 - 2025', text: "9 hours of TPs for 'Introduction to AI' and 21 hours of TPs for 'Machine Learning and Deep Learning'" },
    { date: '2023 - 2024', text: "9 hours of TPs for 'Introduction to AI' and 34 hours of TPs for 'Machine Learning and Deep Learning'" },
    { date: '2022 - 2023', text: "35 hours of TPs for 'Machine Learning and Deep Learning'" },
    { date: '2021 - 2022', text: "4 hours of TPs for 'Deep Learning for Computer Vision'" },
    { date: '2020 - 2021', text: "12 hours of TPs for 'Deep Learning for Computer Vision' and 4 hours of TPs for 'OpenCV with C++'" },
    { date: '2019 - 2020', text: "5 hours of TPs for 'Deep Learning for Computer Vision' and 8 hours of TPs for 'OpenCV with C++'" },
  ];

  return (
    <section id="Teaching" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500"
      >
        Teaching Experience
        <span className="text-[20px] block normal-case font-medium text-gray-500 dark:text-gray-400">
          Université de Strasbourg (Vacataire/CdE)
        </span>
      </h1>

      <div className="space-y-4">
        {teachingItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-delay={index * 10}
            className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-50 rounded-lg p-3"
          >
            <span className="text-gray-600 dark:text-gray-400 font-medium w-32 mb-2 sm:mb-0">
              {item.date}
            </span>
            <span className="text-gray-800 dark:text-gray-200 flex-1">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;