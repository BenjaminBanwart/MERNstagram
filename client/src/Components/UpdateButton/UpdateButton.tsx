import { useState } from "react"
import  Box  from "@mui/material/Box"
import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import style from "./styles"
import {PostsInfo} from "../Posts/Post/Posts"

interface UpdateButtonProps {
    postData: PostsInfo
}


const CommentButton = (props:UpdateButtonProps) => {
    //From MUI Modal Docs https://mui.com/material-ui/react-modal/
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const API_CALL = 'https://mernstagram-api.herokuapp.com/posts/'

    return(
        <div>
        <Button  size="large" sx={{ color: "#94D2BD"}} onClick={handleOpen}>Something Wrong? Update Here!</Button>
            <Modal  open={open} onClose={handleClose}> 
            <form action={`${API_CALL}${props.postData.post_id}?_method=PUT`} method="POST">
            <Box sx={style}>
                <TextField 
                    sx={{ minWidth: '70%', margin: "15px"}}
                    required
                    id="outlined-required"
                    label="Username"
                    name="creator"
                    defaultValue={props.postData.creator}
                />
                <TextField 
                    sx={{ minWidth: '70%', margin: "15px"}}
                    required
                    id="outlined-required"
                    label="Title"
                    name="title"
                    defaultValue={props.postData.title}
                />
                <TextField 
                     sx={{ minWidth: '70%', margin: "15px"}}
                     label="Description"
                     name="description"
                     defaultValue={props.postData.description}
                />
                <TextField 
                     sx={{ minWidth: '70%', margin: "15px"}}
                     label="Image"
                     name="image"
                     defaultValue="Post a new image URL!"
                />
                <Button variant='outlined' color="primary" type="submit">Submit</Button>
            </Box>
            </form>
            </Modal>
        </div>
       
            
    )
}

export default CommentButton