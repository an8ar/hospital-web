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
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const schema = yup
    .object()
    .shape({
        iin: yup.string().required(),
        email: yup.string().required().email(),
        date_of_birth: yup.string().required(),
        government_id: yup.string().required(),
        name: yup.string().required(),
        surname: yup.string().required(),
        middle_name: yup.string().required(),
        contact_number: yup.string().required(),
        address: yup.string().required(),
        caregiverPhone: yup.string().required(),
        isMaried: yup.boolean()

    })
    .required();
export function RegisterPatient() {
    const navigate = useNavigate();
    const { register: registerForm, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            isMaried: false
        }
    });

    const [register] = authApi.endpoints.register.useMutation();
    const onSubmit = async data => {
        console.log(data);
        await register(data);
        return (
            navigate('/')
        )
    }
    const [value, setValue] = React.useState(dayjs('1991-12-16T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container sx={{ width: "350px", display: "flex" }}>
                <Stack spacing={2} margin={5}>
                    <Typography>Register Patient</Typography>
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
                    <Typography><Checkbox {...registerForm("isMarried")}/> Is married?</Typography>
                    <TextField error={!!errors.government_id?.message} helperText={errors.government_id?.message} {...registerForm("government_id")} label="Government id" variant="standard" />
                    <TextField error={!!errors.name?.message} helperText={errors.name?.message} {...registerForm("name")} label="Name" variant="standard" />
                    <TextField error={!!errors.surname?.message} helperText={errors.surname?.message} {...registerForm("surname")} label="Surname" variant="standard" />
                    <TextField error={!!errors.middle_name?.message} helperText={errors.middle_name?.message} {...registerForm("middle_name")} label="Middle_name" variant="standard" />
                    <TextField error={!!errors.contact_number?.message} helperText={errors.contact_number?.message} {...registerForm("contact_number")} label="Contact_number" variant="standard" />
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
