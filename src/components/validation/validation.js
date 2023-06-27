import React, { useCallback } from "react";

export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation(initialValue = {}) {
  const [values, setValues] = React.useState(initialValue);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false) => {
      setValues(newValues);
      setIsValid(newIsValid);
    },
    [setValues, setIsValid]
  );

  return { values, handleChange, isValid, resetForm };
}
