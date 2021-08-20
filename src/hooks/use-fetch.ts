import { useEffect } from 'react';

type Return = { data?: null; loading: boolean };

/**
 * Use fetch
 */
export function useFetch(): Return {
  useEffect(() => {
    console.log('hello');
  });

  return {
    data: null,
    loading: false,
  };
}
