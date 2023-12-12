
import image from "../../assets/hifzur-image.png"

const Banner = () => {
    return (
        <section className="bg-[#1A1429] text-white">
            <div className="mx-auto max-w-6xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className=" text-left w-2/3">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                       
                    >
                        Hello! I‘m
                        <span className="sm:block text-8xl">
                            Hifzur Rahman
                        </span>
                    </h1>



                    <p className="mt-4 max-w-xl text-2xl/relaxed">
                        A Front End Developer | with <span className="text-white border rounded-full bg-gradient-to-bl from-[#DC293A] to-[#6d1910] pb-1 px-2">1.5+ Years</span> Experience
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="w-1/3">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;