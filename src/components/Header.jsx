import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";



function header() {
  return (
    <>
      <div className="flex flex-row  justify-between items-center bg-white px-5 py-4  shadow-lg">
        <div className="input-box flex gap-2 items-center">
          <FaSearch size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Type to search..."
            className="placeholder:text-[#b6b1b1]focus:none"
          />
        </div>
        <div className="flex  gap-6">
          <div className="notify">
            <div className="p-2 bg-[#EFF4FB] border-2  rounded-full">
              <IoMdNotifications color="black" size={20} />
            </div>
          </div>
          <div className="message">
            <div className="p-2 bg-[#EFF4FB] border-2 border-2 rounded-full">
              <FaRegMessage color="black" size={20} />
            </div>
          </div>
          <div className="user-profile flex gap-2 justify-center items-center">
            <div className="name ">
              <h1 className="font-medium text-sm text-[#1c243] flex justify-end">
                Rahul Mahto
              </h1>
              <h1 className="font-medium text-sm text-[#64748b] flex justify-end ">
                Wordpress Developer
              </h1>
            </div>
            <div>
              <img
                src="/public/images/Rahul-mahto-sq.jpeg"
                className="rounded-full"
                width="50px"
                alt=""
              />
            </div>
            <div>
              <FaAngleDown size={25} color="#64748b" />
            </div>

            <div className="user-profile-details border-2 px-3 py-5">
              <ul className="flex flex-col gap-4">
                <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer">
                  <FaRegUser size={18}/>
                  My Profile{" "}
                </li>
                <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer">
                  <FiBook size={18}/>
                  My Contacts{" "}
                </li>
                <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer ">
                  <IoIosSettings size={18}/>
                  Account Settings{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
