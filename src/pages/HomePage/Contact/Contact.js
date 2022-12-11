import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { GoMarkGithub } from "react-icons/go";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h3poijb', 'template_jy53zap', form.current, 'zjMBFTwzD5vSo-8Px')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                alert('Email sent Succesfully')
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="hero  bg-slate-600  text-neutral-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact me!</h1>
                    <p className="py-6">To reach me please send message via this form. Type tour message here.</p>
                    <p>Email: marziamostafa@gmail.com</p>
                    <p className='text-2xl font-bold'><a href="https://github.com/marziamostafa" className='flex items-center'><GoMarkGithub></GoMarkGithub>GitHub</a></p>
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-content ">

                    <form ref={form} onSubmit={sendEmail} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="from_name" className="input input-bordered text-black" />
                        </div>

                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered text-black" name="from_email" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea text-black  textarea-bordered" placeholder="Write your message " name="message" ></textarea>
                        </div>


                        <div className="form-control mt-6">

                            <input className="btn" type="submit" value="Send Message" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;