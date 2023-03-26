import React, { useEffect, useState } from 'react';

const useValidation = (stateInitial, validation, fn) => {
  const [values, setValues] = useState(stateInitial);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      //Reviewing length in errors object
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        // fn = function that execute in component
        fn();
      }
      setSubmitForm(false);
    }
  }, [errors]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  };

  const handleBlur = () => {
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  };
};

export default useValidation;