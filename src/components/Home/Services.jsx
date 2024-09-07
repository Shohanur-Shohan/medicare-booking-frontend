import ServiceLists from "./ServiceLists"

function Services() {
  return (
    <section className="w-full">
        <div className="container py-[60px] sm:py-[100px] px-2 sm:px-4 lg:px-[20px]">
            <div className="max-w-[470px] mx-auto">
                <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">
                    Providing the best medical services
                </h2>
                <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">
                    World class care for everyoone. Our health system offers unmatched, expert health care.
                </p>
            </div>
            {/* service lists */}
            <ServiceLists/>
            {/* service lists */}
        </div>
    </section>
  )
}

export default Services