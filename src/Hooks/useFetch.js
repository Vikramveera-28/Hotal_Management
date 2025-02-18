import React, { useEffect, useState } from 'react'
import api from '../Api/apiUrl';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await api.get(url);
                setData(response.data);
                setError(null)
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [data])
  return [data, setData, error, isLoading];
}

export default useFetch;