export const isStepOneValid = (data) => {
  const { firstName } = data;
  const errors = {};
  let isValid = true;

  if (firstName.length <= 1) {
    errors.firstName = 'First name must contain at least 2 characters.';
    isValid = false;
  }

  return { isValid, errors };
};
