import React from 'react';
import img from '../../assets/Untitled design (1).png'

const AboutMe = () => {
    return (
        <div className="hero min-h-screen bg-slate-600  text-neutral-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={img} className='h-72 mx-6 rounded-full' />
                <div className='w-1/2'>

                    <h1 className="text-5xl font-bold">I am Marzia Mostafa, </h1>
                    <p className="py-6">I am student of CSE department. Currently doing my BCSE program in IUBAT. I live in Tongi, Gazipur, Dhaka, Bnagladesh.</p>
                    <p>My hobbies are Drawing , Reading books. I find it interesting to try different types of new things.</p>


                </div>
            </div>
        </div>
    );
};

export default AboutMe;