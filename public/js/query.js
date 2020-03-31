import { useState, useCallback } from "react";
import qs from 'qs';
import { router } from './routes';

const setQueryStringWithoutPageReload = qsValues => {
  router.navigate(router.getState().name, qsValues);
};

export const setQueryString = (keyValues) => {
  setQueryStringWithoutPageReload(keyValues);
};

export const getQueryStringValues = (queryString = window.location.search.slice(1)) => {
  const values = qs.parse(queryString);
  return values;
};

const useQueryString = (initialValue) => {
  const [values, setValues] = useState(getQueryStringValues() || initialValue);
  const onSetValues = useCallback(
    newValues => {
      setValues(newValues);
      setQueryString(newValues);
    },
    []
  );

  return [values, onSetValues];
}

export default useQueryString;
