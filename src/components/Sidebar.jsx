import { useState } from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa6";

function Sidebar() {
  const [isopen, setIsopen] = useState(false);
  const [isopen2, setIsopen2] = useState(false);
  const toggleDropdown = () => {
    setIsopen(!isopen);
  };
  const toggleDropdown2 = () => {
    setIsopen2(!isopen2);
  };

  return (
    <>
      <div className="logo bg-[#1C2434] h-screen px-6 text-[#dee4ee] py-2 relative">
        <div className="">
          <img
            src="/public/images/logo-162ee3ec.svg"
            className="fixed top-0 pt-5 z-10 bg-[#1C2434]   py-6 "
            alt=""
            width="260px"
          />
        </div>
        <div className="menu-items pt-20 h-[100vh] overflow-y-scroll scrollbar-hide bg-[#1C2434]">
          <h1 className="md:font-semibold md:text-sm text-[#8a99af] mb-3 ml-4">
            MENU
          </h1>
          <div className="first-menu py-3">
            <ul
              onClick={toggleDropdown}
              className="list-none flex cursor-pointer justify-between transition-all bg-[#333A48] py-2 px-3 active:bg-[#333A48] hover:bg-[#333A48] items-center font-medium text-base text-[#dee4ee] "
            >
              <span className="flex items-center  gap-2 ">
                {" "}
                <PiSquaresFourLight />
                Dashboard
              </span>{" "}
              {isopen ? <FaAngleUp /> : <FaAngleDown />}
            </ul>
            {isopen && (
              <ul className="pl-14 pt-3 pb-3">
                <li className="list-none">
                  <h1 className="font-medium text-base cursor-pointer text-[white] ">
                    eCommerce
                  </h1>
                </li>
                <li className="list-none">
                  <h1 className="font-medium text-base cursor-pointer text-[#8a99af] ">
                    Analytics
                  </h1>
                </li>
                <li className="list-none">
                  <h1 className="font-medium text-base cursor-pointer text-[#8a99af] ">
                    Marketing
                  </h1>
                </li>
                <li className="list-none">
                  <h1 className="font-medium text-base cursor-pointer text-[#8a99af] ">
                    CRM
                  </h1>
                </li>
                <li className="list-none">
                  <h1 className="font-medium text-base cursor-pointer text-[#8a99af] ">
                    Stocks
                  </h1>
                </li>
              </ul>
            )}
          </div>
         
           
          
          <div className="second-menu">
            <ul onClick={toggleDropdown2} className="list-none flex justify-between bg-[#333A48] py-2 px-3 active:bg-[#333A48] hover:bg-[#333A48] items-center font-medium text-base text-[#dee4ee] cursor-pointer ">
              <span className="flex items-center  gap-2 ">
                {" "}
                <CiBoxList />
                Task
              </span>{" "}
              {isopen2 ? <FaAngleUp  /> : <FaAngleDown  />}
            </ul>
            {isopen2 &&(
            <ul className="pl-14 pt-3 pb-3">
              <li className="list-none">
                <h1 className="font-medium text-base text-[white] ">List</h1>
              </li>
            </ul>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
