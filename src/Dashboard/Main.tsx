import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import StarsIcon from '@mui/icons-material/Stars';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { ArrowDropDown, ArrowDropUp, ArrowRight } from '@mui/icons-material';
// import Example from './components/Charts'
import Example from './components/Charts'

const cards = [
    {number:26.798,
    name:"Likes",
    color:"blue"
    },
    {number:6.754,
    name:"Love",
    color:"red"
    },
    {number:52.789,
    name:"Smiles",
    color:"orange"
    }

]

const Main = () => {
    return(
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#D0D8DC', p: 3 }}
        >
        <Toolbar />
        <Stack direction = "row"  >
            <Stack direction = "column" sx={{
                padding:"0 40px",
                height:"100vh",
                width:"33%",
                border:"1px solid black",
            }}>
                <Box >
                    <Typography component = "h6" variant="h4" sx ={{ fontWeight:"bold",marginBottom:"10px"}}>Hi Asliddin,</Typography>
                    <Typography variant="h4" sx = {{marginBottom:"25px"}}>Welcome back!</Typography>
                    <Typography  paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, qui at ex possimus eos sed quam adipisci blanditiis voluptate!</Typography>
                    <Card sx={{ maxWidth: 350, background:"transparent" }}>
                        <CardActionArea>
                            <CardMedia
                            sx = {{width:300}}
                            component="img"
                            height="220"
                            image="https://www.pngplay.com/wp-content/uploads/5/Web-Design-Purple-PNG.png"
                            alt="green iguana"
                            />
                            </CardActionArea>
                    </Card>
                        <Card sx={{ maxWidth: 350, background:"blue", color:"white", borderRadius:"10px", marginTop:"20px" }}>
                            <CardActionArea>
                                <CardContent sx = {{textAlign:"center"}}>
                                    <StarsIcon sx ={{fontSize:"40px"}}/>
                                    <Typography variant = "h6">Congratulations Asliddin</Typography>
                                    <Typography sx = {{fontWeight:"200", fontSize:"12px"}} paragraph>Lorem ipsum dolor sit amet consectetur voluptatum unde eaque praesentium.</Typography>
                                    <Button variant = "contained" sx = {{bgcolor:"#fff",borderRadius:"10px", color:"#000", fontSize:"11px", padding:"15px 25px"}}>View Profile</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                </Box>
                
            </Stack>
            <Stack direction = "column" sx={{
                height:"100vh",
                width:"33%",
                border:"1px solid black"
            }}>
                {cards.map((card) => (
                    <Card sx = {{maxWidth: "100%", borderRadius:"10px", marginBottom:"15px"}}>
                    <CardActionArea>
                        <CardContent sx = {{display:"flex", gap:"15px", alignItems:"center"}}>
                            <Box sx = {{backgroundColor:card.color, 
                            display: "flex", 
                            alignItems:"center", 
                            justifyContent:"center", color:"#fff", 
                            borderRadius:"50%", 
                            width:"40px", 
                            height:"40px"}} >
                                {card.name === "Likes" && <ThumbUpIcon/> }
                                {card.name === "Love" && <FavoriteIcon/> }
                                {card.name === "Smiles" && <EmojiEmotionsIcon/> }
                                
                                
                            </Box>
                            <Box>
                                <Typography variant='h6' sx = {{fontWeight:"bold", fontSize:"16px"}}>{card.number}</Typography>
                                <Typography sx = {{fontSize:"15px"}}>{card.name}</Typography>
                            </Box>
                            <Box sx = {{marginLeft: "auto"}}>
                                {card.name === "Likes" && <ArrowDropDown/> }
                                {card.name === "Love" && <ArrowDropUp/> }
                                {card.name === "Smiles" && <ArrowRight/> }
                            </Box>

                        </CardContent>
                    </CardActionArea>
                </Card>
                ))}
                <Card sx = {{maxWidth: "100%", borderRadius:"10px"}}>
                    <CardActionArea>
                        <CardContent sx = {{textAlign:"center"}} >
                            <Typography sx = {{fontSize:"13px"}}>Views</Typography>
                            <Typography variant = "h6" fontWeight={"bold"}> 6.967.431</Typography>
                        </CardContent>
                            <Example/>
                    </CardActionArea>
                </Card>
                
                </Stack>
            <Stack direction = "column" sx={{
                height:"100vh",
                width:"33%",
                border:"1px solid black"
            }}> </Stack>
        </Stack>
        </Box>
    // </Box>
    )
}

export default Main