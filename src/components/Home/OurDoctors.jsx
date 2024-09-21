import DoctorList from "../Doctor/DoctorList";

function OurDoctors() {
  return (
    <section className="w-full">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        {/* OUR GREAT DOCTORS START*/}
        <section>
          <div className="container">
            <div className="mx-auto xl:w-[470px]">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care
              </p>
            </div>
            <DoctorList />
          </div>
        </section>
        {/* OUR GREAT DOCTORS ENDS*/}
      </div>
    </section>
  );
}

export default OurDoctors;
