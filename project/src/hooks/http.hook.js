import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [process, setProcess] = useState('waiting'); // default state
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      // loading in fetching
      setProcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok)
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);

        const data = await response.json();

        // setProcess('confirmed'); // in .then with promise in any file
        return data;
      } catch (error) {
        setProcess('error'); // error fetching
        console.log(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);

    setProcess('loading'); // again loading state
  }, []);

  return { request, error, clearError, process, setProcess };
};
