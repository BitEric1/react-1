import React from "react";
import List from "./List";
import ModalHeader from "./Modal";

function Hero() {
    return (
        <>
            <div className="container">
                <div className="flex pt-41 gap-[116px] pb-71">
                    <div>
                        <h1
                            className="font-bold text-[#2B2C34] text-[64px] w-[580px]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Hi, i’m BitEric Front end dev
                        </h1>
                        <p
                            className="text-xl text-[#9A9494] mt-[30px] w-[652px]"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            On this blog I share tips and tricks, frameworks,
                            projects, tutorials, etc Make sure you subscribe to
                            get the latest updates
                        </p>
                        <div className="flex mt-[30px] gap-5">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                className="w-[444px] h-17 bg-[#FFFFFE] rounded-lg py-5 px-6 outline-none border-none text-xl font-medium text-[#2B2C34] placeholder:text-[#C0C0C0]"
                            />
                            <button
                                className="bg-[#6246EA] rounded-lg py-5 px-6 text-xl font-bold text-[#FFFFFE] capitalize"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/hero.svg"
                            alt=""
                            data-aos="fade-left"
                            data-aos-delay="500"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Tech() {
    return (
        <>
            <div className="container">
                <div className="pt-[68px] flex justify-between items-center">
                    <h2
                        className="relative text-2xl font-bold text-[#2B2C34] pr-12 capitalize 
  after:content-[''] after:absolute after:w-[35px] after:h-[3px] 
  after:bg-[#232323] after:right-0 after:top-[50%] after:translate-y-[-50%] after:rounded-lg"
                        data-aos="zoom-in-right"
                    >
                        Browse the category
                    </h2>
                    <a
                        href="#!"
                        className="flex items-center gap-3 text-xl font-bold text-[#2B2C34] capitalize"
                        data-aos="zoom-in-left"
                    >
                        See all category
                        <img src="/arrow.svg" alt="" />
                    </a>
                </div>
                <div className="pb-[55px]">
                    <div className="pt-[50px] grid grid-cols-5 gap-[38px]">
                        <div
                            className="rounded-lg bg-white pt-[65px] pl-[30px] pr-[76px] pb-[95px] shadow-[4px_6px_13px_0px_rgba(113, 113, 113, 0.25)] hover:bg-[#6246EA] duration-300"
                            data-aos="fade-down-right"
                            data-aos-delay="100"
                        >
                            <img
                                src="/css.svg"
                                alt=""
                                className="w-[60px] h-[60px]"
                            />
                            <h3 className="text-2xl font-bold text-[#2B2C34] mt-[30px]">
                                CSS
                            </h3>
                        </div>
                        <div
                            className="rounded-lg bg-white pt-[65px] pl-[30px] pr-[76px] pb-[95px] shadow-[4px_6px_13px_0px_rgba(113, 113, 113, 0.25)] hover:bg-[#6246EA] duration-300"
                            data-aos="fade-down-right"
                            data-aos-delay="200"
                        >
                            <img
                                src="/js.svg"
                                alt=""
                                className="w-[60px] h-[60px]"
                            />
                            <h3 className="text-2xl font-bold text-[#2B2C34] mt-[30px]">
                                JavaScript
                            </h3>
                        </div>
                        <div
                            className="rounded-lg bg-white pt-[65px] pl-[30px] pr-[76px] pb-[95px] shadow-[4px_6px_13px_0px_rgba(113, 113, 113, 0.25)] hover:bg-[#6246EA] duration-300"
                            data-aos="fade-down-right"
                            data-aos-delay="300"
                        >
                            <img
                                src="/tailwind.svg"
                                alt=""
                                className="w-[60px] h-[60px]"
                            />
                            <h3 className="text-2xl font-bold text-[#2B2C34] mt-[30px]">
                                Tailwind
                            </h3>
                        </div>
                        <div
                            className="rounded-lg bg-white pt-[65px] pl-[30px] pr-[76px] pb-[95px] shadow-[4px_6px_13px_0px_rgba(113, 113, 113, 0.25)] hover:bg-[#6246EA] duration-300"
                            data-aos="fade-down-right"
                            data-aos-delay="400"
                        >
                            <img
                                src="/vue.svg"
                                alt=""
                                className="w-[60px] h-[60px]"
                            />
                            <h3 className="text-2xl font-bold text-[#2B2C34] mt-[30px]">
                                Vue JS
                            </h3>
                        </div>
                        <div
                            className="rounded-lg bg-white pt-[65px] pl-[30px] pr-[76px] pb-[95px] shadow-[4px_6px_13px_0px_rgba(113, 113, 113, 0.25)] hover:bg-[#6246EA] duration-300"
                            data-aos="fade-down-right"
                            data-aos-delay="500"
                        >
                            <img
                                src="/react.svg"
                                alt=""
                                className="w-[60px] h-[60px]"
                            />
                            <h3 className="text-2xl font-bold text-[#2B2C34] mt-[30px]">
                                React JS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Contact() {
    return (
        <div className="py-[58px] bg-[#EFF0F3] text-center">
            <div className="container">
                <div className="">
                    <div
                        className="w-[130px] h-[130px] rounded-full overflow-hidden mx-auto bg-[#FFFFFE]"
                        data-aos="flip-down"
                    >
                        <img
                            src="/contact.png"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2
                        className="mt-[30px] text-4xl font-bold text-[#2B2C34]"
                        data-aos="zoom-in-down"
                        data-aos-delay="100"
                    >
                        Subscribe For the lastest updates
                    </h2>
                    <p
                        className="mt-2.5 text-xl text-[#C0C0C0]"
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                    >
                        Subscribe to newsletter and never miss the new post
                        every week.
                    </p>
                    <div className="flex mt-[55px] gap-5 justify-center items-center">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            placeholder="Enter your email"
                            className="w-[444px] h-17 bg-[#FFFFFE] rounded-lg py-5 px-6 outline-none border-none text-xl font-medium text-[#2B2C34] placeholder:text-[#C0C0C0]"
                        />
                        <button
                            className="bg-[#6246EA] rounded-lg py-5 px-6 text-xl font-bold text-[#FFFFFE] capitalize"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <Hero />
            <Tech />
            <List />
            <Contact />
            {/* <ModalHeader /> */}
        </>
    );
}

export default App;
