import React from 'react'
import NavBar from './NavBar'
import cometKnight from './assets/cometKnight/Comet Knight.png'
import { useNavigate } from 'react-router-dom'
import useCaseDiagram from './assets/cometKnight/Use Case.png'
import classDiagram from './assets/cometKnight/Class Diagram.png'
import contextDiagram from './assets/cometKnight/Context.png'
import ck8 from './assets/cometKnight/CK 8.png'
import ck2 from './assets/cometKnight/CK 2.png'
import ck5 from './assets/cometKnight/CK 5.png'
import ck9 from './assets/cometKnight/CK 9.png'
import ck3 from './assets/cometKnight/CK 3.png'
import ck6 from './assets/cometKnight/CK 6.png'
import ck7 from './assets/cometKnight/CK 7.png'
import ck4 from './assets/cometKnight/CK 4.png'
import m1 from './assets/cometKnight/Mechanic 1.png'
import m2 from './assets/cometKnight/Mechanic 2.png'
import m3 from './assets/cometKnight/Mechanic 3.png'
import m4 from './assets/cometKnight/Mechanic 4.png'
import m5 from './assets/cometKnight/Mechanic 5.png'
import m6 from './assets/cometKnight/Mechanic 6.png'
import m7 from './assets/cometKnight/Mechanic 7.png'

import sparkles from './assets/general/sparkles.png'


const CometKnight = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold text-5xl pb-4'>
                Comet Knight
            </h1>
            <span className='pb-4 text-baby-blue font-medium'>
            Systems, Analysis, and Design <br/>
            Class Project
            </span>
            <img alt='star quest cover' src={cometKnight} 
                style={{ width: '100%',
                        height: '40vh',
                        padding: 8,}}
            />
            <span className='pt-4'>Check out the Figma File!</span>
            <span className='pb-4'>Check out the System Proposal Here!</span>
        </div>

        <div className='pt-8 flex flex-col text-white items-center ' style={{width: '20vw'}}> 
            <p>
                <span className='font-bold'>Role:</span> UX Designer + UX Researcher<br/><br/>
                <span className='font-bold'>Duration:</span> September 2023 - November 2023<br/><br/>
                <span className='font-bold'>Team:</span> Sankia Kulkarni, Shapnum Sahibzadah, Sajween Khan, Avery Chen, Miguel Rodriguez
            </p>
        </div>
        
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold text-3xl pt-8 pb-8'>Overview</h2>
            <p className='text-baby-blue pb-4 text-xl' style={{width: '25vw'}} >
            For my Systems, Analysis, and Design class, we were tasked to create a new system. 
            Our group decided to focus on creating a platform to help the UTD community with on-campus 
            automotive services. 
            </p>
        </div>

        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-8 pb-4'>Part 1: Define </h2>
            <h3 className='font-bold text-2xl pb-8'>Problem Statement</h3>
            <span className='pb-4 text-xl text-left' style={{width: '30vw'}} >
                Our Comet Knight application will aim to mitigate the inconveniences 
                that hinder the functionality of vehicles:  
                <ul className="list-disc p-6">
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
            <p className='text-baby-blue text-left' style={{width: '30vw'}}>
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
            <h2 className='font-bold text-baby-blue text-3xl pt-16 pb-8'>Part 2: Models</h2>
            <p className='text-left pl-8 pr-8 pb-16 ' style={{width: '30vw'}}>
                After brainstorming the main functionalities of our system, we then mapped 
                out different user interactions/features via a context, use case, and class diagrams.
                We looked at what would be required from a UTD user, mechanic, and system administrator. 
                This process assisted us in brainstorming what pages would be featured in our final application 
                and what user journey would take place to access certain features.
            </p>
            <h3 className='font-bold text-2xl pb-8'>Context Diagram</h3>
            <img alt='context diagram' src={contextDiagram} style={{width: '100%', height: '35vh'}}/>
            <h3 className='font-bold text-2xl p-8'>Use Case Diagram</h3>
            <img alt='use case diagram' src={useCaseDiagram} style={{width: '100%', height: '60vh'}}/>
            <h3 className='font-bold text-2xl p-8'>Class Diagram</h3>
            <img alt='class diagram' src={classDiagram} style={{width: '100%', height: '60vh'}}/>
        </div>
        <div className='flex flex-col text-white items-center text-center justify-center'>
            <h2 className='font-bold text-baby-blue text-3xl pt-16 pb-8'>Part 3: Design</h2>
            <h3 className='font-bold text-2xl pb-8'>Regular UTD User's UI</h3>
            <div className="flex flex-row justify-between">
                <div className='flex flex-col p-4'> 
                    <img src={ck8} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={ck2} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={ck5} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                </div>
                <div className='flex flex-col p-4'> 
                    <img src={ck9} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={ck3} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={ck6} alt='ck1'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                </div>
                <div className='flex flex-col p-4'> 
                    <img src={ck7} alt='ck1'style={{
                    width: '15vw',
                    height: '70vh',
                    padding: 8}}/>
                    <img src={ck4} alt='ck1'style={{
                    width: '15vw',
                    height: '70vh',
                    padding: 8}}/>
                    <div className='flex text-wrap items-center justify-center' style={{ height: '100%', width: '15vw'}}>
                        <img src={sparkles} alt='sparkles.img' style={{
                            width: 25,
                            height: 25,
                            position: 'relative',
                            top: -50
                        }}/>
                        <p>
                            The “Knight”concept was
                            created so that your vehicle could be rescued by a mechanic.
                        </p>
                        <img src={sparkles} alt='sparkles.img' style={{
                            width: 25,
                            height: 25,
                            position: 'relative',
                            top: 50
                        }}/>
                    </div>
                </div>
            </div>
            <h3 className='font-bold text-2xl pt-8 pb-8'>Mechanic's UI</h3>
            <div className="flex flex-row justify-between">
                <div className='flex flex-col p-4'> 
                    <img src={m1} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={m4} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={m6} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                </div>
                <div className='flex flex-col p-4'> 
                    <img src={m2} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={m5} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                    <img src={m7} alt='mechanic'style={{
                    width: '15vw',
                    height: '60vh',
                    padding: 8}}/>
                </div>
                <div className='flex flex-col p-4'> 
                    <img src={m3} alt='mechanic'style={{
                    width: '15vw',
                    height: '80vh',
                    padding: 8}}/>
                    <div className='flex text-wrap items-center justify-center' style={{ height: '100%', width: '15vw'}}>
                        <img src={sparkles} alt='sparkles.img' style={{
                            width: 25,
                            height: 25,
                            position: 'relative',
                            top: -150
                        }}/>
                        <p>
                            Overall, I believe that all the use-cases/features we 
                            decided to focus in on are things that the UTD community 
                            would actually use. One improvement to this project can be 
                            researching more about what other features the target
                            audience would like to see in Comet Knight.created so that 
                            your vehicle could be rescued by a mechanic.
                        </p>
                        <img src={sparkles} alt='sparkles.img' style={{
                            width: 25,
                            height: 25,
                            position: 'relative',
                            top: 150
                        }}/>
                    </div>
                </div>
            </div>
        </div>
        <button className='text-white pt-24 pb-16 text-xl font-bold' onClick={() => navigate('/')}>View My Other Projects</button>

    </div>
  )
}

export default CometKnight