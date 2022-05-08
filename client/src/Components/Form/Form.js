import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';




const Form = ({handleSubmit}) => {
    let [postData, setPostData] = useState({ creator: '', title: '', description: '', tags: '', selectedFile: '' }) 
    const classes = useStyles();

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={(e) => handleSubmit(e, postData)} action='/' method='POST'>
                <Typography variant="h6" className={`${classes.header}`} >Post a Story</Typography>
                <TextField name="creator" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64})}/></div>
                <Button  className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;