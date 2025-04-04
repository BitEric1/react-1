import React from "react";

function List() {
    return (
        <div className="bg-[#FFFFFE] pb-20">
            <div className="container">
                <div>
                    <div className="pt-[80px] flex justify-between items-center">
                        <h2
                            className="relative text-2xl font-bold text-[#2B2C34] pr-12 capitalize 
                      after:content-[''] after:absolute after:w-[35px] after:h-[3px] 
                      after:bg-[#232323] after:right-0 after:top-[50%] after:translate-y-[-50%] after:rounded-lg"
                            data-aos="zoom-in-right"
                        >
                            Featured Article
                        </h2>
                        <a
                            href="#!"
                            className="flex items-center gap-3 text-xl font-bold text-[#2B2C34] capitalize"
                            data-aos="zoom-in-left"
                        >
                            See All Article
                            <img src="/arrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="pt-[30px] grid grid-cols-4">
                        {/* Item 1 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-right"
                                data-aos-delay="100"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-1.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Fundamental of javascript
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 2 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-right"
                                data-aos-delay="200"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-2.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Grid CSS make your life easier
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 3 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-right"
                                data-aos-delay="300"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-3.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Make animated light mode and dark mode
                                    toggle with CSS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 4 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-right"
                                data-aos-delay="400"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-4.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Make tic tac toe games with react JS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* List CSS */}
                <div>
                    <div className="pt-[80px] flex justify-between items-center">
                        <h2
                            className="relative text-2xl font-bold text-[#2B2C34] pr-12 capitalize 
                      after:content-[''] after:absolute after:w-[35px] after:h-[3px] 
                      after:bg-[#232323] after:right-0 after:top-[50%] after:translate-y-[-50%] after:rounded-lg"
                            data-aos="zoom-in-right"
                        >
                            CSS
                        </h2>
                        <a
                            href="#!"
                            className="flex items-center gap-3 text-xl font-bold text-[#2B2C34] capitalize"
                            data-aos="zoom-in-left"
                        >
                            See All Article
                            <img src="/arrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="pt-[30px] grid grid-cols-4">
                        {/* Item 5 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-right"
                                data-aos-delay="100"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-5.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Flexbox CSS : Everything you need to know
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 6 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-right"
                                data-aos-delay="200"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-2.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Grid CSS make your life easier
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 7 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-right"
                                data-aos-delay="300"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-6.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    3 easy way to make div center
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 8 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-right"
                                data-aos-delay="400"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-3.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Make animated light mode and dark mode
                                    toggle with CSS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* List JavaScript */}
                <div>
                    <div className="pt-[80px] flex justify-between items-center">
                        <h2
                            className="relative text-2xl font-bold text-[#2B2C34] pr-12 capitalize 
                      after:content-[''] after:absolute after:w-[35px] after:h-[3px] 
                      after:bg-[#232323] after:right-0 after:top-[50%] after:translate-y-[-50%] after:rounded-lg"
                            data-aos="zoom-in-right"
                        >
                            Javascript
                        </h2>
                        <a
                            href="#!"
                            className="flex items-center gap-3 text-xl font-bold text-[#2B2C34] capitalize"
                            data-aos="zoom-in-left"
                        >
                            See All Article
                            <img src="/arrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="pt-[30px] grid grid-cols-4">
                        {/* Item 9 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-left"
                                data-aos-delay="100"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-7.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Array in Javasript - Learn JS #3
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div
                                            className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize"
                                            data-aos="fade-down-left"
                                            data-aos-delay="200"
                                        >
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 10 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-left"
                                data-aos-delay="300"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-1.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Fundamental of Javascript
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 11 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-left"
                                data-aos-delay="300"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-8.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    7 project with javascript you must try for
                                    your portfolio
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 12 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-down-left"
                                data-aos-delay="400"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-9.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Make simple calculator with javascript
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* List React JS */}
                <div>
                    <div className="pt-[80px] flex justify-between items-center">
                        <h2
                            className="relative text-2xl font-bold text-[#2B2C34] pr-12 capitalize 
                      after:content-[''] after:absolute after:w-[35px] after:h-[3px] 
                      after:bg-[#232323] after:right-0 after:top-[50%] after:translate-y-[-50%] after:rounded-lg"
                            data-aos="zoom-in-right"
                        >
                            React JS
                        </h2>
                        <a
                            href="#!"
                            className="flex items-center gap-3 text-xl font-bold text-[#2B2C34] capitalize"
                            data-aos="zoom-in-left"
                        >
                            See All Article
                            <img src="/arrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="pt-[30px] grid grid-cols-4">
                        {/* Item 13 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-left"
                                data-aos-delay="100"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-10.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    First month of leaning React jS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 14 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-left"
                                data-aos-delay="200"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-11.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Build markdown editor with React JS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 15 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-left"
                                data-aos-delay="300"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-12.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Getting started with React JS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* Item 16 */}
                        <a href="#!">
                            <div
                                className="p-5 rounded-xl bg-white shadow-[4px_6px_13px_0px_rgba(215, 215, 215, 0.25)] hover:bg-[#6246EA] duration-300"
                                data-aos="fade-up-left"
                                data-aos-delay="400"
                            >
                                <div className="w[260px] h-[198px] rounded-xl overflow-hidden ">
                                    <img
                                        src="/item-4.png"
                                        alt=""
                                        className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2B2C34] mt-[25px] text-left h-[75px] ">
                                    Make tic tac toe games with React JS
                                </h3>
                                <div className="flex items-center mt-[30px] gap-[15px]">
                                    <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                                        <img
                                            src="/avatar-b.jpg"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2C34]">
                                            BitEric
                                        </h4>
                                        <div className="flex items-center justify-between gap-[10px] mt-1 text-sm text-[#2B2C34] capitalize">
                                            <p>Jan 10, 2022</p>
                                            <div className="w-2 h-2 rounded-full bg-[#2B2C34] "></div>
                                            <p>3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <button
                    className="flex items-center justify-center bg-[#6246EA] text-xl font-bold text-[#FFFFFE] mt-20 mx-auto rounded-lg py-5 px-6 cursor-pointer"
                    data-aos="flip-right"
                    data-aos-delay="500"
                >
                    More Article
                </button>
            </div>
        </div>
    );
}

export default List;
