import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <section className="w-full">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        {/* heading */}
        <div className="mx-auto lg:w-[470px]">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* heading */}
        <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[30px]">
          <div className="px-5 py-[30px]">
            <div className="flex items-center justify-center">
              <img src={"/assets/images/icon01.png"} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="fonr-[700] text-center text-[26px] leading-9 text-headingColor">
                Find a Doctor
              </h2>
              <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care. From the lab tot he clinic
              </p>

              <Link
                to="/doctors"
                className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor"
              >
                <BsArrowRight className="h-5 w-6 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* 2ND */}
          <div className="px-5 py-[30px]">
            <div className="flex items-center justify-center">
              <img src={"/assets/images/icon02.png"} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="fonr-[700] text-center text-[26px] leading-9 text-headingColor">
                Find a Location
              </h2>
              <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care. From the lab tot he clinic
              </p>

              <Link
                to="/doctors"
                className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor"
              >
                <BsArrowRight className="h-5 w-6 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* 3RD */}
          <div className="px-5 py-[30px]">
            <div className="flex items-center justify-center">
              <img src={"/assets/images/icon03.png"} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="fonr-[700] text-center text-[26px] leading-9 text-headingColor">
                Book Appointment
              </h2>
              <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care. From the lab tot he clinic
              </p>

              <Link
                to="/doctors"
                className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor"
              >
                <BsArrowRight className="h-5 w-6 group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
