import { React, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa'
import img from '../../assets/profile.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BiMailSend } from 'react-icons/bi'

function Home() {  
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [1000])

  const social = [
    {
      link: 'mailto:srivasta@unistra.fr',
      icon: <BiMailSend/>,
      text: 'Email',
    },    
    {
      link: 'https://www.linkedin.com/in/vinkle-srivastav/',
      icon: <FaLinkedinIn/>,
      text: 'LinkedIn',
    },
    {
      link: 'https://github.com/vinkle',
      icon: <AiFillGithub/>,
      text: 'GitHub',
    },
    {
      link: 'https://scholar.google.com/citations?user=FDWwdoQAAAAJ&hl=en',
      icon: <FaGoogleScholar/>,
      text: 'Scholar',
    },
    {
      link: 'https://drive.google.com/file/d/1Xnv3f_eYEl9BV6kFr9udw8waZPcAcRGC/view?usp=sharing',
      icon: <FaRegFilePdf/>,
      text: 'CV',
    },
  ]

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
  ]

  return (
    <div id='Home' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-20 lg:py-0 px-6 py-16 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center'>
      <div className='h-full lg:py-32 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-down' className='text-[42px] font-semibold mb-6 leading-normal uppercase'>
          Vinkle Srivastav
        </h1>
        <h3 data-aos='fade-down' className='text-[18px] dark:text-gray-400 font-semibold mb-6 leading-normal'>
         Senior Researcher (Chargé de recherche R&D) at IHU Strasbourg, France
        </h3>        
        <p data-aos='fade-down' className='text-[16px] mb-6'>
          I am a senior researcher at the CAMMA lab, IHU Strasbourg, specializing in surgical data science. I completed my Ph.D. at the University of Strasbourg and worked on unsupervised domain adaptation approaches for human pose estimation in the operating room under <a href="https://camma.unistra.fr/npadoy/" target="_blank" className='text-white-100 font-bold hover:text-blue-700'>Prof. Nicolas Padoy</a>. Prior to this, I developed AI-assisted physical and virtual reality simulators for neurosurgery skills evaluation at the All-India Institute of Medical Science, Delhi.
        </p>
        <div data-aos='fade-down' className='flex mt-6 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-4'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-white-800 px-3 hover:text-blue-500 justify-center rounded-full glow p-2'>
                  <div className='text-[20px] flex items-center justify-center gap-2'>
                    {social.text} {social.icon}  
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Research Interests Section */}
        <div data-aos='fade-down' className='mt-6'>
          <h3 className='text-[18px] font-semibold mb-3'>Research Interests</h3>
          <div className='flex flex-wrap gap-2'>
            {researchInterests.map((interest, index) => (
              <span key={index} className='bg-blue-400 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium'>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div> 
      <img data-aos='fade-up' src={img} width={200} height={200} alt="" className='rounded-full border-2 p-1 border-white-500 img_glow' />    
    </div>
  )
}

export default Home