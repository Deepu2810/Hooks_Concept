export const validateName = text => {
  var regex = /^[a-zA-Z ]{1,30}$/;
  return regex.test(text);
};
