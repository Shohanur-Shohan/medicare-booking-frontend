import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    toast.success("Thank you for your message!");
    reset();
  };

  return (
    <section className="w-full">
      <div className="container flex items-center justify-center px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:px-[20px]">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                {...register("clients_email")}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("message_subject")}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                {...register("clients_message")}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
                placeholder="Leave a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="hover:bg-primary-800 rounded-md bg-primaryColor px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primaryColor sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
