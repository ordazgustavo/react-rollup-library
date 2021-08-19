type Return = { data?: null; loading: boolean };

export function useFetch(): Return {
  return {
    data: null,
    loading: false,
  };
}
