import React from "react";
import { Link } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from 'react-icons/md';
import { FiSettings } from "react-icons/fi";

import { dataLinks } from "../../assets/constants";
import { NavLink } from "react-router-dom";

import { useGeneralContext } from "../../context/GeneralProvider";

//Style dynamic Link active
const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-400  text-md m-2 bg-green-200";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

const SideBar = () => {
  const { activeMenu,setActiveMenu,screenSize } = useGeneralContext();


  const handleCloseMenu = () => {
    setActiveMenu(!activeMenu);
  }
  const closeSideBar = () => {
    if(screenSize < 900 && activeMenu !== undefined){
        setActiveMenu(false);
    }
  }

  return (
    <>
      {activeMenu && (
        <div className="flex flex-col h-screen shadow-lg">
          <div className="flex-1 flex flex-col gap-10 ">
            <div className="flex items-center justify-between ">
              <Link
                to="/"
                onClick={closeSideBar}
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware /> <span>HR Core</span>
              </Link>
              <span className="mr-8 mt-4 md:hidden inline-block"
              onClick={handleCloseMenu}
              ><MdOutlineCancel size={20}/></span>
            </div>

            <div className="flex flex-col gap-4 ">
              {dataLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={`${item.title}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {/* {i.icon} */}
                  <span className="ml-8 ">{item.name}</span>
                </NavLink>
              ))}
            </div>

           
          </div>

          <div className="flex  items-center p-4">
            <span className="ml-12 mb-5 cursor-pointer">
              <FiSettings size={32} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
