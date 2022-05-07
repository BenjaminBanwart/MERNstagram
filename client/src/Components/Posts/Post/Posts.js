import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import  CardMedia  from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import Mountain from '../../../assets/images/mountain.jpg'

const Post = (props) => {


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
                image={Mountain}
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