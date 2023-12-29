import React from 'react'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import illuminate from './assets/illuminate/Illuminate.png'
import defineProblem from './assets/illuminate/Problem.png'
import designPrompt from './assets/illuminate/DC Prompt.png'
import motives from './assets/illuminate/Motivates.png'
import painPoints1 from './assets/illuminate/Pain Points Addressed.png'
import painPoints2 from './assets/illuminate/Pain Points.png'
import techPlatforms from './assets/illuminate/Technology Platforms.png'
import litReview from './assets/illuminate/Lit Review.png'
import q5 from './assets/illuminate/q5.png'
import q10 from './assets/illuminate/Q10.png'
import survery from './assets/illuminate/Survey.png'
import affinityMap from './assets/illuminate/Affinity Map.png'
import competitor from './assets/illuminate/Competitor.png'
import marwa from './assets/illuminate/Marwa.png'
import journeyMap from './assets/illuminate/Journey Map.png'
import userFlow from './assets/illuminate/User Flow.png'
import hS1 from './assets/illuminate/Home Screen1.png'
import hS2 from './assets/illuminate/Home Screen2.png'
import hS3 from './assets/illuminate/Home Screen3.png'
import hS4 from './assets/illuminate/Home Screen4.png'
import appStatus2 from './assets/illuminate/Application Status Pic.png'
import appStatus1 from './assets/illuminate/Application Status.png'
import jobCarousel2 from './assets/illuminate/Job Carousel Pic.png'
import jobCarousel1 from './assets/illuminate/Job Carousel.png'
import midFid from './assets/illuminate/Mid.png'
import highFid from './assets/illuminate/High-fid.png'

const imgStyles = {
  width: '100%',
  height: '50vh',
  padding: 8,
  borderRadius: 16
}

