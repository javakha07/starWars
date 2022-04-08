import React from 'react'
import {useParams} from "react-router-dom"
import useFetch from "../API/useFetch"

const CharacterPage = (props) => {

  const {id} = useParams();
  
  

  const {people,loading} = useFetch(`https://swapi.dev/api/people/${id}`)

  if(loading)
  {
    return <h3>Loading...</h3>
  }
  else return (

    <div>
    <h1>{people.name}</h1>
    <p className="text-light char-text">Gender: {people.gender}
              <br/>
              Birth year: {people.birth_year}
              <br/>
              Skin Color: {people.skin_color}
              <br/>
              Eye Color: {people.eye_color}
              <br/>
              Height: {people.height}
              <br/>
              Mass: {people.mass}
              </p>
    </div>
  )
}

export default CharacterPage