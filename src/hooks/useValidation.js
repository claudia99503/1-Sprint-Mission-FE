import { useState, useCallback } from 'react';

const useValidation = (values) => {
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};

    if (!values.name || values.name.length > 10) {
      newErrors.name = '10자 이내로 입력해주세요';
    }

    if (!values.description || values.description.length < 10) {
      newErrors.description = '10자 이상 입력해주세요';
    }

    if (!values.price || isNaN(values.price)) {
      newErrors.price = '숫자로 입력해주세요';
    }

    if (values.tags.length === 0) {
      newErrors.tags = '5글자 이내로 입력해주세요';
    }

    if (values.tags.length > 0 && values.tags.some(tag => tag.length > 5)) {
      newErrors.tags = '5글자 이내로 입력해주세요';
    }

    // 현재 오류 상태와 새로운 오류 상태를 비교하여 변경된 경우에만 업데이트
    if (JSON.stringify(newErrors) !== JSON.stringify(errors)) {
      setErrors(newErrors);
    }

    return Object.keys(newErrors).length === 0;
  }, [values, errors]);

  return { errors, validate };
};

export default useValidation;

