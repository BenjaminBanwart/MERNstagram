import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Fragment } from "react";
import axios from 'axios'

import Form from './Components/Form/Form';
import MERNlogo from './assets/images/mernlogo.png';
import useStyles from './styles';
import './App.css';
import PostPage from "./Components/PostPage/PostPage";
import PostContainer from "./Components/PostContainer/PostContainer"



const App = () => {
    const classes = useStyles();
    let [data, setData]:any = useState([])
    
    
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
        // Found from https://surajsharma.net/blog/axios-post-form-data
        const handleSubmit = async (e:Event, submitData:SubmitEvent) => {
          e.preventDefault(); // Event prevent default to prevent browser refresh
          console.log(submitData)
  
          try {
              await axios({
                  method: "post",
                  url: "https://mernstagram-api.herokuapp.com/posts" ,
                  data: submitData          
              })
              .then(response => {
                  console.log('saved')
                  const fetchData = async () => {
                    const response = await fetch(API_URL)
                    const resData = await response.json()
                    console.log(resData)
                    setData(resData)
                  }
                  fetchData()
              }) 
          } catch (err){
              console.log(err)
          }
      }

    return(
      <Router>
      <Container maxWidth="lg">
         <Link to={'/'} style={{textDecoration: 'none'}}>
           <AppBar className={classes.appBar} position="static" color="inherit">
               <img className={classes.image} src={MERNlogo} alt="Mernstagram" height="60" />
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
                        <PostContainer data={data}/>
                      </Grid>
                        <Grid item xs={4}>
                            <Form handleSubmit={handleSubmit}/>
                        </Grid>
                   </Grid>
                   </Fragment>
                   }/>
                   <Route path='/post/:id' element={<PostPage/>} />
                   </Routes>               
               </Container>
           </Grow>
       </Container>
       </Router>
    )
}

export default App;