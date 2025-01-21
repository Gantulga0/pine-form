import React from 'react';
import PineconeLogo from '@/icons/PineconeLogo';

const FinishedForm = ({ handleNextStep, handleBackStep }) => {
  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col items-center justify-center">
      <div className="w-[480px] h-auto bg-white p-8 rounded-md shadow-xl">
        <header className="pb-7">
          <PineconeLogo />
          <div className="text-[#202124] self-stretch text-2xl font-semibold tracking-tight pb-2">
            You're All Set 🔥
          </div>
          <div className="self-stretch text-[#8E8E8E] text-lg">
            We have received your submission. Thank you!
          </div>
        </header>
      </div>
    </div>
  );
};

export default FinishedForm;
