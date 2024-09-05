import { Link, NavLink } from "react-router-dom";

const Header = () => {
  
  return (
    <header className="w-full bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover shadow-md shadow-b-[4px] -shadow-spread-2">
      <div className="navbar container mx-auto justify-between flex items-center px-2 sm:px-4 lg:px-[20px] py-4 md:py-6">
        <div className="navbar-start">
          <Link to={"/"} className="">
            <img
              src="/assets/images/logo.png"
              className="w-[150px] md:w-[160px]  max-h-[50px]"
              alt="logo"
            />
          </Link>
        </div>
        {/* desktop-menu */}
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-3 lg:gap-[25px] xl:gap-[30px]">
            <li>
              <NavLink
                to={"/"}
                className="font-semibold transition-colors text-textColor hover:text-blueColor"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/find-a-doctor"}
                className="font-semibold transition-colors text-textColor hover:text-blueColor"
              >
                Find a doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className="font-semibold transition-colors text-textColor hover:text-blueColor"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="font-semibold transition-colors text-textColor hover:text-blueColor"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* desktop-menu */}

        <div className="navbar-end">
          <div className="flex items-center justify-end gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center justify-center rounded-full avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    className="object cover "
                    src={"/assets/avatar.svg"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] px-3 py-4 shadow bg-base-100 rounded-box w-52"
              >
                <li className="pl-2 my-2 font-semibold text-left text-textColor hover:text-blueColor">Profile</li>
              
              </ul>
            </div>
            {/* Profile */}

            <Link
              to={"/login"}
              className="hidden sm:flex px-4  py-[7px] sm:px-5 sm:py-[8px] xl:px-8 xl:py-[10px] hover:bg-transparent bg-blueColor transition-colors border-blueColor border rounded-full hover:text-blueColor font-semibold text-[#fff]"
            >
              Login
            </Link>
          </div>

          {/* drawer */}
          <div className="z-50 drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button lg:hidden">
                <img
                  className="w-10 h-10 ml-2 sm:ml-3"
                  src="/assets/navicon.svg"
                  alt="icon"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* mobile */}
              <div>
                <Link href={"/"} className="">
                  <img
                    src="/assets/logo.webp"
                    className="max-w-[130px] md:max-w-[150px] xl:max-w-[180px]"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="w-64 min-h-screen px-2 sm:w-72 right-2 bg-[#F2F2F2] text-secondary-content">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <img
                    src="/assets/closeBtn.svg"
                    className="w-8 h-8 mt-2 mb-8"
                    alt="icon"
                  />
                </label>
                <li className="mb-5 ">
                  <NavLink
                    to={"/"}
                    className="my-1 font-semibold transition-colors border border-transparent text-textColor hover:text-blueColor"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/find-a-doctor"}
                    className="my-1 font-semibold transition-colors border border-transparent text-textColor hover:text-blueColor"
                  >
                    Find a doctor
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/services"}
                    className="my-1 font-semibold transition-colors border border-transparent text-textColor hover:text-blueColor"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/contact"}
                    className="my-1 font-semibold transition-colors border border-transparent text-textColor hover:text-blueColor"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <Link
                    to={"/appoinment"}
                    className="sm:hidden  flex justify-center px-4 text-center  py-[7px] sm:px-5 sm:py-[8px] xl:px-8 xl:py-[10px] hover:bg-transparent bg-blueColor transition-colors border-blueColor border rounded-full  font-semibold hover:text-blueColor text-[#fff]"
                  >
                    Login
                  </Link>
                </li>
              </ul>
              {/* mobile */}
            </div>
          </div>
          {/* drawer */}
        </div>
      </div>
    </header>
  );
};

export default Header;
