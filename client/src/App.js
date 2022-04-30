import './App.css';
import Post from './Components/Posts/Posts'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App"> 
      <h1>App!</h1>
      <Navbar/>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Post/>
      </div>
    </div>
  );
}

export default App;
