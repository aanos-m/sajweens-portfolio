import React from 'react'
import NavBar from '../NavBar'
import cometKnight from '../assets/cometKnight/Comet Knight.png'
import { useNavigate } from 'react-router-dom'
import useCaseDiagram from '../assets/cometKnight/Use Case.png'
import classDiagram from '../assets/cometKnight/Class Diagram.png'
import contextDiagram from '../assets/cometKnight/Context.png'
import ck8 from '../assets/cometKnight/CK 8.png'
import ck2 from '../assets/cometKnight/CK 2.png'
import ck5 from '../assets/cometKnight/CK 5.png'
import ck9 from '../assets/cometKnight/CK 9.png'
import ck3 from '../assets/cometKnight/CK 3.png'
import ck6 from '../assets/cometKnight/CK 6.png'
import ck7 from '../assets/cometKnight/CK 7.png'
import ck4 from '../assets/cometKnight/CK 4.png'
import m1 from '../assets/cometKnight/Mechanic 1.png'
import m2 from '../assets/cometKnight/Mechanic 2.png'
import m3 from '../assets/cometKnight/Mechanic 3.png'
import m4 from '../assets/cometKnight/Mechanic 4.png'
import m5 from '../assets/cometKnight/Mechanic 5.png'
import m6 from '../assets/cometKnight/Mechanic 6.png'
import m7 from '../assets/cometKnight/Mechanic 7.png'

import sparkles from '../assets/general/sparkles.png'

