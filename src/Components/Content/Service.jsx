import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResearchAndService = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="Service" className="bg-white dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
      <h1 data-aos="fade-right" className="text-5xl md:text-6xl font-bold mb-20 leading-tight uppercase text-white-600 dark:text-white-400">
        Service & Leadership
      </h1>

      <div data-aos="fade-down" className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-4">
          <li>
            <a href="https://edu4sds.org/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Surgical Data Science Summer School
            </a>
            : <strong className="font-semibold">Co-organizer</strong> for the past three years. The Surgical Data Science Summer School is a unique educational initiative (≈30% selection rate) designed to bridge the gap between clinicians and computer scientists, fostering collaboration at the intersection of medicine and technology. Through a hands-on interdisciplinary one-week intensive program, the participants engage with interdisciplinary international faculty, working in teams to develop AI-driven solutions with real clinical impact. With guidance from expert mentors, access to specialized state-of-the-art datasets, and advanced computing resources, the SDS Summer School aims to shape the next generation of AI-driven solutions in surgical data science and healthcare.
          </li>
          <li>Area chair for IPCAI 2025 and MICCAI 2025.</li>
          <li>Award panel member for IPCAI 2023.</li>
          <li>
            Co-organizer of the{' '}
            <a href="https://dsai.icube.unistra.fr/index.php/Deep_Learning_Tutorial_2019" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              DSAI workshop 2021
            </a>.
          </li>
          <li>Program committee member at ECCV - Medical Computer Vision (ECCV-MCV) 2022.</li>
          <li>
            <strong className="font-semibold">Conference Reviewer:</strong>
            <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
              {['MICCAI: 2020-2024', 'CVPR: 2023-2025', 'IPCAI: 2022-2023', 'ICCV: 2025', 'AAAI: 2025', 'ECCV: 2022', 'ICRA: 2022'].map((item, index) => (
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
  );
};

export default ResearchAndService;