import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNoteList } from '../../services/dataService'
import MiniDrawer from '../Drawer/Drawer'
import Header from '../Header/Header'
import TakeNote1 from '../TakeNote1/TakeNote1'
import TakeNote2 from '../TakeNote2/TakeNote2'
import TakeNote3 from '../TakeNote3/TakeNote3'

function Dashboard() {
    const [toggle, setToggle] = useState(false)
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

    const getNote = () => {
        getNoteList().then((response) => {
            let filterNotes = []
            if (choice === "Notes") {
                filterNotes=response.data.data.data.filter((notes)=>{
                    if(notes.isArchived===false && notes.isDeleted===false){
                        return notes
                    }
                })
            }
            else if (choice === "Archive") {
                filterNotes=response.data.data.data.filter((notes)=>{
                    if(notes.isArchived===true && notes.isDeleted===false){
                        return notes
                    }
                })
            }
            else if (choice === "Trash") {
                filterNotes=response.data.data.data.filter((notes)=>{
                    if(notes.isArchived===false && notes.isDeleted===true){
                        return notes
                        console.log(notes,"deletedNotes")
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

        <div>

            <Header listenToHeader={listenToHeader} />
            <MiniDrawer drawertoggle={drawertoggle} listenToDrawer={listenToDrawer} />

            <div>
                {
                    toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
                }
                <div style={{ display: 'flex', flexDirection: 'row', border: '0px solid red', flexWrap: 'wrap', width: '80vw', height: '60vh', marginLeft: '80px', marginTop: '40px' }}>
                    {
                        noteList.map((note) => (<TakeNote3 note={note} getNote={getNote} />))
                    }
                </div>

            </div>

        </div>
    )
}

export default Dashboard
