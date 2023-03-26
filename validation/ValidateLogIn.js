export default function validateLogIn(values) {
  let errors = {};

  if(!values.email) {
    errors.email = "The email is obligatory";
  } else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(errors.email)) {
    errors.email = "Email not valid";
  };

  if (!values.password) {
    errors.password = "The password is obligatory";
  } else if(values.password.length < 6){
    errors.password = "Password of more than 6 characters is required";
  }

  return errors;
};