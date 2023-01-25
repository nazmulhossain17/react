import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Data from './components/Data/Data';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
     <Header/>
     <Data/>
     <Question/>
    </div>
  );
}

export default App;
