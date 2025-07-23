useEffect(() => {
  const fetchMetrics = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/metrics');
      const data = await response.json();
      setMetrics(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch metrics:", error);
      setLoading(false);
    }
  };
  fetchMetrics();
}, []);
