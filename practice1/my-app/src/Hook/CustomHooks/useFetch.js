import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    

    useEffect(() =>{
       setTimeout(() =>{
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error('Fetching is not successful');
                }
                else{
                    return res.json();
                }
                
            })
            .then((data) => {
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false);
            })
       }, 2000)
    }, [url]);
    
    return {data, isLoading, error}
}

export default useFetch
