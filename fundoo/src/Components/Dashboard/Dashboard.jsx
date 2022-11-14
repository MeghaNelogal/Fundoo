import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNoteList } from '../../services/dataService'
import Header from '../Header/Header'
import TakeNote1 from '../TakeNote1/TakeNote1'
import TakeNote2 from '../TakeNote2/TakeNote2'
import TakeNote3 from '../TakeNote3/TakeNote3'

function Dashboard() {
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const listenToNote1 = () => {
        setToggle(true)
    }

    const listenToNote2 = () => {
        setToggle(false)
    }
    const getNote = () => {
        getNoteList() .then((response) => {
            console.log(response)
            setNoteList(response.data.data.data)
           
        })
        .catch((error) => {
            console.log(error)
        })
    }

useEffect(()=>{
   getNote()
},[])

    return (

        <div>

            <Header />

            <div>
                {
                    toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
                }
                <div style={{display:'flex',flexDirection:'row',border: '0px solid red',flexWrap:'wrap',width:'80vw',height:'60vh',marginLeft:'80px',marginTop:'40px'}}>
                    {
                        noteList.map((note)=>(<TakeNote3 note={note} getNote={getNote} /> ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Dashboard
