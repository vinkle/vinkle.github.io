import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Talks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const talksItems = [
    { date: 'HealthTech Day 2024, Strasbourg', text: "Multi-modality learning for automated report generation from 3D medical images in laryngeal cancer.", link: 'https://healthtech.unistra.fr/news/news/healthtech-day' },
    { date: 'DSAI 2023, Strasbourg', text: "Dissecting Self-Supervised Learning Methods for Surgical Computer Vision.", link: 'https://dsai.icube.unistra.fr/index.php?title=Data_Science_and_Artificial_Intelligence_Workshop_(April_2023)' },
    { date: 'EDU4SDS 2023, 2024, Strasbourg', text: "Human pose estimation in the operating room.", link: 'https://www.edu4sds.org/archives-2024/' },
    { date: 'DSAI 2022, Strasbourg', text: "Self-supervised multi-view multi-person 3D human pose estimation.", link: 'https://dsai.icube.unistra.fr/index.php?title=Data_Science_and_Artificial_Intelligence_Workshop_(Mai_2022)' },
    { date: 'GDR ISIS 2022, Paris', text: "Unsupervised domain adaptation for clinician pose estimation and instance segmentation in the OR.", link: 'http://intranet.gdr-isis.fr/index.php?page=inscription-individuelle-a-une-reunion-isis&idreunion=468' },
    { date: 'HealthTech Day 2022, Strasbourg', text: "Self-supervised approaches for human pose estimation in the operating room.", link: 'https://healthtech.unistra.fr/fr/actualites/actualite/healthtech-day-2022' },
    { date: 'DSAI 2019, Strasbourg', text: "Human pose estimation on privacy-preserving low-resolution depth images.", link: 'https://dsai.icube.unistra.fr/index.php?title=Data_Science_and_Artificial_Intelligence_Workshop' },
  ];

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