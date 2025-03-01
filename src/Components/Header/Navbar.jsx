import React, { useEffect, useState } from 'react';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Navbar() {
    const [click, setClick] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = (event) => {
        setDarkMode(!darkMode);
        if (event.target.checked) {
            document.documentElement.setAttribute('class', 'dark');
        } else {
            document.documentElement.removeAttribute('class');
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute('class', 'dark');
    }, []);

    const handleClick = () => setClick(!click);

    // Close the mobile menu and scroll to the section
    const handleNavClick = (item) => {
        setClick(false); // Close the mobile menu
        setTimeout(() => {
            document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to allow the menu to close
    };

    const navItems = ["Home", "News", "Education", "Experience", "Teaching", "Supervision", "Publications", "Talks", "Service", "Skills"];

    const content = (
        <div className='lg:hidden fixed top-16 w-full h-screen bg-white dark:bg-slate-900 transition z-50'>
            <ul className='text-center text-xl p-4'>
                {navItems.map((item, index) => (
                    <li key={index} className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
                        <Link
                            to={item}
                            spy={true}
                            smooth={true}
                            onClick={() => handleNavClick(item)}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
                <div className='mt-8 flex justify-center'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onChange={toggleTheme}
                            checked={darkMode}
                        />
                        <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                            <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white" />
                            <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0" />
                        </div>
                    </label>
                </div>
            </ul>
        </div>
    );

    return (
        <>
            <nav className='sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white z-50'>
                <div className='h-10vh flex justify-between lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800'>
                    <div className='flex items-center flex-1'>
                        <span className='text-1xl font-bold'>
                            <Link to='Home' spy={true} smooth={true}>VINKLE SRIVASTAV</Link>
                        </span>
                    </div>
                    <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                        <ul className='flex gap-8 text-[18px]'>
                            {navItems.map((item, index) => (
                                <li key={index} className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'>
                                    <Link to={item} spy={true} smooth={true}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onChange={toggleTheme}
                                        checked={darkMode}
                                    />
                                    <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                                        <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white" />
                                        <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0" />
                                    </div>
                                </label>
                            </div>
                        </ul>
                    </div>
                    <button
                        className='block md:hidden transition text-2xl'
                        onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
                {click && content}
            </nav>
        </>
    );
}

export default Navbar;