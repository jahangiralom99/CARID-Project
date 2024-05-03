const SelectVehicle = () => {
  return (
    <div className="max-w-screen-xl mx-auto border bg-[#e8eeff]  dark:text-white text-black mt-12 rounded-lg p-10">
      <h1 className="text-2xl font-semibold">Select Your Vehicle</h1>
      <p className="font-medium mt-1">
        Provide vehicle details to confirm fitment
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-5">
        <div className="border border-black p-3 flex items-center gap-3 w-full rounded-lg">
          <h1 className="font-bold text-xl flex items-center gap-3">
            1 <span>|</span>
          </h1>
          <select className="w-full border-none" name="" id="1">
            <option value="2024">2021</option>
            <option value="2024">2029</option>
            <option value="2024">2022</option>
          </select>
        </div>
        <div className="border w-full border-black p-3 flex items-center gap-3 rounded-lg">
          <h1 className="font-bold text-xl flex items-center gap-3">
            2 <span>|</span>
          </h1>
          <select className="w-full" name="" id="2">
            <option value="2022">2024</option>
            <option value="2020">2024</option>
            <option value="2011">2024</option>
          </select>
        </div>
        <div className="border w-full border-black p-3 flex items-center gap-3 rounded-lg">
          <h1 className="font-bold text-xl flex items-center gap-3">
            3 <span>|</span>
          </h1>
          <select className="w-full" name="" id="3">
            <option value="202">2032</option>
            <option value="2026">2023</option>
            <option value="2024">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
