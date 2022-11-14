import React from 'react'
import './TakeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton, Tooltip } from '@mui/material';
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
import { archiveNotes, trashNotes } from '../../services/dataService';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

function TakeNote3(props) {
    const updateColor = () => {
        props.getNote()
    }
    const archiveUpdate = (id) => {
        let obj={noteIdList:[id],isArchived:true}
        archiveNotes(obj)
        .then((response) => {
            console.log(response)           
        })
        .catch((error) => {
            console.log(error)
        })
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

  

    return (
        <div>
            <div className="takenote3">
                <div className="takenote3a" style={{backgroundColor:props.note.color}}>
                    <div className="note2a">
                        {/* <p>Greeting Message!!</p> */}
                        <p>{props.note.title}</p>
                        <IconButton className="icons">
                            <Tooltip title="Pin">
                                <PushPinOutlinedIcon></PushPinOutlinedIcon>
                            </Tooltip>
                        </IconButton>
                    </div>
                    <div className="note2b">
                        {/* <p>Hello megha, How are You??</p> */}
                        <p>{props.note.description}</p>
                    </div>

                    <div className="iconpart">
                        <div className="icons1">
                            <Tooltip title="Remaind me">
                                <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
                            </Tooltip>

                            <Tooltip title="trash"  onClick={() => deleteNote(props.note.id)} >
                               <DeleteOutlined />
                            </Tooltip>

                            <Tooltip title="Background options ">
                                {/* <ColorLensOutlinedIcon></ColorLensOutlinedIcon> */}
                                <ColorPopper action="update" updateColor={updateColor} id={props.note.id}/>
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
        </div>
    )
}

export default TakeNote3