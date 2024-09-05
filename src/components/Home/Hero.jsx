
function Hero() {
  return (
    <section className="w-full bg-[url('/assets/images/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="container min-h-[90vh] flex items-center">
        <div className="grid items-center justify-between w-full h-full grid-cols-1 gap-4 lg:grid-cols-2 py-[120px] lg:pt-0">
          {/* hero-content left*/}
            <div className="md:max-w-[700px] lg:w-full mx-auto col-span-2 lg:col-span-1">
              <h1 className="text-center lg:text-left text-[36px] lg:max-w-[570px] leading-[46px] text-headingColor font-[800] md:text-[42px] lg:text-[46px] xl:text-[55px] md:leading-[50px] lg:leading-[55px] xl:leading-[70px]">We help patients live a healthy, longer life.</h1>
              <p className="text-center lg:text-left text-para text-[15px] sm:text-[16px] xl:text-[18px]">Your health is our priority. We provide compassionate, personalized care with a focus on your well-being. Trust our expert team to guide you to better health with the latest in medical treatments.</p>
              <div className="mt-[38px]"></div>
              <div className="hover:bg-transparent mx-auto lg:m-0 cursor-pointer bg-blueColor transition-colors border-blueColor border hover:text-blueColor text-[#fff] w-fit py-[15px] px-[35px] rounded-[50px] font-[600]">Request a appoinment</div>

              <div className="mt-[36px] lg:mt-[70px] flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start mb-6 lg:mb-0 gap-5 lg:gap-[30px]">
                
                <div className="mx-auto text-center md:m-0 md:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="md:text-[14px] lg:text-[16px] leading-7 mt-2 md:mt-3">Total Doctors</p>
                </div>
                

                <div className="mx-auto text-center md:m-0 md:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">3000+</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="md:text-[14px] lg:text-[16px] leading-7 mt-2 md:mt-3">Patients</p>
                </div>
                
                <div className="mx-auto text-center md:m-0 md:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">300+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="md:text-[14px] lg:text-[16px] leading-7 mt-2 md:mt-3">Employees</p>
                </div>
              </div>
            </div>
          {/* hero-content right*/}
            <div className="grid max-w-[700px] mx-auto lg:m-0 lg:w-full items-center justify-between grid-cols-5 col-span-2 gap-4 lg:grid-cols-3 lg:col-span-1">
              <div className="flex justify-end h-full col-span-3 lg:col-span-2 lg:items-center">
                <img src="/assets/images/hero-img01.png" className="" alt="img" />
              </div>
              <div className="grid h-full grid-flow-row col-span-2 gap-4 lg:col-span-1">
                <div className="col-span-1">
                <img src="/assets/images/hero-img02.png" className="w-full h-full" alt="img" />
                </div>
                <div className="col-span-1">
                <img src="/assets/images/hero-img03.png" className="w-full h-full" alt="img" />
                </div>
              </div>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Hero