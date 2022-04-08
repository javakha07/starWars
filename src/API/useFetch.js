import {useState,useEffect} from 'react'


const useFetch = (url) => {

    const [people, setPeople] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => 
    {
      async function fetchPeople()
      {
        setLoading(true);
        let res = await fetch(url);
        let data = await res.json();
        setPeople(data);
        setLoading(false);
      }
      fetchPeople();
    }, [url])
    

    return {people,loading}
  
}


export default useFetch
