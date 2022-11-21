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
// import Checkbox from '@mui/material/Checkbox';
// import { useRegisterPatientMutation } from "../../../api/admin/admin-api";

// const schema = yup
//     .object()
//     .shape({
//         iin: yup.string().required(),
//         email: yup.string().required().email(),
//         date_of_birth: yup.string().required(),
//         government_id: yup.string().required(),
//         name: yup.string().required(),
//         surname: yup.string().required(),
//         middle_name: yup.string().required(),
//         phone_number: yup.string().required(),
//         address: yup.string().required(),
//         emergency_phone_number: yup.string().required(),
//         isMaried: yup.boolean(),
//         blood_number: yup.string().required(),
//         username: yup.string().required(),
//         password: yup.string(),
//         password2: yup.string(),
//         contact_details: yup.string()

//     })
//     .required();
// export function RegisterPatient() {
//     const navigate = useNavigate();
//     const { register: registerForm, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//         defaultValues: {
//             isMarried: false
//         }
//     });

//     const [registerPatient] = useRegisterPatientMutation();
//     const onSubmit = async data => {
//         console.log(data);
//         const  res = await registerPatient(data).unwrap();
//         console.log(res);
//         return (
//             navigate('/')
//         )
//     }
//     const [value, setValue] = React.useState(dayjs('1991-12-16T21:11:54'));

//     const handleChange = (newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <Container sx={{ width: "350px", display: "flex" }}>
//                 <Stack spacing={2} margin={5}>
//                     <Typography>Register Patient</Typography>
//                     <TextField error={!!errors.iin?.message} helperText={errors.iin?.message} {...registerForm("iin")} label="iin" variant="standard" />
//                     <TextField error={!!errors.email?.message} helperText={errors.email?.message} {...registerForm("email")} label="email" variant="standard" />
//                     <DesktopDatePicker
//                         label="Date desktop"
//                         inputFormat="YYYY-MM-DD"
//                         sx={{ margin: 2, color: "red" }}
//                         value={value}
//                         onChange={handleChange}
//                         renderInput={(params) => <TextField {...params} {...registerForm("date_of_birth")} label="Date of birth" />}
//                     />
//                     <Typography><Checkbox {...registerForm("isMarried")}/> Is married?</Typography>
//                     <TextField error={!!errors.government_id?.message} helperText={errors.government_id?.message} {...registerForm("government_id")} label="Government id" variant="standard" />
//                     <TextField error={!!errors.name?.message} helperText={errors.name?.message} {...registerForm("name")} label="Name" variant="standard" />
//                     <TextField error={!!errors.surname?.message} helperText={errors.surname?.message} {...registerForm("surname")} label="Surname" variant="standard" />
//                     <TextField error={!!errors.middle_name?.message} helperText={errors.middle_name?.message} {...registerForm("middle_name")} label="Middle_name" variant="standard" />
//                     <TextField error={!!errors.phone_number?.message} helperText={errors.phone_number?.message} {...registerForm("phone_number")} label="Phone number" variant="standard" />
//                     <TextField error={!!errors.address?.message} helperText={errors.address?.message} {...registerForm("address")} label="Address" variant="standard" />
//                     <TextField error={!!errors.blood_number?.message} helperText={errors.blood_number?.message} {...registerForm("blood_number")} label="Blood number" variant="standard" />
//                     <TextField error={!!errors.emergency_phone_number?.message} helperText={errors.emergency_phone_number?.message} {...registerForm("emergency_phone_number")} label="Emergency phone number" variant="standard" />
//                     <TextField error={!!errors.user?.message} helperText={errors.user?.message} {...registerForm("user")} label="Username" variant="standard" />
//                     <TextField error={!!errors.contact_details?.message} helperText={errors.contact_details?.message} {...registerForm("contact_details")} label="Contact Details" variant="standard" />
//                     <TextField error={!!errors.password?.message} helperText={errors.password?.message} {...registerForm("password")} label="Enter password" variant="standard" />
//                     <TextField error={!!errors.password2?.message} helperText={errors.password2?.message} {...registerForm("password2")} label="Re enter password" variant="standard" />
//                     <Button onClick={handleSubmit((onSubmit))} variant='contained'>
//                         Register
//                     </Button>
//                 </Stack>
//             </Container>
//         </LocalizationProvider>
//     );

// }
