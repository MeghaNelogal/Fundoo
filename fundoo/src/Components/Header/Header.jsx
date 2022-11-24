import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Divider, InputBase } from '@mui/material';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import AppsOutlined from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';


const useStyle = makeStyles({
    header: {
        height: '9vh',
        width: '100vw',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    header1: {
        width: '14%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header2: {
        width: '45%',
        height: '70%',
        border: '0px solid yellow',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '12%',
        background: '#f1f3f4',
        borderRadius: '8px',
        boxShadow: '0 1px 1px 0 rgba(65,69,73,.3),0 1px 3px 1px rgba(65,69,73,.15)',
    },
    searchicon: {
        marginLeft: '15px',
    },
    Search: {
        marginLeft: '15px',
        marginRight: '0',
        height: '37px',
        borderRadius: '8px',
        background: '#f1f3f4',
        border: '0px solid transparent ',
    },
    header3: {
        marginLeft: '3%',
        width: '10%',
        height: '82%',
        border: '0px solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    header4: {
        marginLeft: '2%',
        width: ' 8%',
        height: '82%',
        border: '0px solid chocolate',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})

function Header(props) {
    const classes = useStyle()

    const openMenu = () => {
        props.listenToHeader()
    }

    return (

        <Box>
            <Box className={classes.header}>
                <Box className={classes.header1}>
                    <MenuIcon onClick={openMenu}> </MenuIcon>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
                    <Link href="#" underline="hover"></Link>
                    {props.label}
                </Box>

                <Box className={classes.header2}>
                    <Search className={classes.searchicon} ></Search>
                    <InputBase className={classes.Search} id='Search' placeholder='Search'></InputBase>
                </Box>

                <Box className={classes.header3} >
                    <RefreshIcon></RefreshIcon>
                    <ViewStreamOutlinedIcon></ViewStreamOutlinedIcon>
                    <SettingsOutlined></SettingsOutlined>
                </Box>

                <Box className={classes.header4} >
                    <AppsOutlined></AppsOutlined>
                    <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                </Box>
            </Box>
            <Divider />
        </Box>



    )
}

const mapStateToProps = (state) => {
    return {
        label: state.drawerReducer.label
    }
}

export default connect(mapStateToProps)(Header);