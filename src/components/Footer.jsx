
const Footer = () => {
  return (
    <>
      <footer className="w-full border-t ">
        {/* Grid */}
        <div className="w-full bg-white pb-[20px] pt-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-[20px] pb-4 pt-8">
            <div className="justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-start lg:col-span-2">
              <div className="">
                <a
                  className="flex-none text-xl font-semibold text-white"
                  aria-label="Brand"
                >
                  <img
                    className="max-w-[150px] mx-auto sm:mx-0"
                    src="/assets/images/logo.png"
                    alt="logo"
                  />
                </a>
                <ul className="mt-8">
                  <li className="my-2 text-textColor ">
                    <span>33 New Montgomery St. CA, USA</span>
                  </li>
                  <li className="my-2 text-textColor ">
                    <span>(+91)012-345-6789</span>
                  </li>

                  <li className="my-2 text-textColor ">
                    <a href="mailto:artistic@exampledemo.com">
                      artistic@exampledemo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-textColor font-opensans">
                  Quick Links
                </h4>
                <div className="grid mt-3 space-y-3">
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      Home
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                    Find a doctor
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                    Services
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-textColor font-opensans">
                  Services
                </h4>
                <div className="grid mt-3 space-y-3">
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      Terms Conditions
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      Policy for Sellers
                    </a>
                  </p>
                  
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-textColor font-opensans">
                  Information
                </h4>
                <div className="grid mt-3 space-y-3">
                  
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex cursor-pointer text-textColor gap-x-2" href="#">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
            {/* End Col */}
          </div>
        </div>
        {/* End Grid */}
        <div className="w-full bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover">
          <div className="grid sm:gap-y-0 sm:flex sm:justify-between sm:items-center max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-[20px] pb-6 pt-6">
            <div className="flex items-center justify-between">
              <p className="mx-auto text-sm text-textColor sm:m-0">
                © 2024 Shohan. All rights reserved.
              </p>
            </div>
            {/* End Col */}
            {/* Social Brands */}
            <div className="mx-auto sm:mx-0">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold border border-transparent rounded-lg text-textColor size-10 gap-x-2 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center text-sm font-semibold border border-transparent rounded-lg text-textColor size-10 gap-x-2 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center text-sm font-semibold border border-transparent rounded-lg text-textColor size-10 gap-x-2 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center text-sm font-semibold border border-transparent rounded-lg text-textColor size-10 gap-x-2 hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
