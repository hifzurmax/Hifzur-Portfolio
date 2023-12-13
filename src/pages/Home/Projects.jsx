import img1 from "../../assets/donors.png"
import img2 from "../../assets/job.png"
import img3 from "../../assets/brand.png"
import html from "../../assets/html.759e5fb1.svg"
import css from "../../assets/css.a11f82a4.svg"
import tailwind from "../../assets/tailwindcss.eae27b48.svg"
import js from "../../assets/javascript.6a338998.svg"
import react from "../../assets/react.7c403179.svg"
import next from "../../assets/nextjs.a98ac74a.svg"
import fire from "../../assets/firebase.b33b881b.svg"
import meta from "../../assets/materialui.de51f763.svg"
import hook from "../../assets/react-hook-form.b1e3e984.svg"
import WebsiteTech from "../../components/WebsiteTech"
import { Link } from "react-router-dom"
const Projects = () => {
    return (
        <section className="text-white bg-[#2B2342] py-20">
            <div className="mx-auto max-w-screen-6xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-6xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold pb-4 max-w-xl mx-auto text-transparent sm:text-5xl"
                    >
                        Projects I’ve Worked on
                        <div className="divider divider-accent"></div>
                    </h1>
                    {/* Project 1 */}
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <Link to="https://blood-donres.web.app/">
                                <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                            </Link>
                            <div>
                                <Link to="https://blood-donres.web.app">
                                    <h1
                                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent text-left mb-4"
                                    >
                                        Blood Donation Website
                                    </h1>
                                </Link>
                                <p className="text-left mb-6">
                                    A platform to connect blood donors with recipients. Users can register, search for donors, and request blood. The website is built using React.js for the frontend and Node.js with Express.js for the backend. MongoDB is used for data storage.
                                </p>
                                <h1
                                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent text-left mb-4"
                                >
                                    Technologies I have used
                                </h1>

                                <div className="max-w-4xl flex items-center gap-2 sm:gap-2 md:gap-2 flex-wrap">
                                    <WebsiteTech icon={html} name={"HTML"}></WebsiteTech>
                                    <WebsiteTech icon={css} name={"CSS"}></WebsiteTech>
                                    <WebsiteTech icon={js} name={"JavaScript"}></WebsiteTech>
                                    <WebsiteTech icon={tailwind} name={"Tailwind CSS"}></WebsiteTech>
                                    <WebsiteTech icon={react} name={"React JS"}></WebsiteTech>
                                    <WebsiteTech icon={next} name={"Next JS"}></WebsiteTech>
                                    <WebsiteTech icon={fire} name={"Firebase"}></WebsiteTech>
                                    <WebsiteTech icon={meta} name={"Metarial UI"}></WebsiteTech>
                                    <WebsiteTech icon={hook} name={"React Hook Form"}></WebsiteTech>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="divider divider-accent"></div> 
                    {/* Project 2 */}
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <Link to="https://taskhub-7bbe0.web.app/">
                                <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
                            </Link>
                            <div>
                                <Link to="https://taskhub-7bbe0.web.app/">
                                    <h1
                                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent text-left mb-4"
                                    >
                                        Job Marketplace Web App
                                    </h1>
                                </Link>
                                <p className="text-left mb-6">
                                    This MERN (MongoDB, Express, React, Node.js) stack web application is designed to serve as a job marketplace similar to online marketplaces. Users can post and bid on job listings in various categories, making it a versatile platform for job seekers and employers.
                                </p>
                                <h1
                                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent text-left mb-4"
                                >
                                    Technologies I have used
                                </h1>

                                <div className="max-w-4xl flex items-center gap-2 sm:gap-2 md:gap-2 flex-wrap">
                                    <WebsiteTech icon={html} name={"HTML"}></WebsiteTech>
                                    <WebsiteTech icon={css} name={"CSS"}></WebsiteTech>
                                    <WebsiteTech icon={js} name={"JavaScript"}></WebsiteTech>
                                    <WebsiteTech icon={tailwind} name={"Tailwind CSS"}></WebsiteTech>
                                    <WebsiteTech icon={react} name={"React JS"}></WebsiteTech>
                                    <WebsiteTech icon={next} name={"Next JS"}></WebsiteTech>
                                    <WebsiteTech icon={fire} name={"Firebase"}></WebsiteTech>
                                    <WebsiteTech icon={meta} name={"Metarial UI"}></WebsiteTech>
                                    <WebsiteTech icon={hook} name={"React Hook Form"}></WebsiteTech>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="divider divider-accent"></div> 
                    {/* Project 3 */}
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <Link to="https://brand-shop-2e5ae.web.app">
                                <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                            </Link>
                            <div>
                                <Link to="https://brand-shop-2e5ae.web.app">
                                    <h1
                                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent text-left mb-4"
                                    >
                                        E-commerce Website
                                    </h1>
                                </Link>
                                <p className="text-left mb-6">
                                    An e-commerce website with six types of brands. Users can view products from different brands, add them to the cart, and manage the cart by adding or removing items.
                                </p>
                                <h1
                                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent text-left mb-4"
                                >
                                    Technologies I have used
                                </h1>

                                <div className="max-w-4xl flex items-center gap-2 sm:gap-2 md:gap-2 flex-wrap">
                                    <WebsiteTech icon={html} name={"HTML"}></WebsiteTech>
                                    <WebsiteTech icon={css} name={"CSS"}></WebsiteTech>
                                    <WebsiteTech icon={js} name={"JavaScript"}></WebsiteTech>
                                    <WebsiteTech icon={tailwind} name={"Tailwind CSS"}></WebsiteTech>
                                    <WebsiteTech icon={react} name={"React JS"}></WebsiteTech>
                                    <WebsiteTech icon={next} name={"Next JS"}></WebsiteTech>
                                    <WebsiteTech icon={fire} name={"Firebase"}></WebsiteTech>
                                    <WebsiteTech icon={meta} name={"Metarial UI"}></WebsiteTech>
                                    <WebsiteTech icon={hook} name={"React Hook Form"}></WebsiteTech>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-accent"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;