import { React, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa';
import img from '../../assets/profile.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiMailSend } from 'react-icons/bi';

function Home() {  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const social = [
    {
      link: 'mailto:srivasta@unistra.fr',
      icon: <BiMailSend />,
      text: 'Email',
    },    
    {
      link: 'https://www.linkedin.com/in/vinkle-srivastav/',
      icon: <FaLinkedinIn />,
      text: 'LinkedIn',
    },
    {
      link: 'https://github.com/vinkle',
      icon: <AiFillGithub />,
      text: 'GitHub',
    },
    {
      link: 'https://scholar.google.com/citations?user=FDWwdoQAAAAJ&hl=en',
      icon: <FaGoogleScholar />,
      text: 'Scholar',
    },
    {
      link: 'https://drive.google.com/file/d/1Xnv3f_eYEl9BV6kFr9udw8waZPcAcRGC/view?usp=sharing',
      icon: <FaRegFilePdf />,
      text: 'CV',
    },
  ];

  const researchInterests = [
    "Surgical data science",
    "Surgical activity recognition",
    "Vision-language models",
    "Self-supervised learning",
    "Label-efficient learning",
    "Multi-view 3D human pose estimation",
    "Multi-view human activity analysis",
    "3D medical image analysis",
    "Scientific machine learning",
    "Scientific simulation"
  ];

  return (
    <section 
      id='Home' 
      className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-20 px-4 py-16 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center overflow-x-hidden'
    >
      <div className='h-full lg:py-32 flex flex-col justify-center lg:items-start items-center'>
        <h1 
          data-aos='fade-down' 
          itemProp="name" 
          className='text-4xl lg:text-[42px] font-semibold mb-6 leading-normal uppercase'
        >
          Vinkle Srivastav
        </h1>
        <h2 
          data-aos='fade-down' 
          itemProp="jobTitle" 
          className='text-lg lg:text-[18px] dark:text-gray-400 font-semibold mb-6 leading-normal'
        >
          Senior Researcher (Chargé de recherche R&D) at IHU Strasbourg, France
        </h2>        
        <p 
          data-aos='fade-down' 
          className='text-base lg:text-[16px] mb-6'
        >
          I am a senior researcher at the CAMMA lab, IHU Strasbourg, with a focus on surgical data science. I obtained my Ph.D. from the University of Strasbourg, where I worked under the guidance of <a href='https://camma.unistra.fr/npadoy/' target='_blank' rel='noopener noreferrer' className='text-white-100 font-bold hover:text-blue-700'>Prof. Nicolas Padoy</a>, specializing in unsupervised domain adaptation for human pose estimation in the operating room. Before that, I contributed to the development of AI-driven physical and virtual reality simulators for neurosurgical skill evaluation at the All-India Institute of Medical Science, Delhi, and the Indian Institute of Technology, Delhi.
        </p>
        <div 
          data-aos='fade-down' 
          className='flex mt-6 gap-2 flex-wrap justify-center lg:justify-start'
        >
          {social.map((social, index) => (
            <a 
              key={index} 
              target="_blank" 
              href={social.link} 
              rel='noopener noreferrer' 
              className='text-white-800 px-3 hover:text-blue-500 justify-center rounded-full glow p-2'
            >
              <div className='text-lg lg:text-[20px] flex items-center justify-center gap-2'>
                {social.text} {social.icon}  
              </div>
            </a>
          ))}
        </div>
        {/* Research Interests Section */}
        <div 
          data-aos='fade-down' 
          className='mt-6 w-full'
        >
          <h3 className='text-lg lg:text-[18px] font-semibold mb-3'>Research Interests</h3>
          <ul className='flex flex-wrap gap-2 justify-center lg:justify-start'>
            {researchInterests.map((interest, index) => (
              <li 
                key={index} 
                className='bg-blue-400 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium'
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div> 
      <img 
        data-aos='fade-up' 
        src={img} 
        width={200} 
        height={200} 
        alt="Vinkle Srivastav Profile Picture" 
        className='rounded-full border-2 p-1 border-white-500 img_glow w-48 h-48 lg:w-64 lg:h-64' 
      />   
    </section>
  );
}

export default Home;