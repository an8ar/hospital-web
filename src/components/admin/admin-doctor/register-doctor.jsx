// import React from "react";
// import { TextField, Button, Stack } from "@mui/material";
// import { useForm, } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from "react-router-dom";
// import Container from '@mui/material/Container';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import Typography from '@mui/material/Typography';
// import { useRegisterDoctorMutation } from "../../../api/admin/admin-api";

// const schema = yup
//     .object()
//     .shape({
//         iin: yup.string().required(),
//         email: yup.string().required(),
//         date_of_birth: yup.string().required(),
//         government_id: yup.string().required(),
//         name: yup.string().required(),
//         surname: yup.string().required(),
//         middle_name: yup.string().required(),
//         experience: yup.string().required(),
//         category: yup.string().required(),
//         degree: yup.string().required(),
//         rating: yup.string().required(),
//         address: yup.string().required(),
//         department: yup.string().required(),
//         phone_number: yup.string().required(),
//         price: yup.string()
//     })
//     .required();
// export function RegisterDoctor() {
//     const navigate = useNavigate();
//     const { register: registerForm, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//     });
//     const [registerDoctor] = useRegisterDoctorMutation();

//     const onSubmit = async data => {
//         console.log("I am here");
//         console.log(data);
//         const res = await registerDoctor(data).unwrap();
//         console.log(res);
//         return (
//             navigate('/')
//         )
//     }
//     const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

//     const handleChange = (newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <Container sx={{ width: "350px", display: "flex" }}>
//                 <Stack spacing={2} margin={5}>
//                     <Typography>Register Doctor</Typography>
//                     <TextField error={!!errors.name?.message} helperText={errors.name?.message} {...registerForm("name")} label="name" variant="standard" />
//                     <TextField error={!!errors.surname?.message} helperText={errors.surname?.message} {...registerForm("surname")} label="surname" variant="standard" />
//                     <TextField error={!!errors.middle_name?.message} helperText={errors.middle_name?.message} {...registerForm("middle_name")} label="middle_name" variant="standard" />
//                     <TextField error={!!errors.address?.message} helperText={errors.address?.message} {...registerForm("address")} label="Address" variant="standard" />
//                     <TextField error={!!errors.phone_number?.message} helperText={errors.phone_number?.message} {...registerForm("phone_number")} label="phone_number" variant="standard" />
//                     <TextField error={!!errors.experience?.message} helperText={errors.experience?.message} {...registerForm("experience")} label="Experience" variant="standard" />
//                     <TextField error={!!errors.category?.message} helperText={errors.category?.message} {...registerForm("category")} label="category" variant="standard" />
//                     <TextField error={!!errors.rating?.message} helperText={errors.rating?.message} {...registerForm("rating")} label="rating" variant="standard" />
//                     <TextField error={!!errors.price?.message} helperText={errors.price?.message} {...registerForm("price")} label="price" variant="standard" />
//                     <TextField error={!!errors.iin?.message} helperText={errors.iin?.message} {...registerForm("iin")} label="iin" variant="standard" />
//                     <TextField error={!!errors.degree?.message} helperText={errors.degree?.message} {...registerForm("degree")} label="degree" variant="standard" />     
//                     <TextField error={!!errors.email?.message} helperText={errors.email?.message} {...registerForm("email")} label="email" variant="standard" />
//                     <DesktopDatePicker
//                         label="Date desktop"
//                         inputFormat="YYYY-MM-DD"
//                         sx={{ margin: 2, color: "red" }}
//                         value={value}
//                         onChange={handleChange}
//                         renderInput={(params) => <TextField {...params} {...registerForm("date_of_birth")} label="Date of birth" />}
//                     /><TextField error={!!errors.government_id?.message} helperText={errors.government_id?.message} {...registerForm("government_id")} label="government id" variant="standard" />
//                     <TextField error={!!errors.department?.message} helperText={errors.department?.message} {...registerForm("department")} label="Departament" variant="standard" />
//                     <Button onClick={handleSubmit((onSubmit))} variant='contained'>
//                         Register Doctor
//                     </Button>
//                 </Stack>
//             </Container>
//         </LocalizationProvider>
//     );

// }
