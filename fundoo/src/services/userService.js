import axios from "axios";
export const loginApi= (loginObj) => {
let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
return response
}

export const signupApi= (loginObj) => {
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
    return response
    }