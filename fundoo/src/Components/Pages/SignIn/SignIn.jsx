import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import './SignIn.css'
import { loginApi } from "../../../services/userService";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {



    const [signInObj, setSignInObj] = useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takeEmail = (event) => {
        setSignInObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
        setSignInObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(signInObj.email)
        let pwdTest = passwordRegex.test(signInObj.password)
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
        console.log(signInObj)

        if (emailTest === true && pwdTest === true) {
            loginApi(signInObj)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("token",response.data.id)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("login success")
        }

    }


    return (
        <div>
            <div className="Maindiv">
                <div className="imgtag">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="75px" height="24px" alt="logo" />
                </div>
                <div className="secondline">
                    <h1>Sign in</h1>
                    <p>Use your Google Account</p>
                    <div className="textfield">
                        <TextField id="outlined-basic" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email or Phone" variant="outlined" size="small" />
                        <TextField id="outlined-basic" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Pssword" variant="outlined" size="small" />
                        {/* <input type="textfield1" placeholder="Email or Phone" />
                        <input type="textfield2" placeholder="Password" /> */}
                    </div>
                    <div className="forgotlink">
                        <a href="{url}">Forgot email?</a>
                    </div>


                </div>
                <p>Not your computer? Use Guest mode to sign in privately.</p>
                <div className="learnmore">
                    <a href="{url}">Learn more</a>
                </div>

                <div className="buttontag">
                    <div className="button1SI">
                        <button class="b2">Create Account</button>
                    </div>
                    <div className="button2SI">
                        <button class="b1" onClick={submit}>Next</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn

