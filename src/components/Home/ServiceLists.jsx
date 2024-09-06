import ServiceCard from './ServiceCard'
import {services} from '../../../public/assets/data/services'

function ServiceLists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  )
}

export default ServiceLists