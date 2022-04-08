import React from 'react'
import People from "./People"
import PageNums from "./PageNums"
import SearchBar from "./SearchBar"

const CharactersList = (props) => {
  return (
    <div className="container">
      <h1 className=" mb-3" >Star Wars</h1>
      <SearchBar posts = {props.people} />
      <People posts = {props.people} loading = {props.loading}></People>
      <PageNums paginate = {props.setPage}/>
    </div>
  )
}
export default CharactersList
