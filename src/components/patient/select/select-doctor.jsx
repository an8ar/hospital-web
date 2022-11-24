import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function DoctorSelect({ doctors, chooseDoc }) {
    const [doctor, setDoctor] = React.useState('');
    const handleChange = (event) => {
        const string = event.target.value;
        const arr = string.split(' ');
        const name = arr[0];
        const surname = arr[1];
        const doctor = doctors.find(doc=> doc.name===name && doc.surname===surname);
        chooseDoc(doctor);
        setDoctor(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, margin:2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">doctor</InputLabel>
                <Select
                    value={doctor}
                    label="doctors"
                    onChange={handleChange}
                >
                    { doctors.length!==0 && 
                        doctors.map(element => {
                            const val = `${element.name} ${element.surname}`
                            return <MenuItem key={element.id} value={val}>{element.name} {element.surname}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}