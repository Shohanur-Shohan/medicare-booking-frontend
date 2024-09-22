import FaqList from "./FaqList";

function Faq() {
  return (
    <section className="w-full">
      <div className="container flex items-start justify-between gap-[50px] px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:gap-0 lg:px-[20px]">
        <div className="hidden w-1/2 md:block">
          <img src={"/assets/images/faq-img.png"} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="heading">Most questions by our beloved patients</h2>
          <FaqList />
        </div>
      </div>
    </section>
  );
}

export default Faq;
