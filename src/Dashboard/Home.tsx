import DrawerLeft from "./Drawer"
import Main from './Main'
import Box from '@mui/material/Box';

const Home = ()=> {
    return(
        <div>
            <Box sx={{ display: 'flex' }}>
            <DrawerLeft/>
            <Main/>
            </Box>
        </div>
    )
}


export default Home