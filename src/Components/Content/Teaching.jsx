import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { teachingItems } from '../../All_Lists/TeachingItems';
import { Helmet } from 'react-helmet';

const Teaching = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's teaching experience and contributions at Université de Strasbourg and other institutions." />
        <meta name="keywords" content="Vinkle Srivastav, teaching, education, courses, lectures, Université de Strasbourg" />
        <meta property="og:title" content="Vinkle Srivastav - Teaching Experience" />
        <meta property="og:description" content="Explore Vinkle Srivastav's teaching experience and contributions at Université de Strasbourg and other institutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="Teaching" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
        <h1
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white-500"
        >
          Teaching Experience
          <span className="text-[20px] block normal-case font-medium text-gray-500 dark:text-gray-400">
            Université de Strasbourg (Vacataire).
          </span>
          <span className="text-[16px] block normal-case font-medium text-gray-500 dark:text-gray-400">
            Taught with 50% theory and 50% practical coursework.
          </span>
        </h1>

        <div className="space-y-1">
          {teachingItems.map((item, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row justify-between border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-50 rounded-lg p-3"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium w-32 mb-2 sm:mb-0">
                {item.date}
              </span>
              <span className="text-gray-800 dark:text-gray-200 flex-1">
                {item.text}
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Teaching;