import React from 'react';
import img2 from "../assets/images/img2.jpg"
import { FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaPinterest } from 'react-icons/fa';
import SocialsBtn from './Button/Socialsbtn';

const Footer = ({ optStyle }) => {

    const footerBg = {
        background : `${`linear-gradient(135deg, #0a0a0ab4, #0a0a0ab2), url(${img2})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    const socials = [
        {
            icon: <FaInstagram className='inline -mt-1 mr-2' />,
            text: "Instagram",
        },
        {
            icon: <FaTwitter className='inline -mt-1 mr-2' />,
            text: "Twitter",
        },
        {
            icon: <FaLinkedin className='inline -mt-1 mr-2' />,
            text: "LinkedIn",
        },
        {
            icon: <FaTelegram className='inline -mt-1 mr-2' />,
            text: "Telegram",
        },
        {
            icon: <FaPinterest className='inline -mt-1 mr-2' />,
            text: "Pinterest",
        },
    ]

    return (
        <footer className="container px-6 mb-3 mt-20">
            <div className="space-y-5 rounded-2xl text-center md:p-10 p-5 text-white" style={footerBg}>

                <div className="flex items-center justify-center">
                    <hr className='border w-[40%] ms-auto border-tetClr/30 rounded-full '/>
                    <div className="border backdrop-blur-md bg-tetClr/10 flex items-center mx-auto justify-center w-[70px] h-[70px] rounded-full">
                        <h3 className="text-4xl -translate-x-2 translate-y-1 logo relative text-transparent">
                            <span className="text-5xl">p</span>
                            <span className="absolute -top-3 left-5">p</span>
                        </h3>
                    </div>
                    <hr className='border w-[40%] me-auto border-tetClr/30 rounded-full '/>
                </div>

                <div className="space-y-3">
                    <h2 className="md:text-6xl text-3xl font-bold">Join the community!</h2>
                    <p className='w-3/4 lg:text-base md:text-sm text-xs mx-auto'>Subscribe to our newsletter to receive monthly plant tips, store updates, promotions, & more or follow our social handles to stay in the know always.</p>
                    <form className=''>
                        <label htmlFor="email" className='border lg:w-3/5 md:w-4/5 w-full mx-auto md:gap-6 gap-2 p-2 rounded-lg border-tetClr/40 backdrop-blur-sm bg-pryClr/5 flex md:flex-row flex-col'>
                            <input type="email" name='email' id='email' className='bg-transparent md:text-left outline-none border-none text-center focus:ring-0 rounded w-full' />
                            <button className='px-8 py-2 mx-auto w-max bg-tetClr text-secClr rounded-md shadow-lg'>Subscribe</button>
                        </label>
                    </form>
                </div>
                
                <div className={`bg-tetClr text-secClr md:p-10 p-5 space-y-5 rounded-xl ${optStyle}`}>
                    <div className="md:flex items-center grid grid-cols-2 justify-center space-x-3 md:space-y-0 space-y-3">
                        {
                            socials.map(({ icon, text }, index) => (
                                <SocialsBtn key={index} icon={icon} text={text} optStyle={"border border-secClr text-secClr hover:bg-secClr hover:text-tetClr"} />
                            ))
                        }
                    </div>
                    <hr className='border-secClr/30' />
                    <p className="text-sm mt-4">©2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );

};

export default Footer;
