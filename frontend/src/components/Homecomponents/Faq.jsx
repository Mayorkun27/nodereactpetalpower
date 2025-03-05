import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardThree from "../card/CardThree";
import { FaPlay } from "react-icons/fa6";
import CardFour from "../card/CardFour";

const Faq = () => {

    const faqs = [
        {
            question: "Ordering for Delivery?",
            answer: "Yes, we offer delivery services for our plants and other items. You can place an order online or by calling us. Delivery fees vary based on location, and we ensure your plants are safely packaged to arrive in perfect condition.",
        },
        {
            question: "Potting Services",
            answer: "We offer potting on in-store purchases, or you are welcome to bring in your own pots, and we can pot them for you. There is a fee depending on what supplies are used. Visit us or call us for more details.",
        },
        {
            question: "Do we ship Plants?",
            answer: "Currently, we do not ship plants as they require specific handling and care during transit. However, we offer local delivery options to ensure your plants arrive healthy and intact. Contact us for available delivery areas.",
        },
        {
            question: "Ordering for Pick up?",
            answer: "You can place an order for pick-up through our website or by phone. Simply select the plants or items you'd like, and we will have them ready for you to collect at your convenience. You’ll receive a notification when your order is ready for pick-up.",
        },
    ];
    
    

    return (
        <div className="container px-5 py-5 mt-10 space-y-8 text-secClr">
            {
                faqs.map(({question, answer}, index) => (
                    <CardFour key={index} question={question} answer={answer} />
                ))
            }
        </div>
    );
};

export default Faq;
