import { Link } from "react-router-dom";

function About() {
  return (
    <section className="w-full">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        <div className="grid grid-flow-row grid-cols-2 items-start justify-between gap-[24px] md:grid-cols-4 lg:grid-flow-col">
          {/* ABOUT IMAGE */}
          <div className="relative z-10 order-2 col-span-2 flex justify-center md:block lg:order-1">
            <img src={"/assets/images/about.png"} alt="img" />
            <div className="absolute bottom-[-1rem] right-[30%] z-20 w-[200px] md:right-[30%] md:w-[300px] lg:bottom-4 lg:right-[-9%] xl:right-[15%]">
              <img src={"/assets/images/about-card.png"} alt="img" />
            </div>
          </div>
          {/* ABOUT CONTENT */}
          <div className="order-1 col-span-2 lg:order-2">
            <h2 className="text-[32px] font-[700] leading-[40px] text-headingColor lg:text-[44px] lg:leading-[54px]">
              Proud to be one of the nations best
            </h2>
            <p className="mt-[18px] text-[15px] font-[400] leading-[24px] text-textColor sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[30px]">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best publics hospitals in the Nation and #1 in
              Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, minus?
            </p>
            <p className="mt-[18px] text-[15px] font-[400] leading-[24px] text-textColor sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[30px]">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best publics hospitals in the Nation and #1 in
              Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, minus?
            </p>
            <Link to="/">
              <button className="btn mt-4">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
