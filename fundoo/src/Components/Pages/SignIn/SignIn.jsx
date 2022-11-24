import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import './SignIn.css'
import { loginApi } from "../../../services/userService";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    MainBox: {
        height: '85vh',
        width: '35vw',
        border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '33%',
        top: '60px',
    },
    imgtag: {
        width: '100%',
        height: '13%',
        border: '0px solid green',
        position: 'relative',
        top: '-88px',
    },
    secondline: {
        width: '100%',
        height: '27%',
        position: 'relative',
        border: '0px solid blue',
        top: '-158px',
    },
    textfield: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '50px',
        height: '90%',
        width: '100%',
        border: '0px solid red',
        position: 'relative',
        top: '1px',
    },
    forgetemail: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        left: '50px',
        bottom: '95px',
    },
    learnmore: {
        position: 'relative',
        bottom: '20px',
        right: '10px',
        color: '#5f6368',
        fontSize: '14px',
        lineHeight: '1.4286',
    },
    signin: {
        position: 'relative',
        top: '1px',
    },
    usegoogle: {
        position: 'relative',
        top: '1px',
    },

    buttontag: {
        display: 'flex',
        border: '0px solid red',
        width: ' 100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'relative',
        top: '40px',
    },
    b1: {
        width: '90px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0px solid yellow',
        color: 'white',
        backgroundColor: ' #1a73e8',

    },
    b2: {
        width: '140px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0px solid yellow',
        color: '#1a73e8',
        fontSize: '15px',
        backgroundColor: 'transparent',
        position: 'relative',
        right: '25px',

    },
    learn: {
        position: 'relative',
        bottom: '30px',
        right: '145px',
        fontSize: '15px',
    },


    ['@media only screen and (min-width : 320px) and (max-width : 480px)']: {
        MainBox: {
            width: '100vw',
            border: '1px solid grey',
        },
        imgtag: {
            position: 'relative',
            top: '-59px',
        },
        learn: {
            bottom: '-8px',
        },
        learnmore: {
            bottom: '-22px',
        },
        textfield: {
            top: '42px',
        },
        forgetemail: {
            left: '15px',
            bottom: '41px',
        },
        signin: {
            top: '48px',
        },
        usegoogle: {
            top: '30px',
        },
        buttontag: {
            width: '119%',
        },
        imgtag: {
            top: '-75px',
        },


    },

    ['@media only screen and (min-width : 481px) and (max-width : 768px)']: {
        MainBox: {
            width: '100vw',
            border: '1px solid grey',
        },
        signin: {
            top: '17px',
        },
        forgetemail: {
            left: '83px',
            bottom: '83px',
        },
        textfield: {
            height: '114%',
        },
        imgtag: {
            top: '-76px',
        },
        buttontag: {
            width: '90%',
        },
    },
    ['@media only screen and (min-width : 769px) and (max-width : 1024px)']: {
        MainBox: {
            width: '50vw',
            border: '1px solid grey',
        },
        learn: {
            right: '95px',
            bottom: '-18px',
            fontSize: '10px',
        },
        learnmore: {
            fontSize: '9px',
            right: '10px',
            bottom: '20px',
        },
        signin: {
            top: '15px',
        },
        forgetemail: {
            left: '31px',
            bottom: ' 84px',
        },
        learnmore: {
            right: ' 7px',
            bottom: '16px',
            fontSize: ' 14px',
        },
        learn: {
            right: '146px',
            bottom: '31px',
            fontSize: '15px',
        },
        imgtag: {
            top: '-81px',
        },
        buttontag: {
            width: '107%',
        },

    },

})

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {

    const classes = useStyle()

    const navigate = useNavigate()

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
                    navigate('/dashboard')
                    localStorage.setItem("token", response.data.id)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("login success")
        }

    }

    const createAcnt = () => {
        navigate('/signup')
    }


    return (
        <Box>
            <Box className={classes.MainBox} >
                <Box className={classes.imgtag} >
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="75px" height="24px" alt="logo" />
                </Box>
                <Box className={classes.secondline} >
                    <h1 className={classes.signin}>Sign in</h1>
                    <p className={classes.usegoogle}>Use your Google Account</p>
                    <Box className={classes.textfield} >
                        <TextField id="outlined-basic" sx={{ width: 370 }} onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email or Phone" variant="outlined" size="small" />
                        <TextField id="outlined-basic" sx={{ width: 370 }} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Pssword" variant="outlined" size="small" />

                    </Box>
                    <Box className={classes.forgetemail} >
                        <Button>Forgot email?</Button>
                    </Box>


                </Box>
                <p className={classes.learnmore}>Not your computer? Use Guest mode to sign in privately.</p>
                <Box>
                    <a href="{url}" className={classes.learn}>Learn more</a>
                </Box>

                <Box className={classes.buttontag} >
                    <Box className={classes.button1SI}>
                        <button onClick={createAcnt} className={classes.b2} >Create Account</button>
                    </Box>
                    <Box className={classes.button2SI} >
                        <button className={classes.b1} onClick={submit}>Next</button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default SignIn

