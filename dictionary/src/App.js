import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Card from './components/card';
import Table from './components/table';
import Cardlist from './components/cardlist';
import Header from "./components/header";
import About from './components/about';
import WordList from './components/wordlist';
import data from './components/data';



function App() {
  return (
    <>
    <Header />
    
    <h1>Word table</h1>
   
    
    <div className="App">
    <Router>
    <Routes>
    
      <Route path='/wordlist' element={<WordList data={data}/>}></Route>
        
        <Route path='/dictionary'element={<Card />}></Route>
        <Route exact path='/' element={<About/>}></Route>
    
    </Routes>
    </Router>
    <Cardlist data={data}/>
    
      
      
    </div>
  
  

  
    </>
  );
}

export default App;
