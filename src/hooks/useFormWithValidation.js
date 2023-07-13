import React, { useCallback } from "react";

export function useFormWithValidation (initialValue = {}) {
    const [values, setValues] = React.useState(initialValue);
    const [isValid, setIsValid] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setIsValid(target.closest("form").checkValidity());
        setErrors({ ...errors, [name]: target.validationMessage });
    };

    const resetForm = useCallback(
        (newValues = {}, newIsValid = false) => {
            setValues(newValues);
            setIsValid(newIsValid);
        },
        [setValues, setIsValid]
    );

    return { values, handleChange, isValid, resetForm, errors };
}
