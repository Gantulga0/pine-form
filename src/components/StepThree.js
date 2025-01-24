import React, { useState, useEffect } from 'react';
import PineconeLogo from '@/icons/PineconeLogo';
import { isStepThreeValid } from '@/utils/stepThreeValidation';

const StepThree = ({
  handleBackStep,
  handleNextStep,
  formValue,
  handleError,
  errors,
  setFormValue,
  clearError,
}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setFormValue((prev) => ({
      ...prev,
      profileImg: file,
    }));
    clearError('profileImg');
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFormValue((prev) => ({
      ...prev,
      profileImg: null,
    }));
    clearError('profileImg');
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepThreeValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 3,
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
      <div className="w-[480px] min-h-[655px] bg-white p-8 rounded-md shadow-xl flex flex-col">
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
              Date of birth <span className="text-red-500">*</span>
            </label>
            <input
              name="dateBirth"
              placeholder="Your birth date"
              onChange={handleChange}
              type="date"
              className={`${
                errors.dateBirth.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            ></input>
            {errors.dateBirth.length > 0 && (
              <p className="text-red-500">{errors.dateBirth}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label>
              Profile image <span className="text-red-500">*</span>
            </label>
            <input
              name="profileImg"
              type="file"
              onChange={handleImageChange}
              className={`${
                errors.profileImg.length > 0
                  ? 'p-3 border border-red-500 rounded-xl'
                  : 'p-3 border rounded-xl'
              }`}
            />
            {errors.profileImg.length > 0 && (
              <p className="text-red-500">{errors.profileImg}</p>
            )}
            {imagePreview && (
              <div className="mt-3 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full border"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-0 right-0 bg-red-500 text-white p-2 text-sm"
                >
                  X
                </button>
              </div>
            )}
          </div>
        </main>
        <footer className="pt-6 flex flex-row-reverse gap-3 mt-auto">
          <button
            onClick={handleFormNextStep}
            className="p-3 bg-black text-white rounded-xl w-full"
          >
            Submit 3/3
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

export default StepThree;
