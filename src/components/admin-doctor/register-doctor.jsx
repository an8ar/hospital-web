import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import { authApi } from "../../api/auth/auth-api";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const schema = yup
    .object()
    .shape({
        iin: yup.string().min(12).required(),
        email: yup.string().required().email(),
        date_of_birth: yup.string().min(8).required(),
        government_id: yup.string().min(8).required(),
        name: yup.string().min(8).required(),
        surname: yup.string().min(8).required(),
        middle_name: yup.string().min(8).required(),
        contact_number: yup.string().min(8).required(),
        address: yup.string().min(8).required(),
        caregiverPhone: yup.string().required(),
    })
    .required();
export function RegisterDoctor() {
    const navigate = useNavigate();
    const { register: registerForm, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [register] = authApi.endpoints.register.useMutation();
    const onSubmit = async data => {
        await register(data);
        return (
            navigate('/')
        )
    }
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container sx={{ width: "350px", display: "flex" }}>
                <Stack spacing={2} margin={5}>
                    <TextField error={!!errors.iin?.message} helperText={errors.iin?.message} {...registerForm("iin")} label="iin" variant="standard" />
                    <TextField error={!!errors.email?.message} helperText={errors.email?.message} {...registerForm("email")} label="email" variant="standard" />
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="DD/MM/YYYY"
                        sx={{ margin: 2, color: "red" }}
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} {...registerForm("date_of_birth")} label="Date of birth" />}
                    />
                    <TextField error={!!errors.government_id?.message} helperText={errors.government_id?.message} {...registerForm("government id")} label="Government id" variant="standard" />
                    <TextField error={!!errors.name?.message} helperText={errors.name?.message} {...registerForm("name")} label="Name" variant="standard" />
                    <TextField error={!!errors.surname?.message} helperText={errors.surname?.message} {...registerForm("surname")} label="Surname" variant="standard" />
                    <TextField error={!!errors.middle_name?.message} helperText={errors.middle_name?.message} {...registerForm("middle_name")} label="Middle_name" variant="standard" />
                    <TextField error={!!errors.contact_number?.message} helperText={errors.contact_number?.message} {...registerForm("contact number")} label="Contact_number" variant="standard" />
                    <TextField error={!!errors.address?.message} helperText={errors.address?.message} {...registerForm("address")} label="Address" variant="standard" />
                    <TextField error={!!errors.caregiverPhone?.message} helperText={errors.caregiverPhone?.message} {...registerForm("caregiverPhone")} label="Caregiver Phone" variant="standard" />
                    <Button onClick={handleSubmit((onSubmit))} variant='contained'>
                        Register
                    </Button>
                </Stack>
            </Container>
        </LocalizationProvider>
    );

}