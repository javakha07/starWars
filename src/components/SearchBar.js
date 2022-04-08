import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function SearchBar({posts}) {
    const[filteredData, setFilteredData] = useState([]);
    

    const handleChange = (event) =>
    {
        const searchWord = event.target.value;
        const newFilter = posts.results.filter((value)=> {return value.name.toLowerCase().includes(searchWord.toLowerCase())});
        
        if(searchWord === "")
        {
            setFilteredData([])
        }
        else
        {
            setFilteredData(newFilter);

        }
    }



  return (
    <div className="search">
        <div className="searchInputs" >
            <input placeholder="Search..." type="text" onChange={handleChange}/>
            <div className="searchIcon"></div>
        </div>
        {filteredData.length !== 0 &&
            <div className="dataResult">
        {filteredData.map((value,key) =>  ( <Link  className="mad dataItem" to={`/${value.url.match(/(\d+)/)[0]}`}href="/" ><p>{value.name}</p></Link>))}
            
        </div>}
    </div>
  )
}

export default SearchBar