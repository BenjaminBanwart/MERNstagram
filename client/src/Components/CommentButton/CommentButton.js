import { useState } from "react"
import  Box  from "@mui/material/Box"
import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"

import style from "./styles"

const CommentButton = () => {
    //From MUI Modal Docs https://mui.com/material-ui/react-modal/
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return(
        <div>
            <Button  size="large" sx={{ color: "#94D2BD"}} onClick={handleOpen}>Leave a Comment!</Button>
            <Modal 
                open={open}
                onClose={handleClose}  
            >
            <Box sx={style} component="form">
                <TextField 
                    sx={{ minWidth: '70%', margin: "15px"}}
                    required
                    id="outlined-required"
                    label="Comment"
                    defaultValue="Comment Here!"
                /> 
                <Button color="primary" type="submit">Submit</Button>
            </Box>
            </Modal>
        </div>
    )
}

export default CommentButton