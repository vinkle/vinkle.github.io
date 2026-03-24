import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { talksItems } from '../../All_Lists/TalkItems';
import { Helmet } from 'react-helmet';

const Talks = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's talks and presentations at various conferences and events." />
        <meta name="keywords" content="Vinkle Srivastav, talks, presentations, conferences, events" />
        <meta property="og:title" content="Vinkle Srivastav - Talks" />
        <meta property="og:description" content="Explore Vinkle Srivastav's talks and presentations at various conferences and events." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="Talks" className="bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1
              data-aos="fade-right"
              className="font-heading text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-100"
            >
              Talks
            </h1>
            <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {talksItems.map((item, index) => (
              <article
                key={index}
                data-aos="fade-down"
                className="flex flex-col sm:flex-row justify-between border-b border-stone-200 dark:border-stone-700 pb-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-200 rounded-lg p-3"
              >
                <span className="text-stone-500 dark:text-stone-400 font-medium w-48 sm:w-64 mb-2 sm:mb-0 whitespace-nowrap">
                  {item.date}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 dark:text-stone-200 flex-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-200 ml-4"
                  aria-label={`View ${item.text} talk`}
                >
                  {item.text}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Talks;
