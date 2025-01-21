import React from 'react';
import  '../2-Hero/Hero.css';
const Hero = () => {
    return (
        <section className='Hero flex'>
            <div className='leftSection '>
                <div className='perent-avatar flex'>
                    <img className='avatar' src="/Youness-avatar.jpg" alt="" />
                    <div className='icon-verified '></div>
                </div>
               
                <h1 className='titel'>Full-Stack Developer, Specialized in Digital Options.</h1>
              <p className='sub-titel'>
                My name is Youness Benbakka, a passionate Full-Stack Developer focused on creating innovative 
                digital solutions. I help companies develop advanced platforms to enhance performance and user experience.
              </p>

              <div className='icons-socail flex'>
                <div className='icon-twitter'></div>
                <div className='icon-instagram'></div>
                <div className='icon-github'></div>
                <div className='icon-linkedin'></div>
            


              </div>
            </div>

            <div className='rightSection animation '>
            animation
            </div>
      
        </section>
    );
}

export default Hero;
