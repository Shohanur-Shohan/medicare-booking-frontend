import { Link } from "react-router-dom";

function Features() {
  return (
    <section className="w-full">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        <div className="grid grid-cols-2 items-start justify-between gap-[24px] md:grid-cols-4">
          {/* ABOUT CONTENT */}
          <div className="col-span-2">
            <h2 className="text-[32px] font-[700] leading-[40px] text-headingColor lg:text-[44px] lg:leading-[54px]">
              Get virtual treatment <br /> anytime{" "}
            </h2>
            <ul className="pl-4">
              <li className="text__para pt-5">
                {" "}
                1. Schedule the appointmen directly
              </li>
              <li className="text__para pt-5">
                {" "}
                2. Search for your physician here, and contact their office
              </li>
              <li className="text__para pt-5">
                {" "}
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/">
              <button className="btn mt-4">Learn More</button>
            </Link>
          </div>
          {/* ABOUT IMAGE */}
          <div className="relative z-10 col-span-2 flex justify-center md:justify-end">
            <img src={"/assets/images/feature-img.png"} alt="img" />
            <div className="absolute bottom-[50px] left-0 z-20 w-[200px] rounded-[10px] bg-white p-2 pb-3 shadow-md sm:w-[220px] md:bottom-[100px] md:left-[-4rem] lg:w-[248px] lg:px-4 lg:pb-[26px] lg:pt-4 xl:left-[9rem]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] font-[600] leading-[10px] text-headingColor lg:text-[14px] lg:leading-5">
                    Tue, 24
                  </p>
                  <p className="text-[10px] font-[400] leading-[10px] text-headingColor lg:text-[14px] lg:leading-5">
                    10:00AM
                  </p>
                </div>
                <span className="flex h-5 w-5 items-center justify-center rounded bg-yellowColor px-[6px] py-1 lg:h-[34px] lg:w-[34px] lg:px-[9px] lg:py-3">
                  <img src={"/assets/images/video-icon.png"} alt="" />
                </span>
              </div>

              <div className="lg:px[10px] mt-2 w-[65px] rounded-full bg-[#CCF0F3] px-2 py-1 text-[8px] font-[500] leading-[8px] text-irisBlueColor lg:mt-4 lg:w-[96px] lg:py-[6px] lg:text-[12px] lg:leading-4">
                Consultation
              </div>

              <div className="mt-2 flex items-center gap-[6px] lg:mt-[18px] lg:gap-[10px]">
                <img src={"/assets/images/avatar-icon.png"} alt="" />
                <h4 className="text-[10px] font-[700] leading-3 text-headingColor lg:text-[16px] lg:leading-[22px]">
                  Haseeb Ur Rehman
                </h4>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
