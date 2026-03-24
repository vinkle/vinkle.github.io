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
        <footer className='bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-t border-stone-200 dark:border-stone-700 py-8'>
            <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex space-x-8'>
                    {social.map((social, index) => (
                        <a key={index} target="_blank" href={social.link} rel="noopener noreferrer" className='hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'>
                            <div className='text-[24px]'>
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
                <p className='text-sm text-stone-400 dark:text-stone-500'>
                    &copy; {new Date().getFullYear()} Vinkle Srivastav
                </p>
            </div>
        </footer>
    )
}

export default Footer
