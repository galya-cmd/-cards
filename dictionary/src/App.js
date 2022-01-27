import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Card from './components/card';
import Cardlist from './components/cardlist';
import Header from "./components/header";
import About from './components/about';
import WordList from './components/wordlist';
import data from './components/data';
import Error from './components/error';




function App() {
  return (
    <>
    
    
    <div className="App">
    <Header />


    <Router>
    <Routes>
    
      <Route path='/wordlist' element={<WordList data={data}/>}></Route>
        
        <Route path='/dictionary'element={<Cardlist data={data}/>}></Route>
        <Route  path='/about' element={<About />} ></Route>

        <Route path= "*" element={Error}/>
        
      
    
    </Routes>
    </Router>
    
    
      
      
    </div>
  
  

  
    </>
  );
}

export default App;
