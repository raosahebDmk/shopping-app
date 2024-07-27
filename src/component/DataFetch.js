import axios from "axios";
import { useEffect, useState } from "react";

const DataFetch =()=>{

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);

      console.log(data[1].title);
      console.log(isLoading);
      console.log(error);

      return(
        <>
            {data[1].title}
        </>
      )
}

export default DataFetch;