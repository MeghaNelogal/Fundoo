import axios from 'axios'
const headerConfig = {
    headers: { Authorization: localStorage.getItem("token") }

}
export const getNoteList = () => {
    let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", headerConfig)
    return response
}

export const addNotes = (inputTitleDes) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", inputTitleDes, headerConfig)
    return response
}

export const changesColorNotes = (inputTitleDes) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", inputTitleDes, headerConfig)
    return response
}

export const archiveNotes = (inputTitleDes) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", inputTitleDes, headerConfig)
    return response
}

export const trashNotes = (inputTitleDes) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", inputTitleDes, headerConfig)
    return response
}

export const updateNotes = (inputTitleDes) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes", inputTitleDes, headerConfig)
    return response
}