import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Search from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { InputBase } from '@mui/material';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import AppsOutlined from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header(props) {
    
    const openMenu = () => {
       props.listenToHeader()
    }

    return (

        <div>
            <div className="header">
                <div className="header1">
                    <MenuIcon onClick={openMenu}> </MenuIcon>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
                    <Link href="#" underline="hover"> {'Keep'}</Link>
                </div>

                <div className="header2">
                    <Search className="searchicon"></Search>
                    <InputBase className='Search' id='Search' placeholder='Search'></InputBase>
                </div>

                <div className="header3">
                    <RefreshIcon></RefreshIcon>
                    <ViewStreamOutlinedIcon></ViewStreamOutlinedIcon>
                    <SettingsOutlined></SettingsOutlined>
                </div>

                <div className="header4">
                <AppsOutlined></AppsOutlined>
                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                </div>
            </div>

        </div>
    )
}

export default Header