import { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios

export default function useFetchData(path) { // Add 'function' keyword
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:5000'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${path}`); // Concatenate with the path
        
        setData(response.data);
        
      } catch (err) {
        setError(err.message);
        console.error("Problem retrieving data", err);
      }
    };

    fetchData();
  }, [path]);

  return { data, error };
}
