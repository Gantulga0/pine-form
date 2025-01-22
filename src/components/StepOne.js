import React from 'react';
import PineconeLogo from '@/icons/PineconeLogo';

const StepOne = ({ handleNextStep }) => {
  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white p-8 rounded-md shadow-xl flex flex-col">
        <header className="pb-7">
          <PineconeLogo />
          <div className="text-[#202124] self-stretch text-2xl font-semibold tracking-tight pb-2">
            Join Us! 😎
          </div>
          <div className="self-stretch text-[#8E8E8E] text-lg">
            Please provide all current information accurately
          </div>
        </header>
        <main className="flex-grow">
          <div className="flex flex-col gap-2 mb-2">
            <label>
              First name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your first name"
              className="p-3 border rounded-xl hover:border-blue-400"
            ></input>
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label>
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your last name"
              className="p-3 border rounded-xl hover:border-blue-400"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Username <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your username"
              className="p-3 border rounded-xl hover:border-blue-400"
            ></input>
          </div>
        </main>
        <footer className="pt-24">
          <button
            onClick={handleNextStep}
            className="p-3 bg-black text-white rounded-xl w-full"
          >
            Continue 1/3
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StepOne;
