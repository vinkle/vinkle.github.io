import React from 'react';
import Education from './Education';
import Experience from './Experience';

const EducationExperience = () => {
  return (
    <section id="EducationExperience" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Experience />
          </div>
          <div className="flex-1">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;