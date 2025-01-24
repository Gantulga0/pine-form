export const isStepOneValid = (data) => {
  const { firstName, lastName, userName } = data;
  const errors = {};

  let isValid = true;

  if (!firstName || firstName.length < 2) {
    errors.firstName = 'First name must contain at least 2 characters.';
    isValid = false;
  }

  if (!lastName || lastName.length < 2) {
    errors.lastName = 'Last name must contain at least 2 characters.';
    isValid = false;
  }

  if (!userName || userName.length < 2) {
    errors.userName = 'Username must contain at least 2 characters.';
    isValid = false;
  }

  return { isValid, errors };
};
