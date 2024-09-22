import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqItem = (item) => {
  const [isOpen, setisOpen] = useState(false);
  const toggleAccordion = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="mb-5 cursor-pointer rounded-[12px] border border-solid border-[#D9DCE2] p-3 lg:p-5">
      <div
        className="iems-center flex justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 text-headingColor lg:text-[22px] lg:leading-8">
          {item.item.question}
        </h4>
        <div
          className={` ${isOpen && "border-none bg-primaryColor text-white"} flex h-7 w-7 items-center justify-center rounded border-solid border-[#141F21] lg:h-8 lg:w-8`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] font-[400] leading-6 text-textColor lg:text-[16px] lg:leading-7">
            {item.item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
