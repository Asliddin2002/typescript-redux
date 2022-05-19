import React, { useState } from 'react';
import { Typography, 
    Button, Stack, 
    TextField,Box, InputAdornment, 
    MenuItem, FormControl, FormLabel, 
    RadioGroup, FormControlLabel,
     Radio, 
     Checkbox} from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';


const LeftBar = () => {
    const [country, setCountry] = useState("")
    const[radio, setRadio] = useState("")
    const[check, setCheck] = useState(false)



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


    return (
        <div>
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