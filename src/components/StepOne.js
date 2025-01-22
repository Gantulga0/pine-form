import React from 'react';
import PineconeLogo from '@/icons/PineconeLogo';
import { isStepOneValid } from '@/utils/stepOneValidation';

const StepOne = ({
  handleNextStep,
  errors,
  formValue,
  clearError,
  handleError,
  setFormValue,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };
  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };

      localStorage.setItem('formData', JSON.stringify(localData));

      handleNextStep();
    }
    handleError(errors);
  };
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
              name="firstName"
              onChange={handleChange}
              placeholder="Your first name"
              className={`${
                errors.firstName.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            ></input>
            {errors.firstName.length > 0 && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label>
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              placeholder="Your last name"
              className={`${
                errors.lastName.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            ></input>
            {errors.lastName.length > 0 && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
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
            onClick={handleFormNextStep}
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
