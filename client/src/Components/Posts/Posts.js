import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const Post = () => {
    return(
        <Card sx={{ maxWidth: 275 }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'blue' }}>
                    RB
                </Avatar>
            }
            title="{Post Description}"
            subheader="{Date posted}"
            
            
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>
                    Card!
                </Typography>
            </CardContent>

        </Card>
    )
}

export default Post