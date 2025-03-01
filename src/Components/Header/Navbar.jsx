import React, { useEffect, useState } from 'react'
import light from '../../assets/light.png'
import dark from '../../assets/dark.png'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

function Navbar() {
    const [click, setClick] = useState(false)
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = (event) => {
        setDarkMode(!darkMode)
        if (event.target.checked) {
            document.documentElement.setAttribute('class', 'dark');
        } else {
            document.documentElement.removeAttribute('class');
        }
    }

    useEffect(() => {
        document.documentElement.setAttribute('class', 'dark');
    }, [])

    const handleClick = () => setClick(!click)
    //const navItems = ['Home', 'News', 'TechStack', 'Projects', 'Contact']
    const navItems = ["Home", "News", "Education", "Experience", "Teaching", "Supervision", "Publications", "Talks", "Service", "Skills"]


    const content =
        <>
            <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-white dark:bg-slate-900 transition '>
                <ul className='text-center text-xl p-20'>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item} spy={true} smooth={true}>
                            <li className='my-4 px-24 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>{item}</li>
                        </Link>
                    ))}
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer	">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onChange={toggleTheme}
                                checked={darkMode}
                            />
                            <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px]  after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5  after:w-5 after:transition-all">
                                <img src={light} alt="light"
                                    className="absolute w-4 z-10 m-[4px] text-white " />
                                <img src={dark} alt="dark"
                                    className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                            </div>
                        </label>
                    </div>
                </ul>
            </div>
        </>



    return (
        <>
            <nav className='sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white'>
                <div className='h-10vh flex justify-between z-50 lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800'>
                    <div className='flex items-center flex-1'>
                        <span className='text-1xl font-bold'>
                            <Link to='Home' spy={true} smooth={true}>VINKLE SRIVASTAV</Link>
                        </span>
                    </div>
                    <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                        <ul className='flex gap-8 text-[18px]'>
                            {navItems.map((item, index) => (
                                <Link key={index} to={item} spy={true} smooth={true}>
                                    <li className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'>{item}</li>
                                </Link>
                            ))}
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer	">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onChange={toggleTheme}
                                        checked={darkMode}
                                    />
                                    <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px]  after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5  after:w-5 after:transition-all">
                                        <img src={light} alt="light"
                                            className="absolute w-4 z-10 m-[4px] text-white " />
                                        <img src={dark} alt="dark"
                                            className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                                    </div>
                                </label>
                            </div>
                        </ul>
                    </div>
                    <button
                        className='block md:hidden transition text-2xl'
                        onClick={handleClick} >
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                    <div className='md:hidden'>
                        {click && content}
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar