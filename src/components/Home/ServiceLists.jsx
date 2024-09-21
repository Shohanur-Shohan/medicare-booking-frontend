import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

function ServiceLists() {
  return (
    <div className="mt-[30px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 xl:gap-[30px]">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  );
}

export default ServiceLists;
