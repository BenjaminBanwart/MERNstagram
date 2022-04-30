import './App.css';
import Post from './Components/Posts/Posts'
import Navbar from './Components/Navbar/Navbar';
import PostButton from './Components/PostButton/PostButton';
import { Pagination } from '@mui/material';
import Container from '@mui/material/Container'
import { display } from '@mui/system';


function App() {

  //Helper Function to populate page w/ posts
  const renderPosts = () => {
    let posts = []
    for(let i = 0; i < 10; i++){
      posts.push(
        <Post key={i}/>
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
      <Navbar/>
      <PostButton/>
      {renderPosts()} 
      <Pagination sx={{color: "#E9D8A6", display: "inline-block"}}  count={10} variant="outlined" size="large" shape="rounded"/>
    </div>
  );
}

export default App;
