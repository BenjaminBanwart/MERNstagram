import Post, {PostsInfo} from "../Posts/Post/Posts"
import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom"

interface PostContainerProps {
    data: []
}

const PostContainer = (props:PostContainerProps) => {
    
    const display = props.data.map((data:PostsInfo, i ) => {
        return(
            <Grid key={i} item xs={4}>
                <Link to={`/post/${data.post_id}`} style={{textDecoration: 'none'}}>
                    <Post data={data} key={i}/> 
                </Link>
            </Grid>
        )
    })

    return(
        <Grid container  xs={12}>
            {display}
        </Grid>
    )
}

export default PostContainer