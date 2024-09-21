import DoctorCard from "./DoctorCard";
import { doctors } from "../../data/doctors";

function DoctorList() {
  return (
    <div className="lg-gap-[30px] mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-[55ps]">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default DoctorList;
