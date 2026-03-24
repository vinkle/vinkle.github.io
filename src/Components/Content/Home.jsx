import { AiFillGithub } from 'react-icons/ai';
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa';
import img from '../../assets/pp_pic_1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiMailSend } from 'react-icons/bi';
import { Helmet } from 'react-helmet';

function Home() {

  const emailUser = 'vinkle';
  const emailDomain = 'dsai.iitm.ac.in';
  const emailLink = `mailto:${emailUser}@${emailDomain}`;

  const social = [
    {
      link: emailLink,
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
      link: 'https://drive.google.com/file/d/13A0YsPpQZVtOvLgdy2U7mVfbCAxZmney/view?usp=sharing',
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
    <>
      <Helmet>
        <title>Vinkle Srivastav</title>
        <meta name="description" content="Welcome to the homepage of Vinkle Srivastav, Assistant Professor at IIT Madras, specializing in surgical data science and AI-driven solutions in healthcare." />
        <meta name="keywords" content="Vinkle Srivastav, surgical data science, AI, healthcare, research" />
        <meta property="og:title" content="Vinkle Srivastav - Home" />
        <meta property="og:description" content="Welcome to the homepage of Vinkle Srivastav, Assistant Professor at IIT Madras specializing in surgical data science and AI-driven solutions in healthcare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinkle.github.io/" />
      </Helmet>
      <header
        id='Home'
        className='bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100 lg:px-20 px-6 py-20 lg:py-28 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center overflow-x-hidden'
      >
        <div className='h-full lg:py-32 flex flex-col justify-center lg:items-start items-center'>
          <h1
            data-aos='fade-down'
            itemProp="name"
            className='font-heading text-3xl lg:text-5xl font-bold mb-6 leading-normal tracking-tight'
          >
            Vinkle Srivastav
          </h1>
          <h2
            data-aos='fade-down'
            itemProp="jobTitle"
            className='text-lg lg:text-[18px] text-stone-600 dark:text-stone-400 font-semibold mb-6 leading-normal'
          >
            Assistant Professor at IIT Madras, Chennai, India.
          </h2>
          <p
            data-aos='fade-down'
            className='text-base lg:text-[16px] mb-6 leading-relaxed'
          >
            I am an Assistant Professor at the <a href='https://wsai.iitm.ac.in/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>Wadhwani School of Data Science and Artificial Intelligence, IIT Madras</a> working in surgical AI. Prior to that, I worked as a Research Scientist in the <a href='https://camma.unistra.fr/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>CAMMA group</a>, a collaborative research team between <a href='https://www.ihu-strasbourg.eu/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>IHU Strasbourg</a> and the <a href='https://www.unistra.fr/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>University of Strasbourg</a>. I obtained my Ph.D. from the University of Strasbourg, where I worked under the guidance of <a href='https://camma.unistra.fr/npadoy/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>Prof. Nicolas Padoy</a>, specializing in unsupervised domain adaptation for human pose estimation in the operating room. Prior to my doctoral studies, I contributed to the development of physical and virtual reality simulators using computer vision and computer graphics for neurosurgical skill evaluation at the <a href='https://www.aiimsnets.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>NETS lab</a>, All India Institute of Medical Sciences (AIIMS), Delhi. I completed my Master of Science (Research) at the Indian Institute of Technology (IIT) Delhi, under the guidance of <a href='https://scholar.google.co.uk/citations?user=ttrJhoUAAAAJ&hl=en' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>Prof. Prem Kalra</a> and <a href='https://en.wikipedia.org/wiki/Ashish_Suri' target='_blank' rel='noopener noreferrer' className='text-amber-700 dark:text-amber-400 font-bold hover:text-amber-900 dark:hover:text-amber-300 hover:underline underline-offset-2'>Prof. Ashish Suri</a>.
          </p>
          <div
            data-aos='fade-down'
            className='flex mt-6 gap-3 flex-wrap justify-center lg:justify-start'
          >
            {social.map((social, index) => (
              <a
                key={index}
                target="_blank"
                href={social.link}
                rel='noopener noreferrer'
                className='border border-stone-300 dark:border-stone-600 rounded-lg px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-200'
                aria-label={social.text}
              >
                <div className='text-base lg:text-lg flex items-center justify-center gap-2'>
                  {social.text} {social.icon}
                </div>
              </a>
            ))}
          </div>
          <div
            data-aos='fade-down'
            className='mt-8 w-full'
          >
            <h3 className='font-heading text-lg lg:text-xl font-semibold mb-3'>Research Interests</h3>
            <ul className='flex flex-wrap gap-2 justify-center lg:justify-start'>
              {researchInterests.map((interest, index) => (
                <li
                  key={index}
                  className='bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-700 px-3 py-1 rounded-full text-xs font-medium'
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
          className='rounded-full ring-4 ring-amber-200 dark:ring-amber-700 shadow-xl w-52 h-52 lg:w-72 lg:h-72'
        />
      </header>
    </>
  );
}

export default Home;
