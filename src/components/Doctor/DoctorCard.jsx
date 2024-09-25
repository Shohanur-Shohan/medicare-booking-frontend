import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({ doctor }) => {
  const {
    name,
    id,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>
      <h2 className="mt-3 text-[18px] font-[700] leading-[30px] text-headingColor lg:mt-5 lg:text-[26px] lg:leading-9">
        {name}
      </h2>

      <div className="mt-2 flex items-center justify-between lg:mt-4">
        <span className="rounded bg-[#CCF0F3] px-2 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:px-2 lg:py-2 lg:text-[16px] lg:leading-7 xl:px-6">
          {specialty}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="font-semiBold flex items-center gap-[6px] text-[14px] leading-6 text-headingColor md:leading-7 lg:text-[16px]">
            {" "}
            <img src={"/assets/images/Star.png"} /> {avgRating}
          </span>
          <span className="text-[14px] font-[400] leading-6 text-textColor md:leading-7 lg:text-[16px]">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] flex items-center justify-between lg:mt-5">
        <div>
          <h3 className="dont-semibold text-[16px] leading-7 text-headingColor lg:text-[18px] lg:leading-[30px]">
            +{totalPatients} patients
          </h3>
          <p className="text-[14px] font-[400] leading-6 text-textColor">
            At {hospital}
          </p>
        </div>
        <Link
          to={`/doctor-details/${id}`}
          className="group flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor"
        >
          <BsArrowRight className="h-5 w-6 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
