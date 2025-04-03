import React from "react";
import { useState } from "react";

function HeaderButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                className="flex items-center gap-[10px] ml-[50px] bg-[#6246EA] py-[10px] px-[17px] rounded-sm text-xl font-bold text-white capitalize"
                onClick={() => setIsOpen(true)}
            >
                <img src="/coffe.svg" alt="" />
                Buy Me a Coffee
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="relative bg-white p-5 rounded-2xl shadow-lg w-lg h-[512px] p-8">
                        <button
                            className="absolute right-8 top-8 bg-black/5 w-10 h-10 rounded-full text-2xl font-bold flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <img className="w-6 h-6" src="/close.svg" alt="" />
                        </button>
                        <div className=" rounded-full mt-14 mx-auto flex justify-center">
                            <img
                                className="w-[300x] h-[300px] object-cover"
                                src="/qr.jpg"
                                alt=""
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-5 px-4 py-2 text-white bg-black rounded bg-amber-800 w-40 h-14 text-2xl font-bold flex items-center justify-center ml-auto mr-auto hover:bg-[#5ebbff]"
                        >
                            Thanks
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

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
                        <HeaderButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
