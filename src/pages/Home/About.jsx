
const About = () => {
    return (
        <section className="text-white bg-[#2B2342] py-20">
            <div className="mx-auto max-w-screen-6xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-6xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 w-64 mx-auto via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold pb-4 text-transparent sm:text-5xl"
                    >
                        About Me
                        <div className="divider divider-accent"></div>
                    </h1>

                    <p className="mx-auto mt-4 max-w-5xl sm:text-xl/relaxed">
                        👋 Hello, I‘m Hifzur Rahman, a passionate Frontend Web Developer with a diverse skill set. My expertise spans HTML5, CSS3, and JavaScript, while my proficiency extends to frameworks like ReactJS and NextJS. I leverage the power of Firebase for dynamic backend solutions and enhance user interfaces with libraries such as Tailwind CSS and Material UI. With a keen eye for design and a commitment to clean code, I bring ideas to life, creating seamless and engaging web experiences. Let‘s build something amazing together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;