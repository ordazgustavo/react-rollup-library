import { useEffect } from 'react';

type Return = { data?: null; loading: boolean };

export function useFetch(): Return {
  useEffect(() => {
    console.log('hello');
  });

  return {
    data: null,
    loading: false,
  };
}
