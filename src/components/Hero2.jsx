import React from 'react';

const quote = "Hello";
const quote2 = "WEDNESDAY";
const quote3 = "Bright Lovely Day";


function Hero2(props) {
    return (
        // Container for the section
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen relative z-10">
            <div className="bg-backgroundColorQuaternary bg-opacity-30 w-3/4 h-[75vh] text-textColorSecondary flex justify-center items-center">
                <div>

                <div className="font-GV  text-center text-7xl ">
                    {quote}
                </div>

                <div className=" font-inter   text-center text-7xl mt-4 mb-8">
                    {quote2}
                </div>

                <div className="font-light   text-center text-xl ">
                    {quote3}
                </div>


            </div>
            </div>
        </div>
    );
}

export default Hero2;
