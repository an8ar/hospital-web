import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Container } from '@mui/material';

export function DoctorSelect({ doctors, chooseDoc }) {
    const [doctor, setDoctor] = React.useState('');
    const handleChange = (event) => {
        chooseDoc(event.target.value);
        setDoctor(event.target.value);
    };

    return (
        <Container sx={{ minWidth: 120, marginTop: 5 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">doctor</InputLabel>
                <Select
                    value={doctor}
                    label="doctors"
                    onChange={handleChange}
                >
                    { doctors.length!==0 && 
                        doctors.map(element => {
                            return <MenuItem key={element.name} value={element.name}>{element.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Container>
    );
}