import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export function SelectDepartment({ departments }) {
    const [department, setDepartment] = React.useState('');
    const handleChange = (value) => {

        setDepartment(value.target.value);
    }
    return (
        <FormControl sx={{ m: 1, minWidth: 120, color: 'white', }}>
            <InputLabel sx={{color:"white"}} id="demo-simple-select-label">department  </InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={department}
                label="Department"
                sx={{ color: "white", border: "none" }}
                onChange={handleChange}
            >
                  { departments!==undefined && departments.map(element => {
                    return <MenuItem key={element.name} value={element.name}>{element.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}
