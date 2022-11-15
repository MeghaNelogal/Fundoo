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

function TakeNote3(props) {
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
    const archiveUpdate = (id) => {
        let obj = { noteIdList: [id], isArchived: true }
        archiveNotes(obj)
            .then((response) => {
                console.log(response)
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

        <div>
            <div className="takenote3">
                <div className="takenote3a" style={{ backgroundColor: props.note.color }}>

                    <div className="note2a" onClick={() => handleOpen(props.note)} >
                        {/* <p>Greeting Message!!</p> */}
                        <p >{props.note.title}</p>
                        <IconButton className="icons">
                            <Tooltip title="Pin">
                                <PushPinOutlinedIcon></PushPinOutlinedIcon>
                            </Tooltip>
                        </IconButton>
                    </div>
                    <div className="note2b" onClick={() => handleOpen(props.note)}>
                        {/* <p>Hello megha, How are You??</p> */}
                        <p>{props.note.description}</p>
                    </div>

                    <div className="iconpart" >
                        <div className="icons1">
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

                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: props.note.color }}>

                    <InputBase defaultValue={input.title} onChange={takingTitle} sx={{ height: '25%', marginLeft: '3%' }} />
                    <InputBase defaultValue={input.description} onChange={takingDes} sx={{ height: '25%', marginLeft: '3%' }} />


                    <Box sx={{ width: '100%', height: '50%', border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                        <Tooltip title="Remaind me" sx={{ width: '5%', display: 'flex', alignItems: 'flex-start', border: '0px solid black' }}>
                            <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="trash" onClick={() => deleteNote(props.note.id)} >
                            <DeleteOutlined />
                        </Tooltip>

                        <Tooltip title="Background options ">

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

                        <Tooltip title="Undo ">
                            <UndoOutlinedIcon></UndoOutlinedIcon>
                        </Tooltip>

                        <Tooltip title="Redo ">
                            <RedoOutlinedIcon></RedoOutlinedIcon>
                        </Tooltip>

                        <Button onClick={closeButton}>
                            close
                        </Button >

                    </Box>

                </Box>
            </Modal>
        </div>
    )
}

export default TakeNote3