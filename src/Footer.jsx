import React from "react";

function Footer() {
    return (
        <div className="pt-[70px]">
            <div className="container">
                <div className="flex gap-36 items-start">
                    <div>
                        <div className="flex">
                            <a href="#!" className="flex items-end">
                                <h2 className="text-4xl text-[#001858] font-semibold ">
                                    BitEric
                                </h2>
                                <p className="text-lg text-[#6246EA] font-bold">
                                    .Blog
                                </p>
                            </a>
                        </div>
                        <p className="py-5 text-lg text-[#2B2C34]">
                            Digitaldastin by Bit Eric
                        </p>
                        <div className="flex gap-7">
                            <a href="#!">
                                <img src="/social-1.svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="/social-2.svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="/social-3.svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="/social-4.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-[95px] pb-[50px]">
                        <div>
                            <h3 className="text-xl font-bold text-[#2B2C34] uppercase">
                                Category
                            </h3>
                            <ul className="mt-[25px] flex flex-col gap-5">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        CSS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Javascript
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Tailwind
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        React JS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        More Category
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#2B2C34] uppercase">
                                About Me
                            </h3>
                            <ul className="mt-[25px] flex flex-col gap-5">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        About Me
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Achievement
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#2B2C34] uppercase">
                                Get in touch
                            </h3>
                            <ul className="mt-[25px] flex flex-col gap-5">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34]"
                                    >
                                        +62-8XXX-XXX-XX
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] "
                                    >
                                        demo@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#2B2C34] uppercase">
                                Follow Us
                            </h3>
                            <ul className="mt-[25px] flex flex-col gap-5">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Medium
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-lg text-[#2B2C34] hover:font-bold ease-in duration-100"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-[26px] border-t border-t-[#C0C0C0]">
                    <p className="text-sm text-[#2B2C34]">
                        © 2025 Digitalbiteric
                    </p>
                    <p className="text-sm text-[#2B2C34]">
                        Made With ❤️ Lang Son, VietNam
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
