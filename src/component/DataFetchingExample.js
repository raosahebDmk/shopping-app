import { useEffect, useState } from "react";
import axios from 'axios';


const DataFetchingExample = () =>{

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            setData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);



}

export default DataFetchingExample;