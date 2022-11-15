import React from 'react'
import './TakeNote2.css'
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
import { useState } from 'react';
import { addNotes } from '../../services/dataService';
import ColorPopper from '../Pages/ColorPoppup/ColorPoppup';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import PersonAddAltOutlined from '@mui/icons-material/PersonAddAltOutlined';


function TakeNote2(props) {
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

        <div>
            <div className="takenote2" >
                <div className="takenote2a" style={{ backgroundColor: input.color }}>
                    <div className="note2a">
                        <input className="title" placeholder="Title" onChange={inputTitle}></input>
                        <IconButton className="icons">
                            <Tooltip title="Pin">
                                <PushPinOutlinedIcon></PushPinOutlinedIcon>
                            </Tooltip>
                        </IconButton>
                    </div>
                    <div className="note2b">
                        <InputBase className='takenote' onChange={inputDescripton} placeholder='Take a note...'></InputBase>
                    </div>

                    <div className="note2c">
                        <div className="noteIcons">
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
                        </div>
                        <div className="close" onClick={openNote1}>
                            <Button variant="text" size="small">Close</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeNote2