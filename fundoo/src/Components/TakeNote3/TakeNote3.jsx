import React from 'react'
import './TakeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton, InputBase, Tooltip } from '@mui/material';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import ColorPopper from '../Pages/ColorPoppup/ColorPoppup';
import { archiveNotes, trashNotes, updateNotes } from '../../services/dataService';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    takenote3: {
        width: '18vw',
        height: '25vh',
        flexWrap: 'wrap',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-Evenly',
        alignItems: 'center',
        // position: 'relative',
        marginLeft: '65%',
        // marginRight: '30%',
        // marginBottom: '100%',

    },
    takenote3a: {
        width: '90%',
        height: '70%',
        boxSizing: 'border-box',
        opacity: '1',
        position: 'relative',
        minHeight: '105px',
        marginTop: '1%',
        marginRight: '0.7%',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',

    },
    note3a: {
        width: '100%',
        height: '25%',
        border: '0px solid yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginTop: '13%',
    },
    note3b: {
        display: 'flex',
        width: '90%',
        height: '25%',
        alignItems: 'center',
        border: '0px solid blue',
        marginLeft: '5%',
        marginBottom: '10%',
    },
    iconspin: {
        position: 'relative',
        right: '15px',
    },
    iconpart: {
        height: '40%',
        border: '0px solid maroon',
        marginLeft: '5%',
        marginBottom: '8%',
    },
    icons1: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    ['@media only screen and (minWidth :320) and (maxWidth : 480)']: {
        width: '100vw',
    }
})


function TakeNote3(props) {
    const classes = useStyle()

    const [input, setInput] = React.useState({ noteId: "", title: "", description: "", color: "" })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 150,
        transform: 'translate(-50%, -50%)',
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        bgcolor: 'background.paper',
        border: '0px solid red',
        boxShadow: 24,
        p: 0,
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = (event) => {
        console.log(event, "abc")
        setInput({ noteId: event.id, title: event.title, description: event.description })
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const listenToColorUpdate = () => {
        props.getNote()
    }

    const updateColor = () => {
        props.getNote()
    }
    props.autoRefresh()


    const archiveUpdate = (id) => {
        let obj = { noteIdList: [id], isArchived: true }
        archiveNotes(obj)
            .then((response) => {
                console.log(response)
                props.autoRefresh()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const takingTitle = (event) => {
        setInput(prevState => ({
            ...prevState,//useState does not merge the state automatically.
            //We have to do it manually with the help of spread operator.
            title: event.target.value //event source of the callback.
        }))
        console.log(event.target.value)
    }
    const takingDes = (event) => {
        setInput(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }

    const deleteNote = (id) => {
        let deleteNotes = {
            noteIdList: [id], isDeleted: true
        }
        trashNotes(deleteNotes)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    const closeButton = () => {
        updateNotes(input).then((response) => {
            console.log(response)

        })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);
    }


    return (

        <Box>
            <Box className={classes.takenote3} >
                <Box className={classes.takenote3a} style={{ backgroundColor: props.note.color }}>

                    <Box className={classes.note3a} onClick={() => handleOpen(props.note)} >
                        {/* <p>Greeting Message!!</p> */}
                        <p >{props.note.title}</p>
                        <IconButton className={classes.iconspin}>
                            <Tooltip title="Pin">
                                <PushPinOutlinedIcon></PushPinOutlinedIcon>
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box className={classes.note3b} onClick={() => handleOpen(props.note)}>
                        {/* <p>Hello megha, How are You??</p> */}
                        <p>{props.note.description}</p>
                    </Box>

                    <Box className={classes.iconpart} >
                        <Box className={classes.icons1} >
                            <Tooltip title="Remaind me">
                                <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
                            </Tooltip>

                            <Tooltip title="trash" onClick={() => deleteNote(props.note.id)} >
                                <DeleteOutlined />
                            </Tooltip>

                            <Tooltip title="Background options ">
                                {/* <ColorLensOutlinedIcon></ColorLensOutlinedIcon> */}
                                <ColorPopper action="update" updateColor={updateColor} id={props.note.id} />
                            </Tooltip>

                            <Tooltip title="Add Image ">
                                <InsertPhotoOutlinedIcon></InsertPhotoOutlinedIcon>
                            </Tooltip>

                            <Tooltip title="Archive " onClick={() => archiveUpdate(props.note.id)}>
                                <ArchiveOutlinedIcon></ArchiveOutlinedIcon>
                            </Tooltip>

                            <Tooltip title="More ">
                                <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
                            </Tooltip>

                        </Box>
                    </Box>
                </Box>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: props.note.color }}>

                    <InputBase defaultValue={input.title} onChange={takingTitle} sx={{ height: '25%', marginLeft: '3%' }} />
                    <InputBase defaultValue={input.description} onChange={takingDes} sx={{ height: '40%', marginLeft: '3%' }} />


                    <Box sx={{ width: '80%', marginBottom: '10px', height: '50%', border: '0px solid red', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                        <Tooltip title="Remaind me" sx={{ width: '4%', display: 'flex', alignItems: 'flex-start', border: '0px solid black' }}>
                            <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="trash" sx={{ width: '4%' }} onClick={() => deleteNote(props.note.id)} >
                            <DeleteOutlined />
                        </Tooltip>

                        <Tooltip title="Background options">

                            <ColorPopper action="update" updateColor={updateColor} id={props.note.id} />
                        </Tooltip>

                        <Tooltip title="Add Image " sx={{ width: '4%' }}>
                            <InsertPhotoOutlinedIcon></InsertPhotoOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="Archive " onClick={() => archiveUpdate(props.note.id)} sx={{ width: '4%' }}>
                            <ArchiveOutlinedIcon></ArchiveOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="More " sx={{ width: '4%' }}>
                            <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="Undo " sx={{ width: '4%' }}>
                            <UndoOutlinedIcon></UndoOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="Redo " sx={{ width: '4%' }}>
                            <RedoOutlinedIcon></RedoOutlinedIcon>
                        </Tooltip>

                        <Button onClick={closeButton} sx={{ width: '20%', border: '0px solid yellow', color: 'black', position: 'relative', left: '130px', top: '10px' }}>
                            close
                        </Button >

                    </Box>



                </Box>
            </Modal>
        </Box>
    )
}

export default TakeNote3