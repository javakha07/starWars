import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import CharacterPage from "./components/CharacterPage";
import './App.css';
import useFetch from "./API/useFetch"

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  function setPage (pageNumber)
  {
    setCurrentPage(pageNumber);
  }
const {people,loading} = useFetch(`https://swapi.dev/api/people/?page=${currentPage}`)

  return (<div>
    <Router>
      <Routes>
        <Route exact path="/" element={<CharactersList
          people = {people}
          loading = {loading}
          setPage = {setPage}

        />}/>
        <Route exact path=":id" element={<CharacterPage/>}/>
      </Routes>
    </Router>
  </div>);
}

export default App;
