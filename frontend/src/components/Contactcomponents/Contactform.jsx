import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaPinterest, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import img2 from "../../assets/images/img2.jpg"
import { IoIosArrowRoundDown } from "react-icons/io";
import LinkTags from "../Links";
import { FaMessage, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import SocialsBtn from "../Button/Socialsbtn";

const Contactform = () => {

    const cardBg = {
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

        <section className="container py-10 px-5">
           <div className="flex items-center justify-center lg:flex-row-reverse flex-col-reverse gap-10">
                <div className="text-sm text-tetClr shadow-xl p-5 space-y-5 rounded-xl" style={cardBg}>
                    <div className="lg:grid lg:grid-cols-1 lg:space-y-5 lg:gap-0 md:flex grid grid-cols-2 gap-5 items-center justify-center space-y-0 space-x-0">
                        {
                            socials.map(({ icon, text }, index) => (
                                <SocialsBtn key={index} icon={icon} text={text} optStyle={"border border-tetClr text-tetClr hover:bg-tetClr hover:text-secClr"} />
                            ))
                        }
                    </div>
                    <hr className='border-tetClr/30' />
                    <div className="text-sm lg:grid lg:space-y-5 lg:gap-0 lg:space-x-0 md:flex md:space-y-0 grid gap-5 items-center justify-center space-y-0 md:space-x-0">
                        <button className="px-2 py-2 rounded-full border border-tetClr text-tetClr transition duration-300 hover:bg-tetClr hover:text-secClr">
                            <FaPhoneAlt className="inline -mt-1 mr-2" /> + 000-PETAL-POWER
                        </button>
                        <button className="px-4 py-2 mx-auto rounded-full whitespace-nowrap border border-tetClr text-tetClr transition duration-300 hover:bg-tetClr hover:text-secClr">
                            <FaEnvelope className="inline -mt-1 mr-2" /> petalpower.org@gmail.com
                        </button>
                    </div>
                </div>
                <div className="bg-tetClr w-full rounded-2xl md:p-10 p-5 flex justify-center items-center shadow-md">
                    <form className="space-y-8 w-full">
                        <select name="type" id="type" defaultValue={"Select type of Message"} className="select focus:border focus:border-secClr/40 focus:ring-0 w-full bg-pryClr rounded-md">
                            <option value="Select type of Message" disabled>Select type of Message</option>
                            <option value="Problem">Problem</option>
                            <option value="Question">Question</option>
                            <option value="Suggestion">Suggestion</option>
                            <option value="Kudos">Kudos</option>
                        </select>
                        <div className="flex md:flex-row flex-col md:gap-5 gap-8">
                            <input type="text" name='yourName' placeholder="Your Name" id='yourName' className='bg-pryClr focus:border focus:border-secClr/40 focus:ring-0 rounded w-full' />
                            <input type="email" name='email' placeholder="Your Email" id='email' className='bg-pryClr focus:border focus:border-secClr/40 focus:ring-0 rounded w-full' />
                        </div>
                        <textarea name="message" id="message" placeholder="Your Message" className="bg-pryClr h-[150px] focus:border focus:border-secClr/40 focus:ring-0 pt-3 rounded w-full resize-none"></textarea>
                        <button className='px-8 py-2 w-max mx-auto h-[45px] bg-secClr text-tetClr rounded-md shadow-lg flex items-center justify-center gap-2'>Send Message <FaPaperPlane /></button>
                    </form>
                </div>
           </div>
        </section>

    )

}

export default Contactform