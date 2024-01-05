import React from 'react'
import NavBar from '../NavBar'
import aimbridgeCover from '../assets/aimbridge/Cover.png'
import empathyMap from '../assets/aimbridge/Empathy.png'
import SWOT from '../assets/aimbridge/SWOT.png'
import charter from '../assets/aimbridge/Project Charter.png'
import timeline from '../assets/aimbridge/Timeline.png'
import desktopUI from '../assets/aimbridge/Desktop UI.png'
import mobileUI from '../assets/aimbridge/Mobile UI.png'
import fidelity from '../assets/aimbridge/Fidelity.png'
import dashboard from '../assets/aimbridge/Dashboard.png'
import mainPoints from '../assets/aimbridge/Painpoints.png'
import guidelines from '../assets/aimbridge/Project Guidelines.png'
import { useNavigate } from 'react-router-dom'

const Aimbridge = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold text-5xl pb-4'>
                IT Portfolio Dashboard
            </h1>
            <span className='pb-4 text-baby-blue font-medium font-bitter text-xl'>
              Aimbridge Hospitality<br/>
              IT Project Management Internship
            </span>
            <img alt='star quest cover' src={aimbridgeCover} 
                style={{ width: '100%',
                        height: '50vh',
                        padding: 8,}}
            />
            {/* <span className='pt-4 underline font-bold'>Check out the Figma File!</span>
            <span className='pb-4 underline font-bold'>Check out the System Proposal Here!</span> */}
        </div>
        <div className='pt-8 flex flex-col text-white items-center ' style={{width: '20vw'}}> 
            <p className='font-medium'>
                <span className='font-extrabold'>Role:</span> Project Manager + UX Designer/Researcher<br/><br/>
                <span className='font-extrabold'>Duration:</span> May 2023 - August 2023<br/><br/>
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-3xl pb-8 pt-4'>Overview</h2>
            <p className='text-baby-blue pb-4 text-xl font-bitter w-5/12'  >
              During my time as an IT Project Management Intern at Aimbridge Hospitality, 
              I had the opportunity to follow the UX Design process while designing 
              and implementing a new standard for tracking project status in the IT department.
            </p>
            <h3 className='font-bold text-3xl p-8'>The Problem</h3>
            <p className='text-left items-center justify-center text-lg font-light pb-4 w-5/12' >
              “Aimbridge Hospitality needs a standardized and 
              centralized project tracking format to ensure 
              adequate support to members of the IT Department.”
            </p>
            <h3 className='font-bold text-3xl p-8'>The Solution</h3>
            <span className='text-left items-center justify-center text-lg font-light pb-8'>
              Create an enterprise-wide IT Portfolio Dashboard via Smartsheet
            </span>
        </div>
        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-8 font-bitter'>Part 1: Research + Empathize </h2>
            <h3 className='font-bold text-2xl pb-8 '>User Research</h3>
            <div className='pb-2 text-lg text-left' style={{width: '35vw'}} >
                <span className='font-bold'>User Interviews: </span>
                <ul className="list-disc pl-8 pt-4 pb-4">
                    <li>
                      Interviews across 7 areas of IT about current project tracking
                    </li>
                    <li>
                      Practiced active listening 
                    </li>
                    <li>
                      Discover current pain points
                    </li>
                </ul>
                <span className='font-bold'>Usability testing amongst Hotel Tech, A3, RPA, and LATAM: </span>
                <ul className="list-disc pl-8 pt-4 pb-4">
                    <li>
                    Interviews across IT to strengthen my knowledge about the field and the users’ background
                    </li>    
                </ul>
            </div>
            <h3 className='font-bold text-2xl pt-4 pb-8'>Empathy Mapping</h3>
            <img alt='context diagram' src={empathyMap} style={{width: '40vw', height: '100%'}}/>
            <span className='p-4 text-left text-lg' style={{width: '40vw'}}>
              After conducting user research, I created an empathy 
              map to categorize the user’s thoughts, actions, and feelings
            </span>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-8 font-bitter'>Part 2: Define the Solution </h2>
            <p className='text-left pb-4 w-5/12' >
              With the project background explored. it came time to expand upon the project’s scope. 
              I first looked at the current project tracking system to analyze 
              how the current system could be improved. I then leveraged these insights to create the solution.
            </p>
            <h3 className='font-bold text-2xl pt-4 pb-8'>SWOT Analysis</h3>
            <img alt='SWOT' src={SWOT} style={{width: '45vw', height: '100%'}}/>
            <h3 className='font-bold text-2xl pt-8 pb-8'>Timeline</h3>
            <img alt='time' src={timeline} style={{width: '45vw', height: '100%'}}/>
            <h3 className='font-bold text-2xl pt-8 pb-8'>Writing a Project Charter </h3>
            <img alt='charter' src={charter} style={{width: '45vw', height: '100%'}}/>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-8 font-bitter'>Part 3: Prototyping </h2>
            <h3 className='font-bold text-2xl pb-8'>Low, Mid, High-Fidelity</h3>
            <img alt='fidelity' src={fidelity} style={{width: '45vw', height: '100%'}}/>
            <h3 className='font-bold text-2xl pt-8 pb-8'>Desktop UI</h3>
            <img alt='desktopUI' src={desktopUI} style={{width: '45vw', height: '100%'}}/>
            <h3 className='font-bold text-2xl pt-8 pb-8'>Mobile UI</h3>
            <img alt='mobileUI' src={mobileUI} style={{width: '45vw', height: '100%'}}/>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-8 font-bitter'>Part 4: Testing </h2>
            <p className='text-left pb-8 w-5/12' >
              I was able to build out 4 other mini-dashboards for the Hotel Tech, LATAM, A3, 
              and Robotic Process Automation teams.  
              With these dashboards built, I was able to observe users via usability tests with each team.
            </p>
            <img alt='dashboard' src={dashboard} style={{width: '45vw', height: '100%'}}/>
            <p className='p-4'></p>
            <img alt='mainpoints' src={mainPoints} style={{width: '45vw', height: '100%'}}/>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-8 font-bitter' style={{width: '20vw'}}>Part 5: Maintenance + Reflection </h2>
            <p className='text-left pb-8 w-5/12'>
              In conclusion, I was able to practice an Agile project 
              management methodology and successfully deliver a semi-automated 
              dashboard to the CIO by the completion of my internship. As my first project 
              following a UX process, I was able to learn how design projects require constant 
              redesigns to make a better user experience. For future enhancements, I would wish 
              to automate more of the dashboard with additional formulas. Finally, I left the IT 
              department with a Standard Operating 
              Procedures document for them to be able to refer to after the completion of my internship.
            </p>
            <img alt='guidelines' src={guidelines} style={{width: '45vw', height: '100%'}}/> 
        </div>
        <button className='text-white pt-24 pb-16 text-xl font-bold' onClick={() => navigate('/')}>View My Other Projects</button>
    </div>
  )
}

export default Aimbridge