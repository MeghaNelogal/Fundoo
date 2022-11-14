import React from 'react'
import './TakeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Tooltip } from '@mui/material';

function TakeNote1(props) {

    const openNote2 = () => {
        props.listenToNote1()
    }
    return (

        <div>

            <div className="takenote" onClick={openNote2}>
                <div className="takenote1">
                <input className="note1"  placeholder="Take note..."></input>
                <div className="takenoteIcon">
                    <Tooltip title="New list ">
                    <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>
                    </Tooltip>
                    <Tooltip title="New note with drawing ">
                    <BrushOutlinedIcon></BrushOutlinedIcon>
                    </Tooltip>
                    <Tooltip title="New note with image">
                    <ImageOutlinedIcon></ImageOutlinedIcon>
                    </Tooltip>
              
               
               
                </div>

                </div>
            </div>
        </div>
    )
}

export default TakeNote1
