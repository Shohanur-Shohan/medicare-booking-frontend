import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <section className="w-full">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        <div className="mx-auto xl:w-[470px]">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <div className="mt-[30px] lg:mt-[55px]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="rounded-[13px] px-5 py-[30px] shadow-md">
                <div className="flex items-center gap-[13px]">
                  <img src={"/assets/images/patient-avatar.png"} alt="" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor">
                      Haseeb Ur Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
                  I have taken medical services form them. They treat so well
                  and they are providing the best medical.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[13px] px-5 py-[30px] shadow-md">
                <div className="flex items-center gap-[13px]">
                  <img src={"/assets/images/patient-avatar.png"} alt="" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor">
                      Haseeb Ur Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
                  I have taken medical services form them. They treat so well
                  and they are providing the best medical.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[13px] px-5 py-[30px] shadow-md">
                <div className="flex items-center gap-[13px]">
                  <img src={"/assets/images/patient-avatar.png"} alt="" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor">
                      Haseeb Ur Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
                  I have taken medical services form them. They treat so well
                  and they are providing the best medical.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[13px] px-5 py-[30px] shadow-md">
                <div className="flex items-center gap-[13px]">
                  <img src={"/assets/images/patient-avatar.png"} alt="" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor">
                      Haseeb Ur Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
                  I have taken medical services form them. They treat so well
                  and they are providing the best medical.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[13px] px-5 py-[30px] shadow-md">
                <div className="flex items-center gap-[13px]">
                  <img src={"/assets/images/patient-avatar.png"} alt="" />
                  <div>
                    <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor">
                      Haseeb Ur Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                      <HiStar className="h-5 w-[18px] text-yellowColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
                  I have taken medical services form them. They treat so well
                  and they are providing the best medical.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
