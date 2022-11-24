import React from 'react'
import './TakeNote2.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { addNotes } from '../../services/dataService';
import ColorPopper from '../Pages/ColorPoppup/ColorPoppup';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import PersonAddAltOutlined from '@mui/icons-material/PersonAddAltOutlined';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';



const useStyle = makeStyles({
    takenote2: {
        width: '50vw',
        height: '20vh',
        border: '0px solid red',
        display: 'flex',
        marginLeft: '3%',

        position: 'relative',
        left: '400px',
    },

    takenote2a: {
        width: '40vw',
        height: '22vh',
        boxSizing: 'border - box',
        opacity: '1',
        position: 'relative',
        minHeight: '105px',
        marginTop: '1%',
        marginRight: ' 0.7%',
        border: '0px solid red',
        display: 'flex',
        alignItems: 'flex - start',
        flexDirection: 'column',
        borderRadius: '8px',

    },
    note2a: {
        width: '130%',
        height: '35%',
        border: '0px solid yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        marginTop: '1%',
        marginLeft: '2%',
        fontSize: 'large',
        border: 'none',
        border: '0px solid red',
        outline: 'none',
        height: '100%',
        width: '80%',
    },
    icons: {
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '80px',
        border: '2px solid chartreuse',
    },
    note2b: {
        display: 'flex',
        width: '90%',
        height: '35%',
        border: '0px solid blue',
    },
    takenote: {
        height: '100%',
        width: '99%',
        marginLeft: '3%',
        border: 'none',
        outline: 'none',
        border: '0px solid chartreuse',
    },
    note2c: {
        width: '125%',
        height: '35%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: ' 0px solid pink',
    },
    noteIcons: {
        width: '150% ',
        height: '100%',
        border: '0px solid green',
        display: 'flex',
        marginRight: '95px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    close: {
        width: '30%',
        height: '100%',
        border: '0px solid maroon',
        marginLeft: '0%',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    note2d: {
        width: '100%',
        height: '100%',
        border: '0px solid red',
        display: 'flex',

    },
})


function TakeNote2(props) {
    const classes = useStyle()

    const [input, setInput] = useState({ title: "", description: "", color: "", isArchived: false, isDeleted: false })


    const inputTitle = (event) => {
        setInput(prevState => ({
            ...prevState,
            title: event.target.value
        }))
        console.log(event.target.value)
    }

    const inputDescripton = (event) => {
        setInput(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }




    const openNote1 = () => {
        props.listenToNote2()
        addNotes(input)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const listenToColor = (colour) => {
        setInput(prevState => ({
            ...prevState,
            color: colour
        }))
        console.log(colour, "gettingColor")
    }

    const ArchiveNote = () => {
        setInput(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("Archived")
    }



    return (

        <Box>
            <Paper elevation={3} className={classes.takenote2} >
                <Box className={classes.takenote2a} style={{ backgroundColor: input.color }}>
                    <Box className={classes.note2a} >
                        <input className={classes.title} placeholder="Title" onChange={inputTitle}></input>
                        <IconButton className={classes.icons}>
                            <Tooltip title="Pin">
                                <PushPinOutlinedIcon></PushPinOutlinedIcon>
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box className="note2b">
                        <InputBase className={classes.takenote} onChange={inputDescripton} placeholder='Take a note...'></InputBase>
                    </Box>

                    <Box className={classes.note2c}>
                        <Box className={classes.note2d}>


                            <Box className={classes.noteIcons}>
                                <Tooltip title="Remaind me">
                                    <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
                                </Tooltip>

                                <Tooltip title="Collaborator">
                                    <PersonAddAltOutlined></PersonAddAltOutlined>
                                </Tooltip>

                                <Tooltip title="Background options ">
                                    {/* <ColorLensOutlinedIcon></ColorLensOutlinedIcon> */}
                                    <ColorPopper listenToColor={listenToColor} action="create" />
                                </Tooltip>

                                <Tooltip title="Add Image ">
                                    <InsertPhotoOutlinedIcon></InsertPhotoOutlinedIcon>
                                </Tooltip>

                                <Tooltip title="Archive " onClick={ArchiveNote}>
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

                            </Box>
                            <Box className={classes.close} onClick={openNote1}>
                                <Button variant="text" size="small">Close</Button>
                            </Box>


                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default TakeNote2