const CometKnight = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl text-5xl  pb-4'>
                Comet Knight
            </h1>
            <span className='pb-4 text-baby-blue font-medium font-bitterv 
             xs:text-sm sm:text-sm md:text-lg text-xl'>
            Systems, Analysis, and Design <br/>
            Class Project
            </span>
            <img alt='star quest cover' src={cometKnight} 
                className='w-full h-96 md:h-80 sm:h-80 xs:h-72 xs:p-6 sm:p-6'
            />
            <a className='p-4   xs:text-sm sm:text-base md:text-base text-lg underline font-bold'
                href='https://www.figma.com/file/mp6iZ3jRj88BYmg054DT4D/Comet-Knight?type=design&node-id=0%3A1&mode=design&t=Y5T2NXIQKdDduaHM-1'
                target='_blank' rel='noopener noreferrer'>
                Check out the Figma File!
            </a>
            <a className='pb-4 xs:text-sm sm:text-base md:text-base text-lg  underline font-bold'
                href='https://docs.google.com/document/d/1z8QV-BsTkqKDhZ8BkX673ELz5Cn6wto9NV4MXj-MTYE/edit?usp=sharing'
                target='_blank' rel='noopener noreferrer'>
                Check out the System Proposal Here!
            </a>
        </div>

        <div className='pt-8 flex flex-col text-wrap text-white items-center 
        w-9/12 xs:text-sm sm:text-sm text-base' > 
            <p className='font-medium font-bitter'>
                <span className='font-extrabold'>Role:</span> UX Designer + UX Researcher<br/><br/>
                <span className='font-extrabold'>Duration:</span> September 2023 - November 2023<br/><br/>
                <span className='font-extrabold'>Team:</span> Sankia Kulkarni, Shapnum Sahibzadah, Sajween Khan, Avery Chen, Miguel Rodriguez
            </p>
        </div>
        
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold  xs:text-lg sm:text-xl md:text-2xl text-3xl  pt-8 pb-8'>Overview</h2>
            <p className='text-baby-blue pb-4 
             xs:text-sm sm:text-base md:text-lg text-xl 
             text-center font-bitter 
             w-5/12 xs:w-9/12 sm:w-9/12' >
                For my Systems, Analysis, and Design class, we were tasked to create a new system. 
                Our group decided to focus on creating a platform to help the UTD community with on-campus 
                automotive services. 
            </p>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue  xs:text-lg sm:text-xl md:text-2xl text-3xl  pt-8 pb-4 font-bitter'>Part 1: Define </h2>
            <h3 className='font-bold  xs:text-base sm:text-lg md:text-xl text-2xl pb-8'>Problem Statement</h3>
            <span className='pb-4 md:text-lg sm:text-base xs:text-sm text-xl text-left w-5/12 xs:w-9/12 sm:w-9/12' >
                Our Comet Knight application will aim to mitigate the inconveniences 
                that hinder the functionality of vehicles:  
                <ul className="list-disc pt-6 pb-6 pr-6 pl-8">
                    <li>
                        Icy weather conditions tend to freeze vehicles windshields, 
                        which impacts visibility and mobility   
                    </li>
                    <li>
                        Busy schedules make it hard for students and staff to find time to 
                        address their automotive needs  
                    </li>
                    <li>
                        Financial burdens on student associated with maintenance and repair services
                        offered off-campus 
                    </li>
                    <li>
                        Vehicle breakdowns which may result from inconsistent or delayed maintenance - 
                        this gives room for convenient, on campus services for vehicle repairs    
                    </li>
                </ul>
            </span>
            <p className='text-baby-blue text-left w-5/12 xs:w-9/12 sm:w-9/12 md:text-sm sm:text-xs xs:text-xs' >
                Our team has decided to develop a subscription-based application named Comet Knight that offers
                automotive services to faculty and students at The University of Texas at Dallas (UTD). 
                This system will improve accessibility for the UTD community to services like fixing flat tires 
                and frozen windshields, replacing dead car batteries, and providing a service to fill up students’ 
                gas on campus. The idea is that these services will be provided by mechanics directly 
                hired by the university. To access these services, students and faculty at UTD will be given 
                the option to pay a one-time up-charge on their parking passes every year, enabling them to access 
                unlimited automotive services for that academic year. 
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue xs:text-lg sm:text-xl md:text-2xl text-3xl  pt-8 pb-8 font-bitter'>Part 2: Models</h2>
            <p className='text-left pb-12 w-5/12 xs:w-9/12 xsm:w-9/12 md:text-sm sm:text-xs xs:text-xs' >
                After brainstorming the main functionalities of our system, we then mapped 
                out different user interactions/features via a context, use case, and class diagrams.
                We looked at what would be required from a UTD user, mechanic, and system administrator. 
                This process assisted us in brainstorming what pages would be featured in our final application 
                and what user journey would take place to access certain features.
            </p>
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl  pb-8'>Context Diagram</h3>
            <img alt='context diagram' src={contextDiagram} 
                className='h-full w-2/5  sm:w-96 xs:w-80'
            />
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl  p-8'>Use Case Diagram</h3>
            <img alt='use case diagram' src={useCaseDiagram} 
              className='h-full w-2/5 sm:w-96 xs:w-80'
            />
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl  p-8'>Class Diagram</h3>
            <img alt='class diagram' src={classDiagram} 
                className='h-full w-2/5  sm:w-96 xs:w-80'
            />
        </div>
        <div className='flex flex-col text-white items-center text-center justify-center'>

            <h2 className='font-bold text-baby-blue xs:text-lg sm:text-xl md:text-2xl text-3xl pt-12 pb-8 font-bitter'>
                Part 3: Design
            </h2>

            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl pb-8'>Regular UTD User's UI</h3>

            <div className="flex flex-row xs:flex-col sm:flex-col justify-between ">
                <div className='flex flex-col p-4 items-center'> 
                    <img src={ck8} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2' />
                    <img src={ck2} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <img src={ck5} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                </div>
                <div className='flex flex-col p-4 items-center'> 
                    <img src={ck9} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <img src={ck3} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <img src={ck6} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                </div>
                <div className='flex flex-col p-4 items-center'> 
                    <img src={ck7} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2' />
                    <img src={ck4} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2' />
                    <div className='flex flex-col text-wrap items-center justify-center h-full w-72 md:w-60 sm:w-56 xs:w-52 pt-8 pb-2' >
                        <div className='flex w-full justify-start'>
                            <img src={sparkles} alt='sparkles.img' className='w-6 h-6'/>
                        </div>
                        <p className=' w-9/12 sm:text-sm xs:text-xs'>
                            The “Knight”concept was
                            created so that your vehicle could be rescued by a mechanic.
                        </p>
                        <div className='flex w-full justify-end'>
                            <img src={sparkles} alt='sparkles.img' className='w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl pt-8 pb-8'>Mechanic's UI</h3>
            <div className="flex flex-row xs:flex-col sm:flex-col justify-between">
                <div className='flex flex-col p-4 items-center'> 
                    <img src={m1} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2' />
                    <img src={m4} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <img src={m6} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                </div>
                <div className='flex flex-col p-4 items-center'> 
                    <img src={m2} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2' />
                    <img src={m5} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <img src={m7} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                </div>
                <div className='flex flex-col p-4 items-center'> 
                    <img src={m3} alt='ck1' className='h-max w-72 md:w-60 sm:w-56 xs:w-52 p-2'/>
                    <div className='flex flex-col text-wrap items-center justify-center h-full w-72 md:w-60 sm:w-56 xs:w-52 pt-8 pb-2'>
                        <div className='flex w-full justify-start'>
                            <img src={sparkles} alt='sparkles.img' className='w-6 h-6'/>
                        </div>
                        <p className='w-9/12 sm:text-sm xs:text-xs'>
                            Overall, I believe that all the use-cases/features we 
                            decided to focus in on are things that the UTD community 
                            would actually use. One improvement to this project can be 
                            researching more about what other features the target
                            audience would like to see in Comet Knight.created so that 
                            your vehicle could be rescued by a mechanic.
                        </p>
                        <div className='flex w-full justify-end'>
                            <img src={sparkles} alt='sparkles.img' className='w-6 h-6'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <button className='text-white pt-24 pb-16 
            xs:text-sm sm:text-sm md:text-base text-lg 
        font-bold' onClick={() => navigate('/')}>View My Other Projects</button>

    </div>
  )
}

export default CometKnight