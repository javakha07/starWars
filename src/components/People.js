import React from 'react'
import {Link} from 'react-router-dom'



const People = ({posts, loading,}) => {
    
    

    if(loading)
    {
        return <h1 >Loading</h1>
    }
  return (

    <div >
      <ul className="lis-group mb-4 ">
      {posts.results.map((post,idx) =>
      (
        
          <li key={`id:${idx}`}  className="list-group-item Card">
          <Link className="mad" to={`/${post.url.match(/(\d+)/)[0]}`}>
          <h3>{post.name}</h3>
              
              <p className="text-light">Gender: {post.gender}
              <br/>
              Birth year: {post.birth_year}</p>
          
           </Link>
              
          </li>


      ))}

      </ul>

      
    </div>
    
  )
}

export default People