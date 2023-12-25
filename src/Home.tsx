import React from 'react'
import sparkles from './assets/sparkles.png'
import StarQuestCover from './assets/Star Quest Cover.png'
import IlluminateCover from './assets/Illuminate Cover.png'
import CometKnightCover from './assets/Comet Knight Cover.png'
import AimbridgeCover from './assets/Aimbridge Cover.png'

const imgStyles = {
    width: '100%',
    height: '40vh',
    padding: 4,
    borderRadius: 16
}

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='pt-16 pb-4'>
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
                <h1 className='text-white text-4xl font-bold '>
                    Hi, I'm Sajween!
                </h1>
            </div>
        </div>
        <div className='pb-16'>
            <p className='text-baby-blue text-3xl font-bold text-wrap pb-4 items-center justify-center'>
                I’m a UX Designer/UX <br/> Researcher with a 
                background <br/> in Information Technology <br/> and Systems.
            </p>
            <p className='text-white font-bold text-xl pb-16 pt-4'>
                Take a look at my projects below
            </p>
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
                    <h1 className='text-white text-4xl font-bold'>
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
            <section className='flex flex-row '>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' src={StarQuestCover} style={imgStyles}
                        onClick={() => console.log('image clicked')}/>
                    <h3 className='text-white font-bold text-2xl'>Star Quest App</h3>
                    <span className='text-baby-blue'>
                        UX Research + UX Design<br/>
                        AIGA CreateUTD Winner
                    </span>
                </section>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' src={IlluminateCover} style={imgStyles}
                        onClick={() => console.log('image clicked')}/>
                    <h3 className='text-white font-bold text-2xl'>illuminate App</h3>
                    <span className='text-baby-blue'>
                        UX Research + UX Design<br/>
                        UX Design Challenge Submission
                    </span>
                </section>
            </section>
            <section className='flex flex-row '>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' src={CometKnightCover} style={imgStyles} 
                        onClick={() => console.log('image clicked')}/>
                    <h3 className='text-white font-bold text-2xl'>Comet Knight App</h3>
                    <span className='text-baby-blue'>
                    UX Design + UML Diagramming<br/>
                    Systems Class Project
                    </span>
                </section>
                <section className='p-4'>
                    <img role='button' alt='star quest cover' src={AimbridgeCover} style={imgStyles}
                        onClick={() => console.log('image clicked')}/>
                    <h3 className='text-white font-bold text-2xl'>IT Portfolio Dashboard</h3>
                    <span className='text-baby-blue'>
                        UX Research + UX Design<br/>
                        Aimbridge Hospitality Internship
                    </span>
                </section>
            </section>
        </div>
    </div>
  )
}

export default Home