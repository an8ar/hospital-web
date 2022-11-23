import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Container } from '@mui/system';

export function DateSelect({ setChoosedDate }) {
    const [value, setValue] = React.useState(dayjs('2000-01-11'));
    const handleChange = (newValue) => {
        let day = newValue.$d.getDate();
        if(day<10){
            day = `0${day}`
        }
        let month = newValue.$d.getMonth() + 1;
        if(month<10){
            month = `0${month}`
        }
        let year = newValue.$d.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        setValue(newValue);
        setChoosedDate(currentDate);
        

    };

    return (
        <Container sx={{ marginTop: 5 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="YYYY-MM-DD"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => { 
                            return <TextField {...params} />
                        }}
                    />
                </Stack>
            </LocalizationProvider>
        </Container>
    );
}