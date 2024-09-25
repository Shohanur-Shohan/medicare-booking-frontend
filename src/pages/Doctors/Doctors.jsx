import DoctorList from "../../components/Doctor/DoctorList";
import SearchBar from "../../components/Doctor/SearchBar";
import Testimonial from "../../components/Home/Testimonials/Testimonials";

export const Doctors = () => {
  return (
    <>
      <section className="w-full">
        <SearchBar />

        <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
          <DoctorList />
          <Testimonial />
        </div>
      </section>
    </>
  );
};
