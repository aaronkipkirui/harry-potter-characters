
import React from "react";

const Footer = () => {
    
    return (
        <footer className="bg-dark text-center text-white">
        <div
            className="h-36 md:h-32 px-6 py-6 sm:px-12 md:px-16 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center"
        >
            <div className="SocialButtons justify-center md:justify-start h-full flex flex-row gap-6 w-full pb-3 md:pb-0">
                
            </div>

            <div className="CopyrightText">
                <p className="opacity-70 inline-block text-xs w-full text-center">
                    Copyright &copy;2023, Kemoi. All rights reserved.{" "}
                </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
