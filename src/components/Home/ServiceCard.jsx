import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = (item) => {
  return (
    <div className={`py-[30px] px-3 lg:px-5 rounded-md`} style={{background:`${item.item.cardColor}`}}>
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {item.item.name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {item.item.desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="w-6 h-5 group-hover:text-white" />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]" style={{background:`${item.item.bgColor}`, color: `${item.item.textColor}`, borderRadius: '6px 0 0 6px'}}>
          {item.index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
