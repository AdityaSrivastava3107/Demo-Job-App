import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = async (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          "X-RapidAPI-Key": 'f79411c72bmsh0bb13e8e80d97d4p168049jsn539c668035f5',
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        },
        params: { ...query },
      };
    
      const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
    
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    

    const refetchData = () => {
        setIsLoading(true);
        fetchData();
    }

    return { refetchData, isLoading, error, data }
}

export default useFetch;