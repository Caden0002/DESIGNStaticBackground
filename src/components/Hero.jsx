const quote = "I am amazing\nand\nI know it!";
const quote2 = "#SELFREMINDER";


function Hero(props) {
    return (
        // Container for the section
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen relative z-10">
            <div className=" ">

            <div className="border border-backgroundColorSecondary rounded-t-3xl bg-backgroundColorSecondary opacity-80 backdrop-blur-3xl		" >
                <div className="font-YTY text-textColorPrimary whitespace-pre-line text-center text-5xl leading-normal pt-12 pb-10 px-4">
                    {quote}
                </div>
            </div>

            <div className="border border-backgroundColorTertiary rounded-b-3xl bg-backgroundColorTertiary opacity-90 backdrop-blur-3xl		">
                <div className="font-light text-textColorPrimary whitespace-pre-line text-center text-sm leading-normal py-4 px-4">
                    {quote2}
                </div>
            </div>

            </div>

        </div>

    );
}

export default Hero;
