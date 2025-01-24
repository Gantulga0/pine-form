export const isStepTwoValid = (data) => {
  const { email, phoneNumber, password, confirmPassword } = data;
  const errors = {};
  let isValid = true;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
    isValid = false;
  }

  const phoneRegex = /^(7[0-9]|8[0-9]|9[0-9])\d{6}$/;
  if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number.';
    isValid = false;
  }

  const passwordMinLength = 8;
  if (!password || password.length < passwordMinLength) {
    errors.password = `Password must be at least ${passwordMinLength} characters long.`;
    isValid = false;
  }

  if (!confirmPassword || confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.';
    isValid = false;
  }

  return { isValid, errors };
};
