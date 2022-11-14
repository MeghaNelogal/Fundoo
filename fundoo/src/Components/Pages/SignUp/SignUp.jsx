import React, { useState } from "react"
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signupApi } from "../../../services/userService";


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const nameRegex = /^[A-Z]{1}[a-z]{2,}$/

function SignUp() {

    const [signUpObj, setSignUpObj] = useState({ email: "", password: "",firstName: "", lastName: ""})
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "", firstNameBorder:false, firstNameHelper: "",lastNameBorder: false,lastNameHelper: ""})

    const takeEmail = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeFirstName = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeLastName = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }


    const submit = () => {
        let emailTest = emailRegex.test(signUpObj.email)
        let pwdTest = passwordRegex.test(signUpObj.password)
        let firstNameTest = nameRegex.test(signUpObj.firstName)
        let lastNameTest = nameRegex.test(signUpObj.lastName)
        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter valid Email or Phone"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: " "
            }))
        }


        if (pwdTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter valid Email or Phone"
            }))
        }
        else if (pwdTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: " "
            }))
        }
        console.log(signUpObj)

        if (emailTest === true && pwdTest === true) {
            signupApi(signUpObj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("login success")
        }

        //for firstname and lastname

        if (firstNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter valid First Name"
            }))
        }
        else if (lastNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: " "
            }))
        }


        if (lastNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter valid Last Name"
            }))
        }
        else if (lastNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: " "
            }))
        }
        console.log(signUpObj)

        if (firstNameTest === true && lastNameTest === true) {
            signupApi(signUpObj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("login success")
        }


    }


    return (

        <div className="maincontainer">
            <div className="child1">
                <div className="googleimg">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="75px" height="24px" alt="logo" />
                </div>
                <div className="firstpara">
                <p>Create your Google Account</p>
                </div>
               
                <div className="textfield1">
                    {/* <input type="Firstname" placeholder="first name" />
                    <input type="Lastname" placeholder="Last name" /> */}
                    <TextField id="outlined-basic"  onChange={takeFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper}   label="Firstname" variant="outlined" size="small" />
                    <TextField id="outlined-basic" onChange={takeLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} label="Lastname" variant="outlined" size="small" />
                </div>
                <div className="secondpara">
                <p>Use my current email address instead</p>
                </div>
                
                <div className="textfield2">
                    {/* <input type="Username" placeholder="Username" /> */}
                    <TextField id="outlined-basic" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Username" variant="outlined" size="small" />
                    <p>You can use letters, numbers &amp; periods</p>                  
                </div>

                <div className="textfield3">
                    {/* <input type="Password" placeholder="Password" />
                    <input type="Confirm" placeholder="Confirm" /> */}
                    <TextField id="outlined-basic" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size="small" />
                    <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" />
                </div>
               
                <div className="thirdpara">
                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </div>

                <div className="checkbox1">
                <input type="checkbox" />
                        <label>  Show password</label>
                </div>

                <div className="footer">
                   
                    <Button href="#text-buttons" size="small">ign in instead</Button>
                    <Button variant="contained" onClick={submit} size="small">Next</Button>
                   
                   
                </div>
               
            
            </div>

            <div className="child2">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="img" />
                <p>One account. All of Google <br></br>working for you.</p>
            </div>
          
        </div>

    )
}

export default SignUp
