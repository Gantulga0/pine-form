import React from 'react';
import PineconeLogo from '@/icons/PineconeLogo';

const StepThree = ({ handleNextStep, handleBackStep }) => {
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
            Date of birth
            <input
              placeholder="Your email"
              type="date"
              className="p-3 border rounded-xl hover:border-blue-400"
            ></input>
          </div>
          <div className="flex flex-col gap-2 mb-2">
            Profile image
            <input
              placeholder="Your phone number"
              type="file"
              className="flex w-full h-[180px] p-4 flex-col justify-center items-center gap-2 flex-[1_0_0] rounded-md bg-[rgba(127,127,128,0.05)]"
            ></input>
          </div>
        </main>
        <footer className="pt-6 flex flex-row-reverse gap-3 mt-auto">
          <button
            onClick={handleNextStep}
            className="p-3 bg-black text-white rounded-xl w-full"
          >
            Submit 3/3
          </button>
          <button
            onClick={handleBackStep}
            className="p-3 bg-white text-black rounded-xl w-32 border"
          >
            Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StepThree;
