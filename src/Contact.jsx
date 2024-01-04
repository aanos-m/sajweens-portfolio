import React, { useRef } from 'react'
import sparkles from './assets/general/sparkles.png'
import emailjs from '@emailjs/browser';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userID = process.env.REACT_APP_EMAILJS_USER_ID;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
       serviceID,
      templateID,
      form.current,
      userID
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };

  return (
    <div className='flex flex-col p-8 items-center justify-center' >
      <div className=' pb-4'>
            <div className='flex flex-row justify-end'>
                <img src={sparkles} alt='sparkles.img' style={{
                    width: 25,
                    height: 25,
                    position: 'relative',
                    left: 30,
                    top: 55
                }}/>
            </div>
            <div className='flex flex-row'>
                <img src={sparkles} alt='sparkles.img' style={{
                    width: 25,
                    height: 25,
                }}/>
                <h1 className='text-white text-5xl font-bold '>
                    Contact Me!
                </h1>
            </div>
      </div>

      <div className='p-4 text-white text-center' style={{ width: '15vw'}}>
        <p>
          Get in touch with me for any further questions or opportunities
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center'>
        <input type="text" name="user_name" placeholder='Name:' className='p-2 m-2 bg-baby-blue placeholder-white text-white' style={{width: '35vw'}}/>
        <input type="email" name="user_email" placeholder='Email:' className='p-2 m-2 bg-baby-blue placeholder-white text-white' style={{width: '35vw'}}/>
        <textarea name="message"  placeholder='Enter Your Message:' className='p-2 m-2 bg-baby-blue placeholder-white text-white' style={{ height: '20vh', width: '35vw'}}/>
        <button type="submit" className='bg-white text-black font-bold p-2 m-2 rounded-2xl' 
          style={{ width: 'max-content'}}
        > Send Message <ArrowCircleRightIcon fontSize='medium'/> </button>
      </form>

    </div>
  )
}

export default Contact
