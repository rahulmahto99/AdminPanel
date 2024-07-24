import Header from "../components/header";
import Sidebar from "../components/sidebar";

function AddUser() {
  return (
    <>
      <div className="md:flex ">
        <div className="md:basis-3/12">
          <Sidebar />
        </div>
        <div className="md:basis-9/12 ">
          <Header />
          <div className="main body px-8 py-5 pt-24">
            <h1 className="font-semibold text-[#222a3b] text-3xl pb-4">
              Add User Data
            </h1>
            <div className="contact-form px-5 py-4 bg-white border-2 gap-4 flex flex-col">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="FirstName"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="LastName"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Enter Your Email address"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="+91 7836082652"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="time"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Time
                </label>
                <input
                  type="time"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Time"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="date"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Date
                </label>
                <input
                  type="date"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="text"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Message
                </label>
                <textarea
                  type="textarea"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Enter Your message"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="country"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Select Your Country
                </label>
                <select
                  type="email"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Select Your Country"
                >
                  <option value="India">India</option>
                  <option value="India">India</option>
                  <option value="India">India</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
