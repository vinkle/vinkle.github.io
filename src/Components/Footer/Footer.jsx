import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGoogleScholar } from 'react-icons/fa6'

function Footer() {

    const social = [
        {
          link: 'https://www.linkedin.com/in/vinkle-srivastav/',
          icon: <FaLinkedinIn/>,
        },
        {
          link: 'https://github.com/vinkle',
          icon: <AiFillGithub/>,
        },
        {
          link: 'https://scholar.google.fr/citations?user=FDWwdoQAAAAJ&hl=en',
          icon: <FaGoogleScholar/>,
        },        
      ]
      
    return (
        <footer className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <div className='flex space-x-4'>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-green-800 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px]'>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
