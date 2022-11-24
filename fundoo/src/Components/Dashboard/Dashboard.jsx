import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNoteList } from '../../services/dataService'
import MiniDrawer from '../Drawer/Drawer'
import Header from '../Header/Header'
import TakeNote1 from '../TakeNote1/TakeNote1'
import TakeNote2 from '../TakeNote2/TakeNote2'
import TakeNote3 from '../TakeNote3/TakeNote3'
import Box from '@mui/material/Box';

function Dashboard() {
    const [toggle, setToggle] = useState(false) //useState have 2 parameters
    const [noteList, setNoteList] = useState([])
    const [drawertoggle, setDrawerToggle] = useState(false)
    const [choice, setChoice] = useState('Notes')

    const listenToHeader = () => {
        setDrawerToggle(!drawertoggle)
    }

    const listenToDrawer = (event) => {
        setChoice(event)
    }

    const listenToNote1 = () => {
        setToggle(true)
    }

    const listenToNote2 = () => {
        setToggle(false)

    }

    const autoRefresh = () => {
        getNote()
    }

    const getNote = () => {
        getNoteList().then((response) => {
            let filterNotes = []
            if (choice === "Notes") {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (choice === "Archive") {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === true && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (choice === "Trash") {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === true) {
                        return notes
                        console.log(notes, "deletedNotes")
                    }
                })
            }
            console.log(response)
            setNoteList(filterNotes)

        })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getNote()
    }, [choice])

    return (

        <Box>

            <Header listenToHeader={listenToHeader} />
            <MiniDrawer drawertoggle={drawertoggle} listenToDrawer={listenToDrawer} />

            <Box>
                {
                    toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
                }
                <Box style={{ display: 'flex', flexDirection: 'row', border: '0px solid red', flexWrap: 'wrap', width: '80vw', height: '60vh', marginLeft: '80px', marginTop: '40px' }}>
                    {
                        noteList.map((note) => (<TakeNote3 note={note} getNote={getNote} autoRefresh={autoRefresh} />))
                    }
                </Box>

            </Box>

        </Box>
    )
}

export default Dashboard
