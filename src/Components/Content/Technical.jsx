import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { category: 'Programming Languages', items: ['C', 'C++', 'Python', 'Matlab'] },
  { category: 'Deep Learning Frameworks', items: ['Pytorch', 'Tensorflow'] },
  { category: 'Libraries', items: ['OpenCV', 'Armadillo', 'MathGL', 'OpenGL', 'ITK', 'VTK', 'VEGA FEM', 'Chai-3D'] },
  { category: 'Databases', items: ['MySQL', 'SQLite'] },
  { category: 'Tools', items: ['LaTeX', 'Unity 3D', 'Blender', 'MeshLab', '3D Slicer', 'ITK-Snap', 'CMake'] },
  { category: 'Web Dev', items: ['HTML', 'CSS', 'JavaScript', 'Joomla', 'Moodle', 'OpenEdx', 'GitHub Pages', 'Vite', 'Jakyll', 'Hugo'] },
  { category: 'Hardware', items: ['Arduino', 'Raspberry Pi'] }
];

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="Technical_skills" className="bg-gray-50 dark:bg-slate-900 text-black dark:text-white py-20 px-10 lg:px-20">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-gray-700 dark:text-white"
      >
        Technical Skills
      </h1>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} data-aos="fade-up" className="p-5 border-b border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">{skill.category}</h2>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
