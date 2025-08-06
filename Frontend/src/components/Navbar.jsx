import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import search1 from "../assets/search1.png";
import search2 from "../assets/search2.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import night_mode1 from "../assets/night-mode1.png";
import night_mode2 from "../assets/night-mode2.png";
import shopping_bag1 from "../assets/shopping-bag1.png";
import shopping_bag2 from "../assets/shopping-bag2.png";
import menu from "../assets/menu.png"



const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
}

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to='/'>
                <img className="w-30 sm:w-36 block dark:hidden" src={logo1} alt="" />
                <img className="w-30 sm:w-36 hidden dark:block" src={logo2} alt="" />
            </Link>
            <ul className="hidden min-[730px]:flex gap-5 text-sm text-gray-700 dark:text-gray-300 ">
                <NavLink to="/" className=" flex flex-col items-center gap-1 ">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.54px] bg-gray-600 hidden  " />
                </NavLink>
                <NavLink to="/collection" className=" flex flex-col items-center gap-1 ">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.54px] bg-gray-600 hidden " />
                </NavLink>
                <NavLink to="/about" className=" flex flex-col items-center gap-1 ">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.54px] bg-gray-600 hidden " />
                </NavLink>
                <NavLink to="/contact" className=" flex flex-col items-center gap-1 ">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.54px] bg-gray-600 hidden " />
                </NavLink>
            </ul>
            <div className=" flex items-center gap-6 max-[400px]:gap-2 ">
                <div className="flex">
                    <img className=" w-5 cursor-pointer block dark:hidden" src={search2} alt="" />
                    <img className=" w-5 cursor-pointer hidden dark:block" src={search1} alt="" />
                </div>
                <div className="flex">
                    <button onClick={toggleDarkMode} >
                        <img className=" w-7.5 cursor-pointer block dark:hidden" src={night_mode2} alt="" />
                        <img className=" w-7.5 cursor-pointer hidden dark:block" src={night_mode1} alt="" />
                    </button>
                </div>
                <div className=" group relative  " >
                    <img className=" w-5 cursor-pointer block dark:hidden" src={user2} alt="" />
                    <img className=" w-5 cursor-pointer hidden dark:block" src={user1} alt="" />
                    <div className=" group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black" >My Profile</p>
                            <p className="cursor-pointer hover:text-black" >Orders</p>
                            <p className="cursor-pointer hover:text-black" >Logout</p>
                        </div>
                    </div>
                </div>
                <Link to="/cart" className="relative ">
                    <div className="flex justify-center items-center">
                        <div>
                            <img className=" w-6 min-w-6 block dark:hidden " src={shopping_bag1} alt="" />
                            <p className="block dark:hidden absolute right-[-1px] bottom-[-3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                        </div>
                        <div>
                            <img className=" w-6 min-w-6 hidden dark:block " src={shopping_bag2} alt="" />
                            <p className="hidden dark:block absolute right-[-1px] bottom-[-3px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">10</p>
                        </div>
                    </div>
                </Link>
                <img onClick={() => setVisible(true)} className="w-5 cursor-pointer min-[730px]:hidden " src={menu} alt="Menu Light" />
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-gray-950 transition-all 
                ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col cursor-pointer text-gray-600 dark:text-gray-200   ">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
                        <img className=" h-4 rotate-180 " src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-y-2 border-gray-400" to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-2 border-gray-400" to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-2 border-gray-400" to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b-2 border-gray-400" to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
