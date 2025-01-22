'use client';
import React from 'react';
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
    
  });

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

  return (
    <div className="flex flex-col">
      <Step
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        formValue={formValue}
        setFormValue={setFormValue}
      />
    </div>
  );
};

export default MultiStepForm;
