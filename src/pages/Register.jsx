import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <section className="mx-auto flex min-h-[90vh] max-w-[1170px] items-center justify-center px-2 py-[100px] sm:px-5 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden rounded-l-lg bg-primaryColor lg:block">
          <figure className="rounded-lg">
            <img
              src="/assets/images/signup.gif"
              alt=""
              className="w-full rounded-lg"
            />
          </figure>
        </div>
        <div className="rounded-lg border border-gray-200 px-4 py-10 sm:px-6 lg:rounded-none lg:rounded-r-lg lg:px-16">
          <h3 className="mb-10 text-[22px] font-bold leading-9 text-headingColor md:text-[28px]">
            Create an <span className="text-primaryColor">account</span>
          </h3>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-5">
              <input
                type="name"
                placeholder="Full Name"
                name="full_name"
                {...register("full_name")}
                className="w-full cursor-pointer border-b border-solid border-[#0066ff61] px-2 py-3 text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                {...register("email")}
                className="w-full cursor-pointer border-b border-solid border-[#0066ff61] px-2 py-3 text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none"
                required
              />
            </div>
            <div className="relative mb-5">
              <input
                type={`${eye ? "text" : "password"}`}
                placeholder="Password"
                name="password"
                {...register("password")}
                className="w-full cursor-pointer border-b border-solid border-[#0066ff61] px-2 py-3 text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none"
                required
              />
              <div
                className="absolute right-2 top-[30%]"
                onClick={() => setEye(!eye)}
              >
                <img
                  className="h-5 w-5"
                  src={`${
                    eye ? "/assets/eyeOpen.svg" : "/assets/closedEye.svg"
                  }`}
                  alt="eye"
                />
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <label className="text-[16px] font-bold leading-7 text-headingColor">
                Are you a:
                <select
                  name="role"
                  {...register("role")}
                  required
                  className="ml-2 px-4 py-3 text-[15px] font-semibold leading-7 text-textColor focus:outline-none"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </label>
              <label className="text-[16px] font-bold leading-7 text-headingColor">
                Gender:
                <select
                  name="gender"
                  {...register("gender")}
                  required
                  className="ml-2 px-4 py-3 text-[15px] font-semibold leading-7 text-textColor focus:outline-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className="mb-5 flex items-center gap-3">
              <figure className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-solid border-primaryColor">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-full rounded-full"
                />
              </figure>
              <div className="relative h-[50px] w-[130px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  accept=".jpg, .png"
                  className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                />
                <label
                  htmlFor="customFile"
                  className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center overflow-hidden truncate rounded-lg bg-[#0066ff46] px-[0.75rem] py-[0.375rem] text-[15px] font-semibold leading-6 text-headingColor"
                >
                  Upload Photo
                </label>
              </div>
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="w-full rounded-lg bg-primaryColor px-4 py-3 text-[18px] leading-[30px] text-white"
              >
                Register
              </button>
            </div>
            <p className="mt-5 text-center text-textColor">
              Already have an account?{" "}
              <Link className="font-medium text-primaryColor" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
