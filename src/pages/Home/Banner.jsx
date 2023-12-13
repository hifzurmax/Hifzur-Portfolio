import { FaDownload, FaEnvelope } from "react-icons/fa6";
import image from "../../assets/hifzur.png"
import resume from "../../assets/resume.txt"
const Banner = () => {
    return (
        <section className="bg-[#1A1429] text-white">
            <div className="mx-auto max-w-6xl px-4 py-32 lg:flex lg:h-[550px] lg:items-center">
                <div className=" text-left md:w-3/5 space-y-8">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"

                    >
                        Hello! I‘m 
                        <span className="sm:block text-5xl md:text-7xl">
                            <br className="md:hidden" />
                            Hifzur Rahman
                        </span>
                    </h1>



                    <p className="mt-4 max-w-xl text-2xl/relaxed">
                        A Front End Developer | with <span className="text-white text-lg font-bold rounded-full bg-[#DC293A] py-1 px-2">0.5+ Years</span> Experience
                    </p>
                    <p className="mt-4 max-w-xl text-base/relaxed">
                        Hi, I‘m a junior web developer specializing in the MERN stack. 💻 Passionate about crafting seamless user experiences with React
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            className="flex w-full items-center rounded border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href={resume}
                        >
                            <FaDownload className="text-md mr-2" />
                            Resume
                        </a>

                        <a
                            className="flex items-center w-full rounded border border-blue-600 px-12 py-3 text-md font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/"
                        >
                            <FaEnvelope className="text-md mr-2" />
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="w-2/5 hidden md:block relative">
                    <img className="h-[550px]" src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;