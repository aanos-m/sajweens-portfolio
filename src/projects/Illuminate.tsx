
import React from 'react'
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import illuminate from '../assets/illuminate/Illuminate.png'
import defineProblem from '../assets/illuminate/Problem.png'
import designPrompt from '../assets/illuminate/DC Prompt.png'
import motives from '../assets/illuminate/Motivates.png'
import painPoints1 from '../assets/illuminate/Pain Points Addressed.png'
import painPoints2 from '../assets/illuminate/Pain Points.png'
import techPlatforms from '../assets/illuminate/Technology Platforms.png'
import litReview from '../assets/illuminate/Lit Review.png'
import q5 from '../assets/illuminate/q5.png'
import q10 from '../assets/illuminate/q10.png'
import survery from '../assets/illuminate/Survey.png'
import affinityMap from '../assets/illuminate/Affinity Map.png'
import competitor from '../assets/illuminate/Competitor.png'
import marwa from '../assets/illuminate/Marwa.png'
import journeyMap from '../assets/illuminate/Journey Map.png'
import userFlow from '../assets/illuminate/User Flow.png'
import hS1 from '../assets/illuminate/Home Screen1.png'
import hS2 from '../assets/illuminate/Home Screen2.png'
import hS3 from '../assets/illuminate/Home Screen3.png'
import hS4 from '../assets/illuminate/Home Screen4.png'
import appStatus2 from '../assets/illuminate/Application Status Pic.png'
import jobCarousel2 from '../assets/illuminate/Job Carousel Pic.png'
import midFid from '../assets/illuminate/Mid.png'
import highFid from '../assets/illuminate/High-fid.png'
import findingsNInsights from '../assets/illuminate/Findings + Insights.png'
import appStat1 from '../assets/illuminate/App Status.png'
import appStat2 from '../assets/illuminate/App Status 2.png'
import jobCaro1 from '../assets/illuminate/Job Carousel 1.png'
import jobCaro2 from '../assets/illuminate/Job Carousel 2.png'

