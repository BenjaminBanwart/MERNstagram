import './App.css';
import Post from './Components/Posts/Posts'
import Navbar from './Components/Navbar/Navbar';

function App() {

  //Helper Function to populate page w/ posts
  const renderPosts = () => {
    let posts = []
    for(let i = 0; i < 10; i++){
      posts.push(
        <Post/>
      )
    }
    return(
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        {posts}
      </div>
    )
  }
  
  return (
    <div className="App"> 
      <h1>App!</h1>
      <Navbar/>
   
      {renderPosts()}
     
    </div>
  );
}

export default App;
