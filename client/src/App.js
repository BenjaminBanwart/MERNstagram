import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Fragment } from "react";

import Form from './Components/Form/Form';
import MERNlogo from './assets/images/mernlogo.png';
import useStyles from './styles';
import './App.css';
import Post from './Components/Posts/Post/Posts'
import PostPage from "./Components/PostPage/PostPage";



const App = () => {
    const classes = useStyles();
    let [data, setData] = useState([])

    const API_URL = "https://mernstagram-api.herokuapp.com/posts"

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(API_URL)
        const resData = await response.json()
        console.log(resData)
        setData(resData)
      }
      fetchData()
    },[])

/*
      //Helper Function to populate page w/ posts
  const renderPosts = () => {
    let posts = []
    for(let i = 0; i < 10; i++){
      posts.push(
        <Grid item xs={4}>
        <Link to={'/post'} style={{textDecoration: 'none'}}>
        <Post key={i} data={data}/> 
        </Link>
        </Grid>
      )
    }
    return(
        <Grid container xs={8}>
          {posts}
        </Grid>
    )
  }
*/

//Rendering & populating Cards w/ backend data
const renderPosts = data.map((data, i) => {
  return(
    <Grid key={i} item xs={4}>
      <Link to={'/post'} style={{textDecoration: 'none'}}>
       <Post data={data}/> 
      </Link>
    </Grid>
  )
})


    return(
      <Router>
      <Container maxWidth="lg">
         <Link to={'/'} style={{textDecoration: 'none'}}>
           <AppBar className={classes.appBar} position="static" color="inherit">
               <img className={classes.image} src={MERNlogo} alt="memories" height="60" />
               <Typography  className={classes.heading} variant="h2" align="center">stagram</Typography>
           </AppBar>
           </Link>
           <Grow in>
               <Container>
                   <Routes>
                   <Route path='/' element={
                    <Fragment>
                   <Grid container justifyContent="space-between" spacing={1}>              
                      <Grid container xs={8}>
                        <Grid container  xs={12}>
                          {renderPosts}
                        </Grid>
                      </Grid>
                        <Grid item xs={4}>
                            <Form/>
                        </Grid>
                   </Grid>
                   </Fragment>
                   }/>
                   <Route path="/post" element={<PostPage/>} />
                   </Routes>               
               </Container>
           </Grow>
       </Container>
       </Router>
    )
}

export default App;