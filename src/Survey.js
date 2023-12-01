import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cover from "./images/background.png";
import Slider from './Slider';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const font = "'Poppins', sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: font,
    },
    palette: {
        primary: {
            main: "#000000"
        }
    },
});


function Survey() {
    const [sliderValues, setSliderValues] = useState({
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1
    });
    const handleSliderChange = (name, value) => {
        setSliderValues((prevValues) => ({
            ...sliderValues,
            [name]: value,
        }));
    };
    const handleSubmit = async () => {
        console.log(sliderValues);
        console.log(course);

        const options = {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({
                courseID: course,
                q1: sliderValues['q1'],
                q2: sliderValues['q2'],
                q3: sliderValues['q3'],
                q4: sliderValues['q4'],

            })
        }
        const response = await fetch('http://localhost:3600/survey', options);
        const result = await response.json();
        console.log(result);
    };

    const [course, setCourse] = React.useState('');

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    return (
        <>
            <div style={{
                width: '100%', top: 'calc(0vh-100px)', height: '100%', backgroundImage: `url(${cover})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed',
                zIndex: '-1'
            }}>
            </div >

            <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="column" sx={{ pr: '250px', pl: '250px', pt: '100px' }} alignItems="center">

                    <Typography variant="h4" gutterBottom>
                        Academic Survey
                    </Typography>
                    <FormControl>
                        <InputLabel id="course">Course</InputLabel>
                        <Select
                            labelId="course"
                            id="select"
                            value={course}
                            label="Course"
                            onChange={handleChange}
                            sx={{ minWidth: '150px' }}

                        >
                            <MenuItem value={1}>ECE 105</MenuItem>
                            <MenuItem value={2}>MATH 115</MenuItem>
                            <MenuItem value={3}>CS 137</MenuItem>
                            <MenuItem value={4}>MATH 117</MenuItem>
                            <MenuItem value={5}>MATH 135</MenuItem>
                            <MenuItem value={6}>SE 101</MenuItem>

                        </Select>
                    </FormControl>
                    <Box >
                        <Typography variant="h6" gutterBottom>
                            On a scale of 1 - 10, how often do you attend lectures for this class?
                        </Typography>
                    </Box>
                    <Slider name='q1' onChange={handleSliderChange} />
                    <Box >
                        <div className='spacer'></div>
                        <Typography variant="h6" gutterBottom>
                            On a scale of 1 - 10, do you think these lectures have made a positive contribution to your academic success?
                        </Typography>
                    </Box>
                    <Slider name='q2' onChange={handleSliderChange} />

                    <Box>
                        <div className='spacer'></div>
                        <Typography variant="h6" gutterBottom>
                            On a scale of 1 - 10, how would you rate the overall importance of attending lectures in your academic journey?
                        </Typography>
                    </Box>

                    <Slider name='q3' onChange={handleSliderChange} />


                    <Box>
                        <div className='spacer'></div>
                        <Typography variant="h6" gutterBottom>
                            On a scale of 1 to 10, to what extent do you believe that missing lectures has negatively impacted your academic performance?
                        </Typography>
                    </Box>
                    <Slider name='q4' onChange={handleSliderChange} />

                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={handleSubmit}
                        sx={{ ml: '60px', display: 'block', width: "200px" }}>Submit</Button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Stack>
            </ThemeProvider>

        </>
    );

}
export default Survey;

