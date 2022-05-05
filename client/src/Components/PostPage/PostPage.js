import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, CardMedia, Typography } from '@mui/material'
import MERNlogo from '../../assets/images/mernlogo.png'
import CommentButton from '../CommentButton/CommentButton'

const PostPage = () => {
    return(
        <Container maxWidth="md">
            <Card>
                <CardHeader 
                    title= '{Post Title}'
                    subheader=' {Post Date}'
                />
                <CardMedia 
                    component="img"
                    height=""
                    image={MERNlogo}
                    alt='user post'
                />
                <CardContent>
                    <Typography variant='h4' align='center'>Post Description</Typography>
                    <Typography variant='body2' align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien. Malesuada nunc vel risus commodo viverra. Mauris rhoncus aenean vel elit scelerisque. Tellus elementum sagittis vitae et leo. Scelerisque purus semper eget duis at tellus at. Tempus iaculis urna id volutpat. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi tincidunt ornare massa eget egestas purus viverra. Tortor consequat id porta nibh venenatis cras. Nam at lectus urna duis convallis convallis tellus.
                    </Typography>
                </CardContent>
            </Card>
            <CommentButton/>
        </Container> 
    )
}

export default PostPage