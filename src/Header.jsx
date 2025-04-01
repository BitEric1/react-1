import "./Header.css";
import React from "react";

function Header() {
    return (
        <div className="bg-[#EFF0F3] shadow-[4px_6px_13px_0px_rgba(215,215,215,0.25)]">
            <div className="container">
                <div className="header__inner flex justify-between items-center py-8">
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
                    <div className="flex items-center">
                        <nav>
                            <ul className="flex items-center gap-[50px]">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-xl text-[#2B2C34] font-bold capitalize"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-xl text-[#2B2C34] font-bold capitalize"
                                    >
                                        Category
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-xl text-[#2B2C34] font-bold capitalize"
                                    >
                                        About Me
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-[10px] ml-[50px]">
                            <img src="/search.svg" alt="" />
                            <p className="text-xl text-[#2B2C34] font-bold capitalize">
                                Search
                            </p>
                        </div>
                        <button className="flex items-center gap-[10px] ml-[50px] bg-[#6246EA] py-[10px] px-[17px] rounded-sm text-xl font-bold text-white capitalize">
                            <img src="/coffe.svg" alt="" />
                            Buy Me a Coffee
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
