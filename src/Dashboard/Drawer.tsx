import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const DrawerLeft = () => {
    return (
        <Box>
            <CssBaseline />
            <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
                // 
            }}
            variant="permanent"
            anchor="left"
            >
            <Toolbar />
            <List sx = {{padding:"0 15px"}}>
                {['Home', 'Dashboard', 'User', 'Calendar', 'Projects',"Help"].map((text, index) => (
                <ListItem key={text}  disablePadding>
                    <ListItemButton sx ={{
                        borderRadius:"10px",
                        '$:hover':{
                            backgroundColor:"#D0D8DC"
                        }
                    }}>
                    <ListItemIcon>
                        {text === 'Home' && <HomRoundedIcon/> }
                        {text === 'Dashboard' && <DashboardRoundedIcon/> }
                        {text === 'User' && <PeopleRoundedIcon/> }
                        {text === 'Calendar' && <EventRoundedIcon/> }
                        {text === 'Projects' && <AccountTreeRoundedIcon/> }
                        {text === 'Help' && <HelpCenterRoundedIcon /> }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <List sx ={{
                marginTop:"auto",
                padding:"0 15px"
            }}>
                {['Asliddin', 'Settings'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton sx = {{
                        borderRadius:"10px",
                        '$:hover':{
                            backgroundColor:"#D0D8DC"
                        }
                    }} >
                    <ListItemIcon>
                        {text ===  'Asliddin' && <PersonRoundedIcon/>}
                        {text ===  'Settings' && <SettingsIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            </Drawer>
        </Box>
        
            
           
    )
}


export default DrawerLeft