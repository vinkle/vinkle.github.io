import { React, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {  FaGoogleScholar } from "react-icons/fa6";
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
      link: '/src/assets/cv_vinkle_srivastav.pdf',
      icon: <FaRegFilePdf/>,
      text: 'CV',
    },
  ]

  return (
    <div id='Home' className=' bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center '>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          Vinkle Srivastav
        </h1>
        <h3 data-aos='fade-right' className='text-[18px] dark:text-gray-00 font-semibold mb-8 leading-normal'>
         Senior Researcher (Chargé de recherche R&D) at IHU Strasbourg, France
        </h3>        
        <p data-aos='fade-left'>I am a senior researcher at the CAMMA lab, IHU Strasbourg, specializing in surgical data science. I completed my Ph.D. at the University of Strasbourg and worked on unsupervised domain adaptation approaches for human pose estimation in the operating room. Prior to this, I developed AI-assisted physical and virtual reality simulators for neurosurgery skills evaluation at the All-India Institute of Medical Science, Delhi.</p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-4'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-white-600 hover:text-white-500 justify-center rounded-full glow p-3'>
                <div className='text-[22px] flex items-center justify-center gap-3'>
                {social.text} {social.icon}  
                </div>
              </a>
              ))}
            </div>
          </div>
        </div>
      </div> 
      <img data-aos='fade-up' src={img} width={200} height={200} alt="" className='rounded-full border-2 p-1 border-white-500 img_glow' />    
    </div>

  )
}

export default Home
