import React, { FormEvent, FormEventHandler, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';



const Form = ({handleSubmit}: {handleSubmit: any}) => {
    let [postData, setPostData] = useState({ creator: '', title: '', description: '', image: '' }) 
    const classes: any = useStyles();

    const clear = () => {
        setPostData({ creator: '', title: '', description: '', image: '' })
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={(e) => handleSubmit(e, postData)} action='/' method='POST'>
                <Typography variant="h6" className={`${classes.header}`} >Post a Story</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Write about your story!" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                <TextField name="image" variant='outlined' label="Post an image URL!" fullWidth value={postData.image} onChange={(e) => setPostData({...postData, image:e.target.value})} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;