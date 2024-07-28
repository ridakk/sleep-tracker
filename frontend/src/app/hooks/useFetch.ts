import { useState, useEffect, useCallback } from 'react';

function useFetch<T>(url: string): [boolean, T[], { details: string } | null] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<{ details: string } | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);

    const res = await fetch(`http://localhost:8000${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    setLoading(false);

    if (data.status > 400) {
      setError(data);
      setData([]);
      return;
    }

    console.log(data);

    setError(null);
    setData(data.result);
  }, [url]);

  useEffect(() => {
    async function fetchInitalData() {
      await fetchTasks();
    }
    fetchInitalData();
  }, [fetchTasks]);

  return [loading, data, error];
}

export default useFetch;