const Illuminate = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold text-5xl pb-4'>
                illuminate
            </h1>
            <p className='pb-4 text-baby-blue font-medium'>
              UX Club at UTD <br/>
              Design Challenge Submission
            </p>
            <img alt='star quest cover' src={illuminate} style={imgStyles}/>
            <span className='p-4'>Check out the Figma Prototype!</span>
        </div>
        <div className='pt-8 flex flex-col text-white items-center ' style={{width: '20vw'}}> 
            <p>
                <span className='font-bold'>Role:</span> UX Designer + UX Researcher<br/><br/>
                <span className='font-bold'>Duration:</span> October 2023 - November 2023<br/><br/>
                <span className='font-bold '>Team:</span> Rehabot Eyassu, Sajween Khan, and  Janelle Navales
            </p>
        </div>

        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold text-3xl pt-8 pb-8'>Overview</h2>
            <p className='text-baby-blue pb-4 text-xl text-center' style={{width: '25vw'}}>
              For the UX Club at UTD’s 2023 Design Challenge, we were
              tasked with creating a platform to empower young professionals.
            </p>
            <div className='flex flex-row p-8 gap-4'>
              <img alt='define the problem' src={defineProblem} 
                    style={{height: '100%', width: '25vw',padding: 8}}/>
              <img alt='design challenge prompt' src={designPrompt}
                    style={{height: '100%', width: '25vw', padding: 8}} />
            </div>
            <h3 className='font-bold text-2xl p-4'>Preliminary<br/> Questions</h3>
            <div className='flex flex-col p-8'>
              <div className='flex flex-row '>
                <img alt='motives' src={motives} 
                      style={{height: '100%', width: '25vw', padding: 8}}/>
                <img alt='current pain points' src={painPoints2}
                      style={{height: '100%', width: '25vw', padding: 8}} />
              </div>
              <div className='flex flex-row'>
                <img alt='pain points addressed' src={painPoints1} 
                      style={{height: '100%', width: '25vw',padding: 8}}/>
                <img alt='tech platforms' src={techPlatforms}
                      style={{height: '100%', width: '25vw', padding: 8}} />
              </div>
            </div>
        </div >
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl p-4'>Part 1: Research + Empathize </h2>
            <p className='p-4 text-left font-semibold' style={{width: '30vw'}}>
              After discussing the preliminary questions, our team kicked off the discovery research. 
              We primarily conducted research via literature reviews and a Qualtrics survey.
            </p>
            <h3 className='font-bold text-2xl pb-4 pt-4'>
              Literature Review: A Look Into Career<br/> Switching Statistics
            </h3>
            <div className='flex flex-row items-center justify-center'>
              <div className='flec flex-col'>
                <img src={litReview} alt="lit review" style={{height: '30vh', width: '100%', padding: 8}} />
              </div>
              
              <div style={{ height: '100%', padding: 8}}>
                <h3 className='text-mustard-yellow font-bold text-2xl'>Findings + Insights</h3>
                <span className='font-bold text-left'>
                  Switching employers has grown in recent 
                  years in a post-pandemic world
                </span>
              </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold text-white text-2xl pb-4 pt-8'>Qualtrics Survey</h3>
          <span className='text-mustard-yellow font-bold text-left text-lg pb-4'>Collect Qualitative Data on
            <ul className='list-disc pl-6 text-white text'>
              <li>
                Short-term/long-term goals
              </li>
              <li>
                Difficulties in professional development
              </li>
              <li>
                Satisfaction with current platforms
              </li>
            </ul>
          </span>

          <span className='text-mustard-yellow font-bold text-left text-lg pb-4'>Collect Quantitative Data on
            <ul className='list-disc pl-6 text-white text-lg'>
              <li>
                Awareness of current resources
              </li>
              <li>
                Confidence in the user’s ability to apply <br/>to jobs
              </li>
              <li>
                Use of current platforms
              </li>
            </ul>
          </span>

          <h3 className='font-bold text-white text-2xl pb-4 pt-8 text-center'>Sample Questions + Selected<br/> Survey Results</h3>
          <div className='pt-4 flex flex-col gap-4'>
                <img src={q5} alt='q5' style={{padding: 4, height: '100%', width: '30vw'}}/>
                <img src={q10} alt='q10' style={{padding: 4, height: '100%', width: '30vw'}}/>
                <img src={survery} alt='survey' style={{padding: 4, height: '100%', width: '30vw'}}/>
          </div>
        </div>

        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl pt-8 pb-4'>Part 2: Define </h2>
            <p className='pt-2 pb-4 font-semibold' style={{width: '30vw'}}>
              While analyzing user feedback from our Qualtrics survey and insights 
              from the literature review we categorized repeating responses/insights 
              into one of ten categories
            </p>    
            <img src={affinityMap} alt='affinity map' 
            style={{padding: 4, height: '100%', width: '40vw'}}/> 
            <div className='font-bold items-center pt-8'>
              <div className='text-xl pb-4'> 
                Opportunities Needed <br/> 
              </div>
                <div className='font-bold text-left text-sm'>
                  After categorizing feedback, we took note of potential opportunities for our solution
                </div>
                <div className=' flex items-center justify-center'>
                  <ul className='list-disc list-inside text-left pl-8 pt-4' style={{width: '30vw' }}>
                    <li>
                      Lack of accuracy on job status tracking
                    </li>
                    <li>
                      Lack of opportunity for nuanced roles
                    </li>
                    <li>
                      Tutorials/guides improve user engagement
                    </li>
                    <li>
                      There is an overwhelming desire to be able to network/talk to to recruiters
                    </li>
                    <li>
                      There is a strong desire to improve professional skills
                    </li>
                  </ul>
                </div>
          </div> 
          <div>
            <h3 className='font-bold text-xl pt-8 pb-4'> 
              Exploratory Research: <br/> 
              Competitor Analysis
            </h3>
            <img alt='competitor' src={competitor} 
                style={{padding: 4, height: '100%', width: '35vw'}}
            />
          </div>
        </div>
        <div className='flex flex-col text-white items-center text-center pt-4'>
            <h2 className='text-baby-blue font-bold text-3xl p-4'>Part 3: Design </h2>
            <h3 className='font-bold text-xl pb-4 pt-4'>
              Journey Mapping<br/>
            </h3>
            <div className='flex flex-row items-center justify-center gap-4 pt-4'>
              <div className='flex flex-col gap-4'>
                <span className='text-mustard-yellow'>
                  Scenario: Marwa's Job Search Journey on “illuminate”
                </span>
                <img alt='marwa' src={marwa} style={{padding: 4, height: '100%', width: '20vw'}}/>
              </div>
              <img src={journeyMap} alt='journey map' style={{padding: 4, height: '100%', width: '20vw'}}/>
            </div>
            <h3 className='font-bold text-xl pb-4 pt-8'>
              User Flow<br/>
            </h3>
            <img alt='user flow' src={userFlow} style={{padding: 4, height: '100%', width: '100%'}}/>
            <h3 className='font-bold text-xl pb-4 pt-8'>
              Sample Low-fidelity Wireframes<br/>
            </h3>

            <div className='flex flex-col'>
              <h3 className='font-bold text-xl pb-4 pt-4 text-left'>
                Home Screen<br/>
                Problem: Creating a navigable UI
              </h3>
              <div className='flex flex-row'>
                <img src={hS1} alt='hs1' style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
                <img src={hS4} alt='hs4'style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
              </div>
              <div className='flex flex-row'>
                <img src={hS2} alt='hs2' style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
                <img src={hS3} alt='hs3' style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
              </div>
            </div>

            <div className='flex flex-col'>
              <h3 className='font-bold text-xl pb-4 pt-4 text-left'>
                Feature 1: Application Status<br/>
                Problem: Anxiety around application status
              </h3>
              <div className='flex flex-col items-center justify-center'>
                <img src={appStatus1} alt='app status 1' style={{
                  padding: 8, 
                  width: '50vw',
                  height: '40vh'
                }}/>
                <img src={appStatus2} alt='app status 1' style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold text-xl pb-4 pt-4 text-left'>
                Feature 2: Job Carousel<br/>
                Problem: Tailer to relevant jobs
              </h3>
              <div className='flex flex-col items-center justify-center'>
                <img src={jobCarousel1} alt='job carousel 1' style={{
                  padding: 8, 
                  width: '50vw',
                  height: '40vh'
                }}/>
                <img src={jobCarousel2} alt='job carousel 2' style={{
                  padding: 8, 
                  width: '25vw',
                  height: '100%'
                }}/>
              </div>
            </div>
        </div>
        <div>
          <h3 className='font-bold text-white text-2xl pb-4 pt-8 text-center'>
            Sample Mid-fidelity
          </h3>
          <img alt='mid fidelity' src={midFid} 
                style={{padding: 4, height: '100%', width: '40vw'}}
            />
          <h3 className='font-bold text-white text-2xl pt-8 text-center'>
            Sample High-fidelity
          </h3>
          <h4 className='font-extralight text-white text-lg text-center pb-4'>Icons from Icons8</h4>
          <img alt='mid fidelity' src={highFid} 
                style={{padding: 4, height: '100%', width: '40vw'}}
            />
        </div>
        <div className='flex flex-col text-white items-center justify-center text-center pt-8'>
          <h2 className='text-baby-blue font-bold text-3xl p-4'>Part 4: Reflection </h2>
          <p className='font-light text-white text-left text-wrap' style={{width: '25vw'}}>
            Until this point, I was not able to practice a more extensive research process. 
            This was the first project where we were able to deploy a formal Qualtrics survey 
            in order to gauge a better understanding of our target audience. This discovery research 
            made a difference in deciding what features we wanted to implement in our final product. 
            For future enhancements, we would like to be able to add a 
            feature that sends reminders of the employer to update the status of applications.
          </p>
        </div>
        <button className='text-white pt-24 pb-16 text-xl font-bold' onClick={() => navigate('/')}>View My Other Projects</button>

    </div>
          
  )
}

export default Illuminate