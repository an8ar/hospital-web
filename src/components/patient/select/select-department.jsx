import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function DepartmentSelect({departments,chooseDep,setDoctorList}) {
    const [department, setDepartment] = React.useState('');
    const handleChange = (event) => {
        chooseDep(event.target.value);
        const docArr = departments.find(elem => elem.name===event.target.value).doctors;
        setDoctorList(docArr);
        setDepartment(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, margin:2}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">department</InputLabel>
                <Select
                    value={department}
                    label="department"
                    onChange={handleChange}
                >
                    {departments.map(element => {
                        return <MenuItem key={element.name} value={element.name}>{element.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}