import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState('waiting'); // default state

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      // loading in fetching
      setLoading(true);
      setProcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok)
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);

        const data = await response.json();

        setLoading(false);
        // setProcess('confirmed') in .then with promise in any file
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        setProcess('error'); // error fetching
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);

    setProcess('loading'); // again loading state
  }, []);

  return { request, clearError, loading, error, process, setProcess };
};
