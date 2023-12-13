import Technologies from "../../components/technologies";
import html from "../../assets/html.759e5fb1.svg"
import css from "../../assets/css.a11f82a4.svg"
import tailwind from "../../assets/tailwindcss.eae27b48.svg"
import js from "../../assets/javascript.6a338998.svg"
import react from "../../assets/react.7c403179.svg"
import next from "../../assets/nextjs.a98ac74a.svg"
import fire from "../../assets/firebase.b33b881b.svg"
import meta from "../../assets/materialui.de51f763.svg"
import hook from "../../assets/react-hook-form.b1e3e984.svg"
import vs from "../../assets/vscode.d66774fb.svg"
import git from "../../assets/git.514e511e.svg"
import github from "../../assets/github.de5575e3.svg"
import post from "../../assets/postman.30ccfc1a.svg"
import notion from "../../assets/notion.cecc6332.svg"
const Skills = () => {
    return (
        <section className="bg-[#1A1429] text-white py-20">
            <div className="mx-auto max-w-screen-6xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-6xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 max-w-md mx-auto via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl pb-4"
                    >
                        Technologies I Use
                        <div className="divider divider-accent"></div>
                    </h1>

                    <div className="max-w-4xl mt-10 flex items-center justify-center gap-4 sm:gap-2 md:gap-4 flex-wrap">
                        <Technologies icon={html} name={"HTML"}></Technologies>
                        <Technologies icon={css} name={"CSS"}></Technologies>
                        <Technologies icon={js} name={"JavaScript"}></Technologies>
                        <Technologies icon={tailwind} name={"Tailwind CSS"}></Technologies>
                        <Technologies icon={react} name={"React JS"}></Technologies>
                        <Technologies icon={next} name={"Next JS"}></Technologies>
                        <Technologies icon={fire} name={"Firebase"}></Technologies>
                        <Technologies icon={meta} name={"Metarial UI"}></Technologies>
                        <Technologies icon={hook} name={"React Hook Form"}></Technologies>
                    </div>
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent pt-10"
                    >
                        Development & Productivity Tools I Use
                    </h1>
                    <div className="max-w-4xl mt-10 flex items-center justify-center gap-4 sm:gap-2 md:gap-4 flex-wrap">
                        <Technologies icon={vs} name={"Visual Studio Code"}></Technologies>
                        <Technologies icon={git} name={"Git"}></Technologies>
                        <Technologies icon={github} name={"Github"}></Technologies>
                        <Technologies icon={notion} name={"Notion"}></Technologies>
                        <Technologies icon={post} name={"Postman"}></Technologies>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;