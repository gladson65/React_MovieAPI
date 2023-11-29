import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import AboutView from './components/about.js';
import SearchView from './components/search.js';
import MovieView from './components/movieview.js';
// import Hero from './components/hero.js';
import { Routes, Route} from 'react-router-dom';

function App() {

  const [serachResult, setSerachResult] = useState([])
  const [searchText, setSearchText] = useState('')
  

  useEffect(()=> {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=fbb9959b2a03262d7a211c51e5f2a8b7&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          if(data){
            setSerachResult(data.results)
          } 
              
      })
    } 
    
    
  }, [searchText])

  return (
    <div className="bg-primary bg-opacity-25 pb-2">
      <Navbar searchText={searchText} setSearchText={setSearchText} serachResult={serachResult}/>
      
      <Routes>       
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutView />}></Route>
        <Route path='/search' element={<SearchView Keyword={searchText} serachResult={serachResult} />}></Route>
        <Route path='/movies/:id' element={<MovieView />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
     