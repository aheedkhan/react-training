export default () => {
  const NftTypes = [
    "Nature",
    "Architecture",
    "Travel",
    "Animals",
    "Sports",
    "Portrait",
    "People",
  ];

  return (
    <section className="grid grid-cols-2 gap-4 px-12 mb-20 mt-10 font-josefin">
      <div className="max-w-md  h-96 rounded-lg border-2 border-dashed flex items-center justify-center mt-8 my-4 hover:border-[#20c997]">
        <label
          htmlFor="file"
          className="cursor-pointer text-center p-4 md:p-8 "
        >
          <svg
            className="w-10 h-10 mx-auto"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667"
              stroke="#20c997"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="mt-3 text-green-700 max-w-xs mx-auto">
            Click to{" "}
            <span className="font-medium text-green-700">Upload your file</span>{" "}
            or drag and drop your file here
          </p>
        </label>
        <input id="file" type="file" className="hidden caret-green-700" />
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-2">
          <div>
            <label className="text-white font-medium">NFT Title</label>
            <div className="relative mt-2 max-w-xs text-white">
              <input
                type="text"
                placeholder="Title of your NFT"
                className=" caret-green-700 w-full pl-4 pr-16 py-2 appearance-none bg-transparent border-white outline-none border focus:border-green-700 shadow-sm rounded-lg hover:border-green-700"
              />
            </div>
          </div>
          {/*option */}
          <div className="relative w-60 bottom-15 max-w-full mx-auto mt-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-5 h-5 my-auto text-green-700 right-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <select className="w-full px-3 py-2 text-sm text-white bg-transparent border border-white rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-green700 focus:ring-2 font-medium">
              <option className="text-green-700 ">Choose Your Category</option>
              <option className="text-green-700 ">Nature</option>
              <option className="text-green-700 ">Architecure</option>
              <option className="text-green-700 ">Culture</option>
              <option className="text-green-700 ">Travel</option>
              <option className="text-green-700 ">Sports</option>
              <option className="text-green-700 ">Wildlife</option>
              <option className="text-green-700 ">Fashion</option>
              <option className="text-green-700 ">Automobiles</option>
              <option className="text-green-700 ">Life Style</option>
              <option className="text-green-700 ">Long Exposure</option>
              <option className="text-green-700 ">Pets</option>
              <option className="text-green-700 ">Creativity</option>
            </select>
          </div>
        </div>
        {/* descriptiion */}
        <div className="mt-4">
          <label className="font-medium text-white">Description</label>
          <textarea
            required
            placeholder="Tell everyone about your nft and how cool it is!!!"
            className="w-full caret-green-700 text-white mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-700 shadow-sm rounded-lg"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 mt-2">
          {/* amount */}
          <div className="w-30 mt-999">
            <label className="text-white font-medium">Amount</label>
            <div className="relative mt-2 max-w-xs text-green-700 ">
              <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                ⟠
              </span>
              <input
                type="number"
                placeholder="0.00"
                className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-green-700 shadow-sm rounded-lg"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                Eth
              </div>
            </div>
          </div>
          <button class="w-40 h-12 mt-8 lg:ml-20 bg-transparent cursor-pointer border-2 border-[#fff] shadow-[inset_0px_-2px_0px_1px_#fff] group hover:bg-green-700 transition duration-300 ease-in-out">
            <span class="font-medium text-[#fff] group-hover:text-white">
              Create
            </span>
          </button>
        </div>
        {/* 
      /////////////////////////button////////////////////// */}
      </div>
    </section>
  );
};
