import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";

const NewCollection = () => {
    const plants = [
        { 
            title: "Philodendron", 
            description: "Philodendron comes in a variety of leaf shapes and sizes, making it a great plant to complement your home decor while also requiring less maintenance.", 
            bgImage: img1, 
            colSpan: "md:col-span-2 col-span-1" 
        },
        { 
            title: "Calathea", 
            description: "Calathea is known for its colorful, patterned leaves that add a touch of vibrancy to any indoor space. This plant thrives in low light and is perfect for adding a tropical look to your home decor.", 
            bgImage: img2, 
            colSpan: "md:col-span-1 col-span-1" 
        },
        { 
            title: "Air Purifying", 
            description: "These plants improve air quality by filtering out toxins and releasing oxygen, making your home environment healthier. They not only enhance the aesthetic of your space but also contribute to cleaner, fresher air.", 
            bgImage: img3, 
            colSpan: "md:col-span-1 col-span-1" 
        },
        { 
            title: "Low Light Tolerant", 
            description: "Ideal for low-light conditions, these plants are perfect for spaces with minimal sunlight. They require less frequent watering and are well-suited for adding greenery to darker areas of your home.", 
            bgImage: img2, 
            colSpan: "md:col-span-2 col-span-1" 
        },
    ];
    

    return (
        <div className="container px-5 py-5 mt-10 space-y-8 text-secClr">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {plants.map(({ title, description, bgImage, colSpan }, index) => (
                    <div
                        key={index}
                        className={`relative md:p-5 p-3 bg-cover bg-center rounded-xl h-[270px] cursor-pointer plant-card overflow-hidden ${colSpan}`}
                        style={{ backgroundImage: `linear-gradient(135deg, #0a0a0a6d, #0a0a0a6d), url(${bgImage})` }}
                    >
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg text-white transition-all duration-300 h-16 card-description space-y-2">
                            <h3 className="text-2xl font-bold">{title}</h3>
                            <p className="text-sm opacity-0 transition-opacity duration-300">{description}</p>
                        </div>
                        <div className="absolute top-4 right-4 p-2 rounded-full border text-tetClr transition-all duration-300 icon-bg">
                            <IoIosArrowRoundForward className="size-8" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
