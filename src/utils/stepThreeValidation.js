export const isStepThreeValid = (data) => {
  const { dateBirth, profileImg } = data;
  const errors = {};
  let isValid = true;

  if (!dateBirth) {
    errors.dateBirth = 'Date of birth is required.';
    isValid = false;
  }

  if (!profileImg) {
    errors.profileImg = 'Profile image is required.';
    isValid = false;
  }

  return { isValid, errors };
};
