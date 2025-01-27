'use client';
import React, { useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FinishedForm from './FinishedForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    let data = localStorage.getItem('formData');
    data = JSON.parse(data);
    console.log(data);
  }, []);

  const animationVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={currentStep}
        initial="enter"
        animate="center"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default MultiStepForm;
