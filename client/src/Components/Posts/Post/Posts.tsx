import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import  CardMedia  from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export interface PostsInfo {
    creator: string
    title: string
    date: any
    image: string
    description: string
    post_id: number
}

interface PostsProps {
    data: PostsInfo
}

const Post = (props:PostsProps) => {


    return(
        <Card sx={{ maxWidth: 250, margin: "20px", backgroundColor: "#E9D8A6" }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'blue' }}>
                    {props.data.creator}
                </Avatar>
            }
            title={props.data.title}
            subheader={props.data.date}
            />
            <CardMedia 
                sx = {{borderRadius: "10px" }}
                component="img"
                height="100"
                image={props.data.image}
                alt='Posted Image'
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>
                    {props.data.description}
                </Typography>
            </CardContent>
        </Card>
        
    )
}

export default Post