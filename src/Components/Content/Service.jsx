import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const ResearchAndService = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Explore Vinkle Srivastav's contributions and involvement in various academic and professional services, including conference organization, reviewing, and educational initiatives." />
        <meta name="keywords" content="Vinkle Srivastav, service, activities, contributions, involvement, conference organization, reviewing, educational initiatives" />
        <meta property="og:title" content="Vinkle Srivastav - Service & Activities" />
        <meta property="og:description" content="Explore Vinkle Srivastav's contributions and involvement in various academic and professional services, including conference organization, reviewing, and educational initiatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io" />
      </Helmet>
      <section id="Service" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
        <h1 data-aos="fade-right" className="text-5xl md:text-6xl font-bold mb-20 leading-tight uppercase text-white-600 dark:text-white-400">
          Service & Activities
        </h1>

        <div data-aos="fade-down" className="border-b border-gray-200 dark:border-gray-700 pb-8">
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-4">
            <li>
              <a href="https://edu4sds.org/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" aria-label="Visit the Surgical Data Science Summer School website">
                Surgical Data Science Summer School
              </a>
              : <strong className="font-semibold">Co-organizer</strong> for the past three years. The Surgical Data Science Summer School is a unique educational initiative (≈30% selection rate) designed to bridge the gap between clinicians and computer scientists, fostering collaboration at the intersection of medicine and technology. Through a hands-on interdisciplinary one-week intensive program, the participants engage with interdisciplinary international faculty, working in teams to develop AI-driven solutions with real clinical impact. With guidance from expert mentors, access to specialized state-of-the-art datasets, and advanced computing resources, the SDS Summer School aims to shape the next generation of AI-driven solutions in surgical data science and healthcare.
            </li>
            <li>Area chair for IPCAI 2025 and MICCAI 2025.</li>
            <li>Award panel member for IPCAI 2023 and IPCAI 2025.</li>
            <li>
              Co-organizer of the{' '}
              <a href="https://dsai.icube.unistra.fr/index.php/Deep_Learning_Tutorial_2019" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" aria-label="Visit the DSAI workshop 2021 website">
                DSAI workshop 2021
              </a>.
            </li>
            <li>
              Part of the local organizing team of the {' '}
              <a href="https://miccai2021.org/en/OUR-VISION.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" aria-label="MICCAI 2021 website">
              MICCAI 2021 conference.
              </a>.
            </li>            
            <li>Program committee member at ECCV - Medical Computer Vision (ECCV-MCV) 2022.</li>
            <li>
              <strong className="font-semibold">Conference Reviewer:</strong>
              <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
                {['NeurIPS: 2025', 'MICCAI: 2020-2024', 'CVPR: 2023-2025', 'IPCAI: 2022-2023', 'AAAI: 2025', 'ECCV: 2022', 'ICRA: 2022'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong className="font-semibold">Journal Reviewer:</strong>
              <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
                {['TMI: IEEE Transactions on Medical Imaging', 'MedIA: Medical Image Analysis', 'IJCARS: International Journal of Computer-Assisted Radiology and Surgery', 'TNNLS: IEEE Transactions on Neural Networks and Learning Systems'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ResearchAndService;