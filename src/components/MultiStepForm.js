'use client';
import React, { useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FinishedForm from './FinishedForm';
import { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dateBirth: '',
    profileImg: '',
  });

  const [formError, setFormError] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dateBirth: '',
    profileImg: '',
  });

  const handleError = (errors) => {
    setFormError((prev) => ({
      ...prev,
      ...errors,
    }));
  };

  const clearError = (name) => {
    setFormError((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];

  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('formData');
    const data1 = JSON.parse(data);
    console.log(data1);
  }, []);

  return (
    <div className="flex flex-col">
      <Step
        errors={formError}
        formValue={formValue}
        clearError={clearError}
        handleError={handleError}
        setFormValue={setFormValue}
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
      />
    </div>
  );
};

export default MultiStepForm;
