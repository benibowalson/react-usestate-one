import './App.css';
import Counting from './benny-components/Counting';

const someOne = "Benny"

function App() {
  return (
    <div className="App">
      <h1>Hello {someOne}</h1>    
      <Counting />  
    </div>
  );
}

export default App;
