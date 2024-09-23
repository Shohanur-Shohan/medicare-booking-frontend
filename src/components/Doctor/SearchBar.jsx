function SearchBar() {
  return (
    <section className="w-full bg-[#fff9ea]">
      <div className="container px-2 py-[60px] sm:px-4 sm:pb-[100px] sm:pt-[60px] lg:gap-0 lg:px-[20px]">
        <h2 className="text-center text-[32px] font-[700] leading-[40px] text-headingColor md:text-[44px] md:leading-[54px]">
          Find a Doctor
        </h2>
        <div className="mx-auto mt-[30px] flex max-w-[570px] items-center justify-between rounded-full bg-[#0066ff2c]">
          <input
            type="search"
            className="w-full bg-transparent py-3 pl-5 pr-2 placeholder:text-textColor focus:outline-none sm:py-4"
            placeholder="Search Doctor"
          />
          <button className="mt-[0px] cursor-pointer rounded-full bg-primaryColor px-[35px] py-3 font-[600] text-white sm:py-4">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
