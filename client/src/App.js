import './App.css';
import Post from './Components/Posts/Posts'
import Navbar from './Components/Navbar/Navbar';
import Pagination from './Components/Pagination/Pagination';
import Container from '@mui/material/Container'

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
      <Container maxWidth="lg" sx={{display: "flex", flexWrap: "wrap"}}>
        {posts}
      </Container>
    )
  }
  
  return (
    <div className="App"> 
      <h1>App Header</h1>
      <Navbar/>
      {renderPosts()} 
      <Pagination/>
    </div>
  );
}

export default App;
