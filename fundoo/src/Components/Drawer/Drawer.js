import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { StepConnector, Tooltip } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { connect } from "react-redux";


const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop: 60,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 60,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const selectOne = (choice) => {
        props.listenToDrawer(choice)
        props.dispatch({
            type: `${choice}`
        })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.drawertoggle}>
                <List>
                    <ListItem onClick={() => selectOne("Notes")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Tooltip title="Notes">
                                    <LightbulbOutlined />
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary="Notes" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => selectOne("Reminders")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Tooltip title="Reminders">
                                    <NotificationsOutlinedIcon />
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary="Reminders" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => selectOne("Edit")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Tooltip title="Edit labels">
                                    <EditOutlinedIcon />
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary="Edit labels" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => selectOne("Archive")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Tooltip title="Archive">
                                    <ArchiveOutlinedIcon></ArchiveOutlinedIcon>
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => selectOne("Trash")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Tooltip title="Trash">
                                    <DeleteOutlined />
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>
        </Box>
    );
}
export default connect()(MiniDrawer);