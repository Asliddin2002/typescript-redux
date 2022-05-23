import React, { useState } from 'react';
import { Typography, 
    Button, Stack, 
    TextField,Box, InputAdornment, 
    MenuItem, FormControl, FormLabel, 
    RadioGroup, FormControlLabel,
     Radio, 
     Checkbox,
     Rating,
     Autocomplete,
     Card,
     CardContent,
     CardActions,
    CardMedia,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AppBar,
    Toolbar,
    IconButton,
    Menu} from '@mui/material';
import { BookmarkBorder, Bookmark, ExpandMore } from '@mui/icons-material';


const LeftBar = () => {
    const [country, setCountry] = useState("")
    const[radio, setRadio] = useState("")
    const[check, setCheck] = useState(false)
    const[rate, setRate] = useState<number | null>(null)


    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value as string)
        console.log(country)
    }
    const radioChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setRadio(event.target.value as string)
        console.log({radio})
    }
    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked )
        console.log({check})
    }
    const handleRate = (event:React.ChangeEvent<{}>, newValue:number | null ) => {
        setRate(newValue)
        console.log({rate})
    }
    const skills = ["Javascript", "HTML", "CSS", "Typescript"]

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge = "start" size = "large"  color = "inherit" aria-label='logo'>
                        <Bookmark/>
                    </IconButton>
                    <Typography variant = "h6">Logo</Typography>
                    <Stack sx = {{marginLeft:"auto"}} spacing = {3} direction = "row">
                        <Button color = "inherit">Home</Button>
                        <Button color = "inherit">About</Button>
                        <Button color = "inherit">Portfolio</Button>
                        <Button color = "inherit">Contact</Button>
                    </Stack>
                    {/* <Menu id = "resorce-menu" anchorEl={anchorEl} >
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Podcast</MenuItem>
                    </Menu> */}
                </Toolbar>
            </AppBar>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMore/>}>
                    <Typography variant='h5'>Questions</Typography>
                    </AccordionSummary>
                <AccordionDetails>
                <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eos distinctio est quasi, laudantium consequatur?</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMore/>}>
                    <Typography variant='h5'>Questions</Typography>
                    </AccordionSummary>
                <AccordionDetails>
                <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eos distinctio est quasi, laudantium consequatur?</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMore/>}>
                    <Typography variant='h5'>Questions</Typography>
                    </AccordionSummary>
                <AccordionDetails>
                <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eos distinctio est quasi, laudantium consequatur?</Typography>
                </AccordionDetails>
            </Accordion>
            <Box width = "300px">
                <Card>
                    <CardMedia component = "img"
                    height="150px"
                    image = ""/>
                    <CardContent>
                        <Typography variant = "h5" component = "div">React</Typography>
                        <Typography variant = "body2" color ="text.secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est officia numquam necessitatibus laudantium aspernatur commodi.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant = "outlined">Share</Button>
                        <Button variant = "outlined">Add</Button>
                    </CardActions>
                </Card>
            </Box>
            <Box sx = {{
                display:'flex',
                alignItems:"center",
                justifyContent:"center",
                width:150,
                height:150,
                gap:1,
                color:'red'
            }} >
                <Bookmark/>
                <Typography>Bookmark</Typography>
            </Box>
            <Box sx = {{
                width:100,
                height:100,
                bgcolor:"red",
                '&:hover':{
                    bgcolor:"yellow"
                }
            }}> Hello </Box>
            <Stack sx = {{
                marginBottom:5
            }} spacing = {2}>
                <Autocomplete options={skills}
                renderInput = {(params) => <TextField {...params} label = "Skills"/> }
                />

            </Stack>
            <Stack spacing = {2}>
                <Rating value = {rate} readOnly onChange = {handleRate} precision = {0.5}/>
            </Stack>
            {/* <Typography variant ="h1">hello</Typography>
            <Typography variant ="h2">hello</Typography>
            <Typography variant ="h3">hello</Typography>
            <Typography variant ="h4">hello</Typography>
            <Typography variant ="h5" >hello</Typography>
            <Typography variant ="h6">hello</Typography>
            <Typography variant ="subtitle1">hello</Typography>
            <Typography variant ="body1">hello world</Typography>
            <Typography variant ="body2">hello world</Typography> */}
            {/* BUTTONS */}
            <Stack spacing = {2} direction = "row" >
            {/* <Button variant = "text">text</Button>
            <Button variant = "contained">text</Button>
            <Button variant = "outlined">text</Button>
            <Button variant = "contained" color="primary">text</Button>
            <Button variant = "contained" color="secondary">text</Button>
            <Button variant = "contained" color="success">text</Button>
            <Button variant = "contained" color="secondary">text</Button>
            <Button size = "small" variant = "contained" color="success">text</Button>
            <Button endIcon = {<Send/>} size = "large" variant = "contained" color="success">text</Button>
            */}
                {/* <TextField label="Name" variant='outlined'/> */}
                {/* <TextField label="Name" variant='filled'/>
                <TextField label="Name" variant='standard'/> */}
            </Stack>
            {/* <Stack sx = {{
                mt:5
                
            }} spacing= {2} direction = "row">
                    <TextField label = "Name" size='small' color ="secondary" required/>
                    <TextField  size='small' color ="secondary" variant='standard' value="hello world" InputProps={{readOnly:true}}/>
                    <TextField label = "password" type="password" helperText = "Do not share your password with anyone" size='small' color ="secondary" required/>
            </Stack> */}
            {/* <Stack spacing = {3} direction = "row">
                <TextField label = "Amount" inputProps={{
                    endAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}/>
            </Stack> */}
                <Box width = "250px">
            <Stack spacing = {3} direction = "row">
                <TextField fullWidth
                value ={country} 
                onChange = {handleChange}  
                select label = "Select the country"
                // SelectProps={{
                //     multiple:true,
                // }}
                >
                    <MenuItem value = " USA">Usa</MenuItem>
                    <MenuItem value = "IN">India</MenuItem>
                    <MenuItem value = "Uk">UK</MenuItem>
                </TextField>
            </Stack>
                    
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel id = "experience">Years of experience</FormLabel>
                        <RadioGroup name="experience" aria-labelledby='experience' onChange={radioChange}>
                            <FormControlLabel control={
                                <Radio/>
                            } label = "0-2" value = "0-2"/>
                            <FormControlLabel control={
                                <Radio/>
                            } label = "0-3" value = "0-3"/>
                            <FormControlLabel control={
                                <Radio/>
                            } label = "0-5" value = "0-5"/>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <FormControlLabel label = "i accept" control = { <Checkbox checked={check}  onChange = {handleCheck}/>}/>
                    {/* <FormControlLabel label = "i ignore" control = { <Checkbox checked={check}/> }onChange = {handleCheck}/> */}
                </Box>
                <Box>
                    <Checkbox icon = {<BookmarkBorder/>}
                    checkedIcon = {<Bookmark/>} 
                    checked = {check}
                    onChange = {handleCheck}/>
                </Box>
        </div>
    );
}

export default LeftBar;