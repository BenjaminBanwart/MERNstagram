import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, CardMedia, Typography, Button } from '@mui/material'
import UpdateButton from '../UpdateButton/UpdateButton'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const PostPage = () => {
    const { id } = useParams()
    const [postData, setPostData] = useState([])

    useEffect(() => {
        const API_URL = `https://mernstagram-api.herokuapp.com/posts/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            setPostData(...resData)
        }
        fetchData()
    }, [ id ])


    return(
        <Container maxWidth="md">
            <Card>
                <CardHeader 
                    title= {postData.title}
                    subheader={postData.date}
                />
                <CardMedia 
                    component="img"
                    height=""
                    image={postData.image}
                    alt='user post'
                />
                <CardContent>
                    <Typography variant='h6' align='center'>Posted by {postData.creator}</Typography>
                    <Typography variant='body2' align='center'>
                    {postData.description}
                    </Typography>
                </CardContent>
            </Card>
            <UpdateButton postData={postData}/>
            <form action={`https://mernstagram-api.herokuapp.com/posts/${postData.post_id}?_method=DELETE`} method="POST">
                <Button color="error" variant='outlined' type="submit" value="DELETE" >Delete</Button>
            </form>
        </Container> 
    )
}

export default PostPage