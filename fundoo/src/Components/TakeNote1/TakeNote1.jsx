import React from 'react'
import './TakeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
    takenote: {
        height: '7vh',
        width: ' 50vw',
        position: 'relative',
        left: '400px',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    takenote1: {
        boxSizing: 'border-box',
        opacity: '1',
        position: 'relative',
        marginTop: '1%',
        width: '50vw',
        height: '6vh',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '5px 5px 5px 5px',

    },
    note1: {
        marginLeft: '2%',
        width: '120%',
        fontSize: '16px',
        color: '#202124',
        fontWeight: '400',
        lineHeight: '1.25rem',
        height: '92%',
        border: 'none',
        outline: 'none',
    },
    takenoteIcon: {
        width: '45%',
        height: '92%',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

})

function TakeNote1(props) {
    const classes = useStyle()
    const openNote2 = () => {
        props.listenToNote1()
    }
    return (

        <Box>
            <Paper elevation={3} className={classes.takenote} onClick={openNote2}>
                <Box className={classes.takenote1}>
                    <input className={classes.note1} placeholder="Take note..."></input>
                    <Box className={classes.takenoteIcon}>
                        <Tooltip title="New list ">
                            <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>
                        </Tooltip>
                        <Tooltip title="New note with drawing ">
                            <BrushOutlinedIcon></BrushOutlinedIcon>
                        </Tooltip>
                        <Tooltip title="New note with image">
                            <ImageOutlinedIcon></ImageOutlinedIcon>
                        </Tooltip>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default TakeNote1
