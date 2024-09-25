import { useParams } from "react-router-dom";
import { doctors } from "../../data/doctors";
import { useState } from "react";
import { useMemo } from "react";

export const DoctorDetails = () => {
  const [doctorData, setDoctorData] = useState(null);
  const doctorId = useParams();
  console.log(doctorId);

  useMemo(() => {
    (() => {
      const data = doctors.filter((doctor) => {
        // console.log(doctor, doctorId?.id, doctor?.id);
        return doctor?.id == doctorId?.id;
      });
      setDoctorData(data);
    })();
  }, [doctorId]);

  console.log(doctorData);

  return (
    <section className="w-full">
      {doctorData === null ? (
        <div className="flex h-[80vh] w-[100vw] items-center justify-center">
          <img src="/assets/spinner.gif" alt="loader" />
        </div>
      ) : (
        <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
          <div className="grid gap-[50px] md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 items-start justify-start gap-5 lg:grid-cols-3">
                <figure className="col-span-1">
                  <img src={doctorData[0].photo} alt="" className="w-full" />
                </figure>
                <div className="col-span-2">
                  <h3 className="mt-3 pb-2 text-[22px] font-bold leading-9 text-headingColor md:text-[40px] lg:leading-[50px]">
                    {doctorData[0].name}
                  </h3>
                  <span className="rounded bg-[#CCF0F3] px-2 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:px-2 lg:py-2 lg:text-[16px] lg:leading-7 xl:px-6">
                    {doctorData[0].specialty}
                  </span>

                  <div className="flex items-center gap-[6px] pt-5">
                    <span className="flex items-center gap-[6px] text-[14px] font-semibold leading-5 text-headingColor lg:text-[16px] lg:leading-7">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgBvZTbTcMwFIbPsXsBqUUZId0gTNC+Nn1pNygTABNQNoAJgAlKH4LYomxARogUECDZPtgpQa1T4oRW/SQnTmR/+n1FcEBzz6O2XJo6fvFTnCSJqw9zNZAtOdYv3xTVEhdQAXQ1UE/d1x+pIdFpe660pUlF1J2uCQ1elbRYI2WOM21B+jE/8pu8GfAG9gnor1SPUtKtECI+nnzGBSk9n5yDooGuB6SHB6tSCyR80Y9YEiwao/Qe9RAJ9ggLU2REdA17IndlcyqjzgwRr2AHCNQlD99vfqW7ihXBmZnL/Htj9c2+ZAh3UANbWJBmjaLOEhADqALCgg3Tsf3befb/w4bU3EiVU2YdoO+UioaoLlzhZUHKpIzTNmli9p8+IQ+wjbYclEqB0Ldl5vLgo7cZD9MpIu/ZcgXKL5fq82vL1m8jHCaxJU8IWAyH4BulJZNGgoQ0OQAAAABJRU5ErkJggg=="
                        alt=""
                      />
                      {doctorData[0].avgRating}
                    </span>
                    <span className="text-[14px] font-[400] leading-5 text-textColor lg:text-[16px] lg:leading-7">
                      ({doctorData[0].totalRating})
                    </span>
                  </div>
                  <p className="text__para mt-3 text-[14px] leading-5 md:text-[15px]">
                    {doctorData[0]?.doctorDetails}
                  </p>
                </div>
              </div>

              {/* tab */}
              <div role="tablist" className="tabs tabs-bordered mt-[50px]">
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-[16px] font-semibold leading-7 text-headingColor"
                  aria-label="About"
                />
                <div
                  role="tabpanel"
                  className="tab-content border-t border-solid border-[#0066ff34] py-10"
                >
                  hello
                </div>

                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-[16px] font-semibold leading-7 text-headingColor"
                  aria-label="Feedback"
                  defaultChecked
                />
                <div
                  role="tabpanel"
                  className="tab-content border-t border-solid border-[#0066ff34] py-10"
                >
                  hello 2
                </div>
              </div>
              {/* tab */}
              <div className="mt-[50px]">
                <div>
                  <div>
                    <h3 className="flex items-center gap-2 text-[20px] font-semibold leading-[30px] text-headingColor">
                      About of
                      <span className="text-[24px] font-bold leading-9 text-irisBlueColor">
                        Riyad Hossain
                      </span>
                    </h3>
                    <p className="text__para mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptates perferendis optio odio eveniet dicta sequi
                      distinctio, enim tempore. Expedita at eligendi
                      necessitatibus, quia nihil corrupti consequatur saepe hic
                      sit maxime.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-[20px] font-semibold leading-[30px] text-headingColor">
                      Education
                    </h3>
                    <ul className="pt-4 md:p-5">
                      <li className="mb-[30px] flex flex-col sm:flex-row sm:items-end sm:justify-between md:gap-5">
                        <div>
                          <span className="text-[15px] font-semibold leading-6 text-irisBlueColor">
                            June 4, 2015 - June 4, 2018
                          </span>
                          <p className="text-[16px] font-medium leading-6 text-textColor">
                            PHD in Surgeon
                          </p>
                        </div>
                        <p className="text-[14px] font-medium leading-5 text-textColor">
                          New Apollo Hospital, New York.
                        </p>
                      </li>
                      <li className="mb-[30px] flex flex-col sm:flex-row sm:items-end sm:justify-between md:gap-5">
                        <div>
                          <span className="text-[15px] font-semibold leading-6 text-irisBlueColor">
                            June 4, 2015 - August 4, 2019
                          </span>
                          <p className="text-[16px] font-medium leading-6 text-textColor">
                            PHD in Surgeon
                          </p>
                        </div>
                        <p className="text-[14px] font-medium leading-5 text-textColor">
                          New Apollo Hospital, New York.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-[20px] font-semibold leading-[30px] text-headingColor">
                      Experience
                    </h3>
                    <ul className="grid gap-[30px] pt-4 sm:grid-cols-2 md:p-5">
                      <li className="rounded bg-[#fff9ea] p-4">
                        <span className="text-[15px] font-semibold leading-6 text-yellowColor">
                          June 4, 2015 - August 4, 2019
                        </span>
                        <p className="text-[16px] font-medium leading-6 text-textColor">
                          Sr. Surgeon
                        </p>
                        <p className="text-[14px] font-medium leading-5 text-textColor">
                          New Apollo Hospital, New York.
                        </p>
                      </li>
                      <li className="rounded bg-[#fff9ea] p-4">
                        <span className="text-[15px] font-semibold leading-6 text-yellowColor">
                          June 4, 2015 - August 4, 2019
                        </span>
                        <p className="text-[16px] font-medium leading-6 text-textColor">
                          Sr. Surgeon
                        </p>
                        <p className="text-[14px] font-medium leading-5 text-textColor">
                          New Apollo Hospital, New York.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md border p-4 shadow-panelShadow lg:p-5">
                <div className="flex items-center justify-between">
                  <p className="text__para mt-0 font-semibold">Ticket Price</p>
                  <span className="text-[16px] font-bold leading-7 text-headingColor lg:text-[22px] lg:leading-8">
                    500 BDT
                  </span>
                </div>
                <div className="mt-[30px]">
                  <p className="text_para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                  </p>
                  <ul className="mt-3">
                    <li className="mb-2 flex items-center justify-between">
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        Sunday
                      </p>
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        4:00 PM - 9:30 PM
                      </p>
                    </li>
                    <li className="mb-2 flex items-center justify-between">
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        Tuesday
                      </p>
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        4:00 PM - 9:30 PM
                      </p>
                    </li>
                    <li className="mb-2 flex items-center justify-between">
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        Thursday
                      </p>
                      <p className="text-[15px] font-semibold leading-6 text-textColor">
                        4:00 PM - 9:30 PM
                      </p>
                    </li>
                  </ul>
                  <button className="btn w-full rounded-md px-2">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
