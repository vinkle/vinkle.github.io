import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { teachingItems } from '../../All_Lists/TeachingItems';
import { Helmet } from 'react-helmet';

const Teaching = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
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
      <section id="Teaching" className="bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100">
              Teaching Experience
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
            <span className="text-base block mt-4 font-medium text-stone-500 dark:text-stone-400">
              Université de Strasbourg (Vacataire).
            </span>
            <span className="text-sm block font-medium text-stone-500 dark:text-stone-400">
              Taught with 50% theory and 50% practical coursework.
            </span>
          </div>

          <div className="space-y-1">
            {teachingItems.map((item, index) => (
              <article
                key={index}
                className="flex flex-col sm:flex-row justify-between border-b border-stone-200 dark:border-stone-700 pb-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 rounded-lg p-3"
              >
                <span className="text-stone-500 dark:text-stone-400 font-medium w-32 mb-2 sm:mb-0">
                  {item.date}
                </span>
                <span className="text-stone-700 dark:text-stone-200 flex-1">
                  {item.text}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teaching;
