import React from 'react'
import { TextField, Button, Stack } from "@mui/material";
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from '../../api/auth/auth-api';


const schema = yup
    .object()
    .shape({
        username: yup.string().required(),
        password: yup.string().min(4).required()
    })
    .required();
export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

    });
    const [login] = useLoginMutation();
    const onSubmit = async (data) => {
        await login(data);
        return (
            navigate('/admin')
        )
    }
    return (
        
        <Container sx={{ width: "350px" }} >
            <Stack spacing={2} margin={5}>
                <TextField error={!!errors.username?.message} helperText={errors.username?.message} {...register("username")} label="username" variant="standard" />
                <TextField error={!!errors.password?.message} helperText={errors.password?.message} {...register("password")} label="Password" variant="standard" />
                <Button onClick={handleSubmit(onSubmit)} variant="contained">Login</Button>
            </Stack>
        </Container>

    )
}
