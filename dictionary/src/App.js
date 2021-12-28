import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Input from './components/input';
import Test from './components/test';
import Table from './components/table';
import Dictionary1 from './components/dictionary1';
import Dictionary2 from './components/dictionary2';
import Header from "./components/header";
import About from './components/about'



let dicts = [{name: 'hi', transcription : '[хай]', translation:"привет" },{
  name: 'hello', transcription : '[хэлоу]', translation:"здравствуйте,привет" 
}, {
  name: 'sorry', transcription : '[сори]', translation:"извини(те)" 
}]



function App() {
  return (
    <>
    <Header />
    <Input />
    <h1>Word table</h1>
    <Router>
    <Routes>
      
      <Route exact path='/table'element={<Table/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route path='/dictionary'element={<Dictionary />}></Route>
    
    </Routes>
    </Router>
    
    <div className="App">
      
      
      
      
    </div>
    <div>
      
      {
        dicts.map((dict) => <Table name={dict.name} transcription = {dict.transcription } translation = {dict.translation}></Table>
        )
      }
    </div>

  
    </>
  );
}

export default App;
