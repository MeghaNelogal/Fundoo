import React, { useState } from "react"
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signupApi } from "../../../services/userService";
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

const useStyle = makeStyles({
    maincontainer: {
        height: '95vh',
        width: '60vw',
        border: '1px solid gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        left: '20%',
        top: '30px',
    },
    child1: {
        height: '90%',
        width: '50%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyDontent: 'flex-start',
        alignItems: 'flex-start',
    },
    child2: {
        height: '100%',
        width: '30%',
        border: '0px solid yellowgreen',
    },
    googleimg: {
        width: '22%',
        height: '4%',
    },
    firstpara: {
        color: '#202124',
        paddingBottom: '0',
        paddingTop: '16px',
        fontFamily: '"Google Sans","Noto Sans Myanmar UI",arial,sans-serif',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '1.3333',



    },
    textfield1: {
        width: '90%',
        display: 'flex',
        alignContent: 'space-between',
        columnGap: '5px',
        position: 'relative',
        top: '3%',
        fontSize: '20px',
    },
    secondpara: {
        color: '#1a73e8',
        position: 'relative',
        top: '22%',
        left: '8px',
    },
    textfield3: {
        width: '90%',
        display: 'flex',
        flexDirection: ' row',
        justifyContent: 'space-between',
        position: 'relative',
        top: '12%',
        columnGap: '5px',
    },
    thirdpara: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        fontSize: '12px',
        top: '10%',
        color: '#5f6368',

    },
    checkbox1: {
        position: 'relative',
        top: '12%',
    },
    footer: {
        display: 'flex',
        border: '0px solid red',
        width: ' 100%',
        flexDirection: 'row',
        height: '40px',
        justifyContent: 'space-around',
        border: '0px solid red',
        position: 'relative',
        top: '120px',
    },
    imgright: {
        width: '95%',
        position: 'relative',
        top: '20%',
    },
    pararight: {
        position: 'relative',
        top: '18%',
    },
    textfield2: {
        marginRight: '190px',
    },
    amp: {
        position: 'relative',
        right: '10%',
    },
    instead: {
        width: '30%',
        position: 'relative',
        right: '60px',
        border: '0px solid blue',
    },
    next: {
        position: 'relative',
        left: '20px',
    }
})

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const nameRegex = /^[A-Z]{1}[a-z]{2,}$/

function SignUp() {

    const navigate = useNavigate()

    const classes = useStyle()

    const [signUpObj, setSignUpObj] = useState({ email: "", password: "", firstName: "", lastName: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "", firstNameBorder: false, firstNameHelper: "", lastNameBorder: false, lastNameHelper: "" })

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

        <Box className={classes.maincontainer}>
            <Box className={classes.child1}>
                <Box className={classes.googleimg} >
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="75px" height="24px" alt="logo" />
                </Box>
                <Box className={classes.firstpara} >
                    <p>Create your Google Account</p>
                </Box>

                <Box className={classes.textfield1}>
                    {/* <input type="Firstname" placeholder="first name" />
                    <input type="Lastname" placeholder="Last name" /> */}
                    <TextField id="outlined-basic" onChange={takeFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} label="Firstname" variant="outlined" size="small" />
                    <TextField id="outlined-basic" onChange={takeLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} label="Lastname" variant="outlined" size="small" />
                </Box>
                <Box className={classes.secondpara} >
                    <p>Use my current email address instead</p>
                </Box>

                <Box className={classes.textfield2} >
                    {/* <input type="Username" placeholder="Username" /> */}
                    <TextField id="outlined-basic" onChange={takeEmail} sx={{ width: 370 }} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Username" variant="outlined" size="small" />
                    <p className={classes.amp} >You can use letters, numbers &amp; periods</p>
                </Box>

                <Box className={classes.textfield3} >
                    {/* <input type="Password" placeholder="Password" />
                    <input type="Confirm" placeholder="Confirm" /> */}
                    <TextField id="outlined-basic" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size="small" />
                    <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" />
                </Box>

                <Box className={classes.thirdpara} >
                    <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </Box>

                <Box className={classes.checkbox1} >
                    <input type="checkbox" />
                    <label>  Show password</label>
                </Box>

                <Box className={classes.footer} >

                    <Button href="#text-buttons" size="small" className={classes.instead}>sign in instead</Button>
                    <Button variant="contained" onClick={submit} className={classes.next} size="small">Next</Button>


                </Box>


            </Box>

            <Box className={classes.child2}>
                <img className={classes.imgright} src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="img" />
                <p className={classes.pararight} >One account. All of Google <br></br>working for you.</p>
            </Box>

        </Box>

    )
}

export default SignUp
