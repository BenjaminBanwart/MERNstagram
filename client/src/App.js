import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import { useDispatch } from 'react-redux'; // Dispatch an action
import { getPosts } from './actions/posts';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Fragment } from "react";

import Form from './Components/Form/Form';
import MERNlogo from './assets/images/mernlogo.png';
import useStyles from './styles';
import './App.css';
import Post from './Components/Posts/Post/Posts'


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

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
        <Link to={'/post'}>
          {posts}
        </Link>
      </Container>
    )
  }

    useEffect(() => {
        dispatch(getPosts()); // Dispatch an action
    }, [dispatch]);

    return(
       <Container maxidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
               <img className={classes.image} src={MERNlogo} alt="memories" height="60" />
               <Typography className={classes.heading} variant="h2" align="center">stagram</Typography>
           </AppBar>
           <Grow in>
               <Container>
                 <Router>
                   <Routes>
                   <Route path='/' element={
                    <Fragment>
                   <Grid container justifyContent="space-between" alignItems="stretch" spacing="{3}" >
                        <Grid item xs={12} sm={7}>
                            {renderPosts()} 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                   </Grid>
                   </Fragment>
                   }/>
                   </Routes>
                  </Router>
               </Container>
           </Grow>
       </Container>
    )
}

export default App;