const Illuminate = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold 
             xs:text-2xl sm:text-3xl md:text-4xl text-5xl  
            pb-4'>
                illuminate
            </h1>
            <p className='pb-4 text-baby-blue font-medium font-bitter   xs:text-sm sm:text-sm md:text-lg text-xl'>
              UX Club at UTD <br/>
              Design Challenge Submission
            </p>
            <img alt='star quest cover' src={illuminate}
            className='w-full h-96 md:h-80 sm:h-80 xs:h-72 xs:p-6 sm:p-6'
            // style={imgStyles}
            />
            <a className='p-4 underline font-bold  xs:text-sm sm:text-base md:text-base text-lg '
                href='https://www.figma.com/proto/qJSs0DxCpdYiWdwU8Iurbx/Wireframe%2FPrototype---Iluminate?node-id=91-132&t=MIFrF1206QIDhx9N-1&mode=design'
                target='_blank' rel='noopener noreferrer'>
                Check out the Figma Prototype!
            </a>
        </div>
        <div className='pt-8 flex flex-col text-white items-center text-wrap' > 
            <p className='font-medium font-bitter w-9/12 
                xs:text-sm sm:text-sm text-base'>
                <span className='font-extrabold'>Role:</span> UX Designer + UX Researcher<br/><br/>
                <span className='font-extrabold'>Duration:</span> October 2023 - November 2023<br/><br/>
                <span className='font-extrabold '>Team:</span> Rehabot Eyassu, Sajween Khan, and  Janelle Navales
            </p>
        </div>

        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold  xs:text-lg sm:text-xl md:text-2xl text-3xl  pt-8 pb-8'>Overview</h2>
            <p className='text-baby-blue pb-4  xs:text-sm sm:text-base md:text-lg text-xl 
            text-center font-bitter 
            w-5/12 xs:w-9/12 sm:w-9/12' >
              For the UX Club at UTD’s 2023 Design Challenge, we were
              tasked with creating a platform to empower young professionals.
            </p>
            <div className='flex flex-row xs:flex-col sm:flex-col p-8 gap-4'>
              <img alt='define the problem' src={defineProblem} 
                    className='h-full w-96 md:w-80 sm:w-72 xs:w-72'
                    />
              <img alt='design challenge prompt' src={designPrompt}
                  className='h-full w-96 md:w-80 sm:w-72 xs:w-72'
                    />
            </div>
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl p-4'>
              Preliminary<br/> Questions</h3>
            <div className='flex flex-col p-8'>
              <div className='flex flex-row xs:flex-col sm:flex-col'>
                <img alt='motives' src={motives} 
                className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'
                      />
                <img alt='current pain points' src={painPoints2}
                className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'
                      />
              </div>
              <div className='flex flex-row xs:flex-col sm:flex-col'>
                <img alt='pain points addressed' src={painPoints1} 
                className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'
                      />
                <img alt='tech platforms' src={techPlatforms}
                className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'
                      />
              </div>
            </div>
        </div >
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold 
            xs:text-lg sm:text-xl md:text-2xl text-3xl p-4 font-bitter'>
              Part 1: Research + Empathize </h2>
            <p className='p-4 text-left font-semibold w-5/12 xs:w-9/12 sm:w-9/12 
                  text-base md:text-sm sm:text-sm xs:text-xs' >
              After discussing the preliminary questions, our team kicked off the discovery research. 
              We primarily conducted research via literature reviews and a Qualtrics survey.
            </p>
            <h3 className='font-bold 
             xs:text-base sm:text-lg md:text-xl text-2xl 
            p-8 xs:w-9/12'>
              Literature Review: A Look Into Career Switching Statistics
            </h3>
            <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center gap-8 pt-4'>
                <img src={litReview} alt="lit review" 
                  className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'             
                // style={{height: '40vh', width: '100%', padding: 8}} 
                />
                <img src={findingsNInsights} alt="finding + insights" 
                  className='h-full w-96 md:w-80 sm:w-80 xs:w-80 p-4'             
                  // style={{height: '40vh', width: '100%', padding: 8}}
                 />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold text-white 
            xs:text-base sm:text-lg md:text-xl text-2xl 
          p-8'>Qualtrics Survey</h3>
          <span className='text-mustard-yellow font-bold text-left 
          text-xl md:text-lg sm:text-base xs:text-sm 
          pb-4'>Collect Qualitative Data on
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

          <span className='text-mustard-yellow font-bold text-left
          text-xl md:text-lg sm:text-base xs:text-sm  
          pb-4'>Collect Quantitative Data on
            <ul className='list-disc pl-6 text-white text-xl md:text-lg sm:text-base xs:text-sm '>
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

          <h3 className='font-bold text-white 
          xs:text-base sm:text-lg md:text-xl text-2xl 
          p-8 text-center'>
            Sample Questions + Selected Survey Results</h3>
          <div className='pt-4 flex flex-col items-center gap-4'>
                <img src={q5} alt='q5' className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80'/>
                <img src={q10} alt='q10' className='h-full w-2/5 md:w-80 sm:w-80 xs:w-80'/>
                <img src={survery} alt='survey' className='h-full w-2/5 md:w-80 sm:w-80 xs:w-80'/>
          </div>
        </div>

        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold 
              xs:text-lg sm:text-xl md:text-2xl text-3xl 
            pt-8 pb-4 font-bitter'>Part 2: Define </h2>
            <p className='pt-2 pb-4 font-semibold w-5/12 xs:w-9/12 sm:w-9/12
            text-base md:text-sm sm:text-sm xs:text-xs ' >
              While analyzing user feedback from our Qualtrics survey and insights 
              from the literature review we categorized repeating responses/insights 
              into one of ten categories
            </p>    


            {/* afiinity mapping image needs to be replaced */}

                  <img src={affinityMap} 
                  className='w-full h-2/5 md:h-80 sm:h-80 xs:h-72 p-4 xs:hidden'
                  alt='affinity map' 
                    // style={{
                    //   padding: 4, 
                    //   height: '55vh', 
                    //   width: '100%'
                    // }}
                  /> 


            <div className='font-bold items-center pt-8 flex flex-col justify-center'>
              <div className='xs:text-base sm:text-lg md:text-xl text-2xl  pb-4'> 
                Opportunities Needed <br/> 
              </div>
              <div className='flex justify-center items-center font-bold  text-wrap text-lg md:text-base sm:text-sm xs:text-xs'>
                After categorizing feedback, we took note of potential opportunities for our solution
              </div>
              <div className=' flex items-center justify-center'>
                <ul className='flex flex-col list-disc list-inside text-left pl-8 pt-4 text-lg
                md:text-base sm:text-sm xs:text-xs' >
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
          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-xl md:text-lg sm:text-base xs:text-sm p-8'> 
              Exploratory Research: Competitor Analysis
            </h3>
            <img alt='competitor' src={competitor} 
                // style={{padding: 4, height: '100%', width: '60vw'}}
                className='h-full w-4/6 md:w-96 sm:w-80 xs:w-80 p-2'
            />
          </div>
        </div>
        <div className='flex flex-col text-white items-center text-center pt-4'>
            <h2 className='text-baby-blue font-bold 
             xs:text-lg sm:text-xl md:text-2xl text-3xl 
            p-4 font-bitter'>Part 3: Design </h2>
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl  pb-4 pt-4'>
              Journey Mapping<br/>
            </h3>
            <div className='flex flex-row items-center justify-center gap-4 pt-4'>
              <div className='flex flex-col gap-4 items-center justify-center'>
                <span className='flex text-wrap text-mustard-yellow text-xl md:text-lg sm:text-base xs:text-sm font-semibold'>
                  Scenario: Marwa's Job Search Journey on “illuminate”
                </span>
                <img alt='marwa' src={marwa} 
                  className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80'
                  />
                <img src={journeyMap} alt='journey map' 
                className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80'
                />
              </div>
              
            </div>
            <h3 className='font-bold xs:text-base sm:text-lg md:text-xl text-2xl pb-8 pt-8'>
              User Flow<br/>
            </h3>
            <img alt='user flow' src={userFlow}
              className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80'
             />
            <h3 className='font-bold  xs:text-sm sm:text-sm md:text-lg text-xl p-8'>
              Sample Low-fidelity Wireframes<br/>
            </h3>

            <div className='flex flex-col'>
              <h3 className='font-bold  xs:text-sm sm:text-sm md:text-lg text-xl pb-8 pt-4 text-center'>
                Home Screen<br/>
                Problem: Creating a navigable UI
              </h3>
              <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center'>
                <img src={hS1} alt='hs1' 
                    className='h-full w-1/3 md:w-96 sm:w-80  xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '30vw',
                  //   height: '100%'
                  // }}
                  />
                  <img src={hS4} alt='hs4'
                  className='h-full w-1/3 md:w-96 sm:w-80  xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '30vw',
                  //   height: '100%'
                  // }}
                  />
              </div>
              <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center'>
                <img src={hS2} alt='hs2' className='h-full w-1/3 md:w-96 sm:w-80  xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '30vw',
                  //   height: '100%'
                  // }}
                  />
                <img src={hS3} alt='hs3' className='h-full w-1/3 md:w-96 sm:w-80  xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '30vw',
                  //   height: '100%'
                  // }}
                  />
              </div>
            </div>

            <div className='flex flex-col'>
              <h3 className='font-bold xs:text-sm sm:text-sm md:text-lg text-xl p-8 text-center'>
                Feature 1: Application Status<br/>
                Problem: Anxiety around application status
              </h3>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center gap-4'>
                  <img src={appStat1} alt='app status 1' 
                className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '60vw',
                  //   height: '40vh'
                  // }}
                  />
                  <img src={appStat2} alt='app status 1' 
                  className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-4 xs:p-1 sm:p-1'

                  // style={{
                  //   padding: 8, 
                  //   width: '60vw',
                  //   height: '40vh'
                  // }}
                  />
                </div>
                
                <img src={appStatus2} alt='app status 1'
                  className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-2'
                // style={{
                //   padding: 8, 
                //   width: '30vw',
                //   height: '100%'
                // }}
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold xs:text-sm sm:text-sm md:text-lg text-xl  p-8 text-center'>
                Feature 2: Job Carousel<br/>
                Problem: Tailer to relevant jobs
              </h3>
              <div className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center gap-4'>
                  <img src={jobCaro1} alt='app status 1' 
                className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-2'
                  // style={{
                  //   padding: 8, 
                  //   width: '60vw',
                  //   height: '40vh'
                  // }}
                  />
                  <img src={jobCaro2} alt='app status 1' 
                  className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-4 xs:p-1 sm:p-1'

                  // style={{
                  //   padding: 8, 
                  //   width: '60vw',
                  //   height: '40vh'
                  // }}
                  />
                </div>
                <img src={jobCarousel2} alt='job carousel 2' 
                className='h-full w-2/5 md:w-96 sm:w-80 xs:w-80 p-2'
                // style={{
                //   padding: 8, 
                //   width: '30vw',
                //   height: '100%'
                // }}
                />
              </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold text-white  xs:text-base sm:text-lg md:text-xl text-2xl  pb-8 pt-8 text-center'>
            Sample Mid-fidelity
          </h3>
          <img alt='mid fidelity' src={midFid} 
                className='h-full w-3/5 md:w-96 sm:w-96 xs:w-96 p-2'
            />
          <h3 className='font-bold text-white  xs:text-base sm:text-lg md:text-xl text-2xl  pt-8 text-center'>
            Sample High-fidelity
          </h3>
          <h4 className='font-extralight text-white md:text-base sm:text-sm xs:text-xs text-lg text-center pb-8'>Icons from Icons8</h4>
          <img alt='mid fidelity' src={highFid} 
                className='h-full w-3/5 md:w-96 sm:w-96 xs:w-96 p-2'
            />
        </div>
        <div className='flex flex-col text-white items-center justify-center text-center pt-8'>
          <h2 className='text-baby-blue font-bold 
          xs:text-lg sm:text-xl md:text-2xl text-3xl 
          pt-4 pb-8 font-bitter'>Part 4: Reflection </h2>
          <p className='font-light text-white text-left text-wrap  xs:text-xs sm:text-sm md:text-base text-lg w-5/12 xs:w-9/12 sm:9/12' >
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