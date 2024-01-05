import React from 'react'
import NavBar from '../NavBar'
import StarQuestCover from '../assets/starQuest/Star Quest Cover.png'
import StarQuestObjective from '../assets/starQuest/Star Quest Objective.png'
import StarQuestConclusion from '../assets/starQuest/Star Quest Conclusion.png'
import StarQuestDefine from '../assets/starQuest/Star Quest Define.png'
import StarQuestTakeaways from '../assets/starQuest/Star Quest Key Takeaways.png'
import StarQuestResearch from '../assets/starQuest/Star Quest Research.png'
import StarQuestUxResearch from '../assets/starQuest/Star Quest UX Research.png'
import LowFidelity from '../assets/starQuest/Star Quest Low.png'
import MidFidelity from '../assets/starQuest/Star Quest Mid.png'
import HighFidelity from '../assets/starQuest/Star Quest High.png'
import SQ1 from '../assets/starQuest/SQ1.png'
import SQ2 from '../assets/starQuest/SQ2.png'
import SQ3 from '../assets/starQuest/SQ3.png'
import SQ4 from '../assets/starQuest/SQ4.png'
import SQ5 from '../assets/starQuest/SQ5.png'
import SQ6 from '../assets/starQuest/SQ6.png'
import SQ7 from '../assets/starQuest/SQ7.png'
import SQ8 from '../assets/starQuest/SQ8.png'
import SQ9 from '../assets/starQuest/SQ9.png'
import SQ10 from '../assets/starQuest/SQ10.png'
import SQ11 from '../assets/starQuest/SQ11.png'
import DesignGuide from '../assets/starQuest/Star Quest Design Guide.png'
import { useNavigate } from 'react-router-dom'


const imgStyles = {
    width: '100%',
    height: '50vh',
    padding: 8,

}

const StarQuest = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className='flex flex-col text-white items-center text-center'>
            <h1 className='font-bold text-5xl pb-4'>
                Star Quest
            </h1>
            <p className='pb-4 text-baby-blue font-medium font-bitter text-xl'>
                American Institute of  Graphic Arts at <br/>
                UTD’s Best Overall Project Winner 
            </p>
            <img alt='star quest cover' src={StarQuestCover} style={imgStyles}/>
            <a className='p-4 text-lg underline font-bold'
                href='https://www.figma.com/proto/eAvWFG8TQtvG8szSuCJUo2/CreateUTD-Comet-Challenge%3A-Star-Quest-Wireframe?node-id=125-1098&starting-point-node-id=125%3A1098&t=5enSiZ0mNI3AtgQf-1&mode=design'
                target='_blank' rel='noopener noreferrer'>
                Check out the Figma Prototype!
            </a>
        </div>
        <div className='pt-8 flex flex-col text-white items-center ' style={{width: '20vw'}}> 
            <p className='font-medium font-bitter'>
                <span className='font-extrabold'>Role:</span> UX Designer + UX Researcher<br/><br/>
                <span className='font-extrabold'>Duration:</span> September 2023 - November 2023<br/><br/>
                <span className='font-extrabold'>Team:</span> Sankia Kulkarni, Shapnum Sahibzadah, Sajween Khan, Avery Chen, Miguel Rodriguez
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold text-3xl pt-8 pb-8'>Overview</h2>
            <p className='text-baby-blue pb-4 text-xl text-center font-bitter w-5/12' >
                For the American Institute of Graphic Art's 
                CreateUTD challenge, we were tasked to create 
                something that would help our college's food pantry raise awareness.  
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='font-bold text-3xl p-8'>The Objective</h2>
            <img alt='star quest objective' src={StarQuestObjective} 
                style={{
                    width: '40vw',
                    height: '100%',
                    padding: 8,
                }}
            />
            <p className='text-left font-semibold text-lg pb-8 pl-8 pr-2 pt-4 w-5/12' >
                We created a scavenger hunt app to bring a 
                touch of fun to the Comet Cupboard by amping up 
                awareness, energizing donor engagement, 
                and shining bright on social media through a thrilling 
                interactive challenge within the UTD community.
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl p-8 font-bitter' >Part 1: Research + Empathize </h2>
            <img alt='Star Quest Research' src={StarQuestResearch}
                style={{
                    width: '40vw',
                    height: '100%',
                    padding: 8,

                }}
            />
            <h3 className='font-bold text-2xl p-8'>UX Research</h3>
            <img alt='Star Quest UX Research' src={StarQuestUxResearch}
                style={{
                    width: '45vw',
                    height: '100%',
                    padding: 8,
  
                }}
            />
            <h3 className='font-bold text-2xl p-8'>Key Takeaways</h3>
            <img alt='key takeaways' src={StarQuestTakeaways}
                style={{
                    width: '45vw',
                    height: '100%',
                    padding: 8,
   
                }}
            />
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl pb-8 pt-4 font-bitter'>Part 2: Define </h2>
            <img alt='star quest define' src={StarQuestDefine}
                style={{
                    width: '60vw',
                    height: '100%',
                }}
            />
            <p className='text-white text-left pb-8 pt-8 pl-4 pr-4 w-5/12'>
                After interviewing the Comet Cupboard, we identified a need for improved engagement, 
                awareness, and donation tracking. Drawing inspiration from successful interactive 
                experiences like Pokemon Go and impactful campaigns such as the Dove Beauty Campaign, 
                we've distilled these strengths into a concise, enjoyable, and effective challenge for 
                the Comet Cupboard within the UTD community. Users will compete to earn tickets through 
                scavenger hunt participation, donations, or volunteering, with top earners securing prizes 
                and others entering a raffle. The application serves as the challenge hub, 
                facilitating registration, providing scavenger hunt clues, and enabling users to 
                volunteer or donate. Features include a stats page showing remaining challenge time, 
                user placement, and ticket collection, while the map component aids in tracking completed 
                and pending tasks—a comprehensive tool for user progress.
            </p>
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl p-4 font-bitter'>Part 3: Ideate</h2>
            <h3 className='text-white font-bold text-2xl pt-4 pb-8'>Low-fidelity</h3>
            <img alt='Low Fidelity' src={LowFidelity} 
                style={{
                    width: '100%',
                    height: '70vh',
                }}
            />
            <h3 className='text-white font-bold text-2xl p-8'>Mid-fidelity</h3>
            <img alt='Mid Fidelity' src={MidFidelity} 
                style={{
                    width: '100%',
                    height: '70vh',
                }}
            />
            <h3 className='text-white font-bold text-2xl p-8'>High-fidelity</h3>
            <img alt='High Fidelity' src={HighFidelity} 
                style={{
                    width: '100%',
                    height: '70vh',
                }}
            />
            <div className='font-bold text-2xl p-8 text-wrap' role='button'> 
                Final Frames <br/><span >(View Figma file for the rest of the frames)</span>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className='flex flex-col p-4'>
                <img alt='sss' src={SQ1} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ4} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ6} style={{
                    width: '15vw',
                    height: '100%',
                    padding: 8
                }}/>
            </div>
            <div className='flex flex-col p-4'>
                <img alt='sss' src={SQ2} style={{
                    width: '15vw',
                    height: '100%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ7} style={{
                    width: '15vw',
                    height: '100%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ10} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
            </div>
            <div className='flex flex-col p-4'>
                <img alt='sss' src={SQ3} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/> 
                <img alt='sss' src={SQ5} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ8} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ9} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
                <img alt='sss' src={SQ11} style={{
                    width: '15vw',
                    height: '50%',
                    padding: 8
                }}/>
            </div>

        </div>
        <div className='flex flex-col text-white items-center text-center p-4'>
            <h4 className='font-bold text-2xl pb-8'>Design Guide</h4>
            <img alt='design guide' src={DesignGuide}
                style={{
                    width: '100%',
                    height: '70vh',
                    padding: 8,
                }}
            />
        </div>
        <div className='flex flex-col text-white items-center text-center'>
            <h2 className='text-baby-blue font-bold text-3xl p-4 font-bitter'>Part 4: Reflection </h2>
            <p className='text-left text-lg pb-8 text-wrap w-5/12' >
                Star Quest is an immersive experience that 
                invites the UT Dallas community to embark 
                on a galactic journey to feed the galaxy. 
                Our application goes beyond increasing foot 
                traffic to the Comet Cupboard- as it 
                seamlessly integrates social media to 
                amplify outreach efforts to ensure more impactful engagement.
            </p>
            <img alt='star quest conclusion' src={StarQuestConclusion}
                style={{
                    width: '45vw',
                    height: '100%',
                    padding: 8,
                }}
            />
        </div>

        <button className='text-white pt-24 pb-16 text-xl font-bold' onClick={() => navigate('/')}>View My Other Projects</button>
    </div>
  )
}

export default StarQuest