import React, { useEffect, useState } from 'react';
import PineconeLogo from '@/icons/PineconeLogo';
import { isStepTwoValid } from '@/utils/stepTwoValidation';

const StepTwo = ({
  handleBackStep,
  handleNextStep,
  errors,
  formValue,
  clearError,
  handleError,
  setFormValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormValue(JSON.parse(savedFormData));
    }
  }, [setFormValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepTwoValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 2,
      };

      localStorage.setItem('formData', JSON.stringify(localData));

      handleNextStep();
    }
    handleError(errors);
  };

  const handleFormBackStep = () => {
    handleBackStep();
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col items-center justify-center">
      <div className="w-[480px] min-h-[740px] bg-white p-8 rounded-md shadow-xl flex flex-col">
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
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={formValue.email || ''}
              placeholder="Your email"
              className={`${
                errors.email.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            ></input>
            {errors.email.length > 0 && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label>
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phoneNumber"
              onChange={handleChange}
              value={formValue.phoneNumber || ''}
              placeholder="Your phone number"
              className={`${
                errors.phoneNumber.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            ></input>
            {errors.phoneNumber.length > 0 && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-2 relative">
            <label>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              value={formValue.password || ''}
              placeholder="Your password"
              className={`${
                errors.password.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-[2.9rem] text-sm text-blue-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password.length > 0 && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Confirm password <span className="text-red-500">*</span>
            </label>
            <input
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              value={formValue.confirmPassword || ''}
              placeholder="Your password"
              className={`${
                errors.confirmPassword.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            />
            {errors.confirmPassword.length > 0 && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
        </main>
        <footer className="pt-6 flex flex-row-reverse gap-3 mt-auto">
          <button
            onClick={handleFormNextStep}
            className="p-3 bg-black text-white rounded-xl w-full"
          >
            Continue 2/3
          </button>
          <button
            onClick={handleFormBackStep}
            className="p-3 bg-white text-black rounded-xl w-32 border"
          >
            Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StepTwo;
