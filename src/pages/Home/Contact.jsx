import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className="text-white body-font relative bg-[#1A1429]">
            <div className="grid grid-cols-1 md:grid-cols-12 max-w-6xl mx-auto">
                <div className="bg-main md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Get In <span className="text-second">Touch</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        I value your feedback, inquiries, and suggestions. Feel free to reach out to me using the contact information below. I look forward to hearing from you!
                    </p>

                    <div className="flex items-center mt-5">

                        <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                    </div>
                    <div className="flex items-center mt-5">
                        <span className="text-sm items-center flex">
                            <FaPhone className="mr-2"></FaPhone>
                            <a href="tel:+8801719143564">+8801719143564</a>
                        </span>
                    </div>

                    <div className="flex items-center mt-5">
                        <span className="text-sm flex items-center">
                            <FaEnvelope className="mr-2"></FaEnvelope>
                            <a href="mailto:hifzur.syl@gmail.com">hifzur.syl@gmail.com</a>
                        </span>
                    </div>


                </div>
                <form className="md:col-span-8 p-10">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                First Name
                            </label>
                            <input
                                className="appearance-none text-gray-800 block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane" />

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                className="appearance-none text-gray-800 block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                className="appearance-none text-gray-800 block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email" type="email" placeholder="********@*****.**" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                Your Message
                            </label>
                            <textarea rows="4"
                                className="appearance-none block text-gray-800 w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button
                                className="shadow bg-second bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                            >
                                Send Message
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </section>
    );
};

export default Contact;