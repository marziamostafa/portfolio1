import React from 'react';
import resume from '../../Resume/Resume.pdf'
import img from '../../../assets/Untitled design (1).png'

const About = () => {
    return (
        <div className="hero min-h-screen bg-slate-600  text-neutral-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={img} className='h-72 mx-6 rounded-full' />
                <div className='w-1/2'>
                    <p>Hello There!</p>
                    <h1 className="text-5xl font-bold">I am Marzia Mostafa, <span className='text-base'>A Full-Stack web developer</span></h1>
                    <p className="py-6">A dedicated and passioate  Full-Stack web developer with 1 year of experiences. I have keen interest in problem solving too. Trying to work in professional working field to use my skills and gain more as a web developer.</p>
                    <a
                        download="Marzia_resume.pdf"
                        href={resume}
                        className='btn'>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;