import React from 'react'
import sparkles from './assets/general/sparkles.png'
import AboutMe1 from './assets/general/About Me 1.png'
import AboutMe2 from './assets/general/About Me 2.png'
import AboutMe3 from './assets/general/About Me 3.png'
import AboutMe4 from './assets/general/Bullet Journal.png'
import NavBar from './NavBar'

const imgStyles = {
    width: 'auto',
    height: '30vh',
    padding: 4,
    margin: 4
}

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black font-openSans'>
        <NavBar/>
        <div className='pt-16 pb-4'>
            <div className='flex flex-row'>
                <img src={sparkles} alt='sparkles.img' style={{
                    width: 25,
                    height: 25,
                    position: 'relative',
                    top: -15
                }}/>
                <h1 className='text-white xs:text-2xl sm:text-3xl md:text-4xl text-5xl   font-bold'>
                    About Me
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

        <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center pb-4' 
            style={{height: 'auto'}}>
            <img src={AboutMe1} style={imgStyles} alt='img'/>
            <p className='text-baby-blue text-left 
            w-full
            text-wrap  
            xs:text-sm sm:text-base md:text-lg text-xl 
            p-4 font-bitter'>
                I’m an undergraduate at the University of Texas at Dallas 
                studying Information Technology and Systems and graduating 
                in May 2024. Coming from a more technical background, I use my
                knowledge about UML diagramming, data visualization, 
                and introductory coding in JavaScript/SQL/HTML to create more 
                fulfilling user experiences.
            </p>
        </div>

        <h4 className='text-white font-bold text-xl text-center p-4 '>You can also find me...</h4>

        <div className='flex flex-row xs:flex-col-reverse sm:flex-col-reverse items-center justify-center pb-4' style={{height: 'auto'}}> 
            <section style={{height: '100%'}}>
                <h4 className='text-white text-wrap text-lg font-bold p-4'>
                    Empowering Women in Tech
                </h4>
                <p className='text-baby-blue text-left 
                w-full
                text-wrap  
                xs:text-sm sm:text-base md:text-lg text-xl 
                p-4 font-bitter'>
                    As the Logistics Director of WEHack, the largest hackathon 
                    geared toward women and non-binary people in DFW, I am in 
                    charge of budgeting sponsorship money and leading a team of 4 
                    logistics coordinators to handle event planning for our annual hackathon at UT Dallas. 
                    Additionally, I work very closely with the marketing, industry, and experience teams.
                </p>
            </section>

            <img src={AboutMe2} style={imgStyles} alt='img'/>
        </div>

        <div className='flex flex-row xs:flex-col sm:flex-col items-center justify-center pb-4' style={{ height: 'auto'}}>
            <img src={AboutMe3} style={imgStyles} alt='img'/>
            <section>
                <h4 className='text-white text-wrap text-lg font-bold p-4'>
                    Being Involved On-Campus
                </h4>
                <p className='text-baby-blue text-left w-full
                text-wrap  xs:text-sm sm:text-base md:text-lg  text-xl  
                p-4 font-bitter'>
                    In addition to being apart of WEHack, I am also involved in 
                    a number of clubs on campus. I served as a Microsoft Student Ambassador in Spring 2023, 
                    was a Freshman Mentor, and helped found a club on-campus. 
                    Additionally, I am an active member of the American Institute of Graphic Art’s 
                    chapter at UTD and the UX club at UTD.
                </p>
            </section>
        </div>

        <div className='flex flex-row  xs:flex-col-reverse sm:flex-col-reverse items-center justify-center pb-4' style={{height: 'auto'}}> 
            <section style={{height: '100%'}}>
                <h4 className='text-white text-wrap text-lg font-bold p-4'>
                    Event Planning + Bullet Journaling
                </h4>
                <p className='text-baby-blue text-left text-wrap w-full xs:text-sm sm:text-base md:text-lg text-xl  p-4 font-bitter'>
                As a founding officer of Bujo Buddies UTD, I provided guidance on 
                drafting the club constitution, moderating the official Discord server 
                with over 200 members, and leading the planning for the initial social 
                events (including teaching scrap-booking + calligraphy workshops) of the club, 
                which resulted in the organization becoming official within 1 semester.
                </p>
            </section>

            <img src={AboutMe4} style={imgStyles} alt='img'/>
        </div>

    </div>
  )
}

export default About