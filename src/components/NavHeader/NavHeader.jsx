import React, { useEffect, useContext } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import {useGeneralContext} from '../../context/GeneralProvider'

import NavButton from "./NavButton";
import avatar from '../../assets/avatar.jpg'

const NavHeader = () => {
  const {screenSize,setScreenSize, activeMenu,setActiveMenu} = useGeneralContext();

  //it run when user resize a screen 
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
  
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //it run when screenSize change and menu active or not
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  }, [screenSize])
  
  //handle close and open menu
  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="flex justify-between items-center h-full shadow-md">
      <div >
        <NavButton  
          customFunc={handleActiveMenu}
          color={"#f234"}
          icon={<AiOutlineMenu />}
        />
      </div>
      <div className="flex mr-4 p-4">
        <NavButton
          customFunc={() => {}}
          color={"#f234"}
          icon={<FiShoppingCart />}
        />
        <NavButton
          customFunc={() => {}}
          color={"#f234"}
          icon={<RiNotification3Line />}
        />
        <NavButton
          customFunc={() => {}}
          color={"#f234"}
          icon={<BsChatLeft />}
        />

        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 sm:text-14 sm:inline-block hidden ">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Chieu Long
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
