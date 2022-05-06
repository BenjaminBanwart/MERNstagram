import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import axios from 'axios'

import useStyles from './styles';



const Form = () => {
    let [postData, setPostData] = useState({ creator: '', title: '', description: '', tags: '', selectedFile: '' })

    const classes = useStyles();

    // Found from https://surajsharma.net/blog/axios-post-form-data
    const handleSubmit = async (e) => {
        e.preventDefault(); // Event prevent default to prevent browser refresh
        setPostData(e)
        console.log(postData)

        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:4000/posts" ,
                data: postData            
            })
        } catch (err){
            console.log(err)
        }
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit} action='/' method='POST'>
                <Typography variant="h6" className={`${classes.header}`} >Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64})}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;