import React from 'react'
import sparkles from './assets/general/sparkles.png'
import StarQuestCover from './assets/starQuest/Star Quest Cover.png'
import IlluminateCover from './assets/general/Illuminate Cover.png'
import CometKnightCover from './assets/general/Comet Knight Cover.png'
import AimbridgeCover from './assets/general/Aimbridge Cover.png'
import NavBar from './NavBar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className=' pb-4'>
            <div className='flex flex-row justify-end'>
                <img src={sparkles} alt='sparkles.img' style={{
                    width: 25,
                    height: 25,
                    position: 'relative',
                    left: 25,
                    top: 5
                }}/>
            </div>
            <div className='flex flex-row'>
                <img src={sparkles} alt='sparkles.img' style={{
                    width: 25,
                    height: 25,
                }}/>
                <h1 className='
                text-center
                text-white 
                xs:text-2xl sm:text-3xl md:text-4xl text-5xl  
                font-bold '>
                    Hi, I'm Sajween!
                </h1>
            </div>
        </div>
        <div className='pb-16'>
            <p className='font-bitter text-baby-blue 
            xs:text-lg sm:text-xl md:text-2xl text-3xl 
            font-bold text-wrap text-center pb-4 items-center justify-center'>
                I’m a UX Designer/UX <br/> Researcher with a 
                background <br/> in Information Technology <br/> and Systems.
            </p>
            {/* <p className='text-white font-bold text-xl pb-16 pt-4 text-center'>
                Take a look at my projects below
            </p> */}
        </div>
        <div className='flex flex-col items-center justify-between p-5'>
            <div>
                <div className='flex flex-row'>
                    <img src={sparkles} alt='sparkles.img' style={{
                        width: 25,
                        height: 25,
                        position: 'relative',
                        top: -15
                    }}/>
                    <h1 className='
                            text-center
                            text-white 
                            xs:text-2xl sm:text-3xl md:text-4xl text-5xl  
                            font-bold '
                        >
                        My Projects
                    </h1>
                </div>
                <div className='flex flex-row justify-end'>
                    <img src={sparkles} alt='sparkles.img' style={{
                        width: 25,
                        height: 25,
                        position: 'relative',
                        left: 30,
                        top: -15
                    }}/>
                </div>
            </div>
            <section className='flex flex-row xs:flex-col sm:flex-col '>
                <section className='p-4'>
                    <img role='button' 
                        alt='star quest cover' 
                        src={StarQuestCover} 
                        // style={imgStyles}
                        onClick={() => navigate('/projects/StarQuest')}
                        className='w-full h-96 md:h-80 sm:h-80 xs:h-72'
                        />
                    <h3 className='text-white font-bold 
                     xs:text-base sm:text-lg md:text-xl text-2xl 
                    '>Star Quest App</h3>
                    <span className='text-baby-blue 
                    xs:text-xs sm:text-sm md:text-base text-lg
                    font-bitter'>
                        UX Research + UX Design<br/>
                        AIGA CreateUTD Winner
                    </span>
                </section>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' 
                    src={IlluminateCover} 
                    // style={imgStyles}
                    className='w-full h-96 md:h-80 sm:h-80 xs:h-72'
                    onClick={() => navigate('/projects/Illuminate')}/>
                    <h3 className='text-white font-bold 
                    xs:text-base sm:text-lg md:text-xl text-2xl '
                    >illuminate App</h3>
                    <span className='
                    text-baby-blue 
                    xs:text-xs sm:text-sm md:text-base text-lg
                    font-bitter'>
                        UX Research + UX Design<br/>
                        UX Design Challenge Submission
                    </span>
                </section>
            </section>
            <section className='flex flex-row xs:flex-col sm:flex-col '>
                <section className='p-4'>
                    <img role='button' 
                    alt='star quest cover' 
                    src={CometKnightCover} 
                    // style={imgStyles} 
                    className='w-full h-96 md:h-80 sm:h-80 xs:h-72'
                    onClick={() => navigate('/projects/CometKnight')}/>
                    <h3 className='text-white font-bold xs:text-base sm:text-lg md:text-xl text-2xl'>
                        Comet Knight App</h3>
                    <span className='text-baby-blue font-bitter
                    xs:text-xs sm:text-sm md:text-base text-lg'>
                    UX Design + UML Diagramming<br/>
                    Systems Class Project
                    </span>
                </section>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' src={AimbridgeCover} 
                    // style={imgStyles}
                        className='w-full h-96 md:h-80 sm:h-80 xs:h-72'
                        onClick={() => navigate('/projects/Aimbridge')}/>
                    <h3 className='text-white font-bold xs:text-base sm:text-lg md:text-xl text-2xl'>
                        IT Portfolio Dashboard</h3>
                    <span className='text-baby-blue font-bitter
                    xs:text-xs sm:text-sm md:text-base text-lg'>
                        UX Research + UX Design<br/>
                        Aimbridge Hospitality Internship
                    </span>
                </section>
            </section>
        </div>
        <Contact/>
        <a className='flex text-white items-center justify-center p-4 text-lg font-bold gap-1 
            hover:bg-baby-blue rounded-2xl' 
            href='https://www.linkedin.com/in/sajween/' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon sx={{width: 25, height: 25}}/> LinkedIn 
        </a>
    </div>
  )
}

export default Home