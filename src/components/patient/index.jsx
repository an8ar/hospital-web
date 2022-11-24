import React from 'react'
import { useState } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetPatientAppointmentsQuery } from '../../api/appointments/appointments';
import { useGetDepartmentsQuery } from '../../api/public/public-api';
import { DepartmentSelect } from './select/select-department';
import { DoctorSelect } from './select/select-doctor';
import { useGetDoctorsQuery } from '../../api/public/public-api';
import Chip from '@mui/material/Chip';
import { ListOfAppointments } from './list-appointments';
import CircularProgress from '@mui/material/CircularProgress';
import { DoctorCard } from './card/doctor-card';
import { Box } from '@mui/material';
import { ProfileInfo } from './profile/profile-info';
import { useGetPatientQuery } from '../../api/patient/patient-api';

const TIMESLOT_LIST = {
    0: '09:00-09:30',
    1: '10:00-10:30',
    2: '11:00-11:30',
    3: '12:00-12:30',
    4: '13:00-13:30',
    5: '14:00-14:30',
    6: '15:00-15:30',
    7: '16:00-16:30',
    8: '17:00-17:30',
}


export function Patient() {

    const username = useSelector(state => state.auth.user.username);
    const { data: appointments, isLoading: isAppointmentsLoading } = useGetPatientAppointmentsQuery(username);
    const { data: departments, isLoading: isDepartmentsLoading } = useGetDepartmentsQuery();
    const { data: doctors, isLoading: isDoctorLoading } = useGetDoctorsQuery();
    const { data: patientInfo, isLoading: isPatientInfoLoading } = useGetPatientQuery(username);
    const [choosedDepartment, setChoosedDepartment] = useState('');
    const [doctorList, setDoctorList] = useState('');
    const [choosedDoctor, setChoosedDoctor] = useState({});
    const appointmentsList = [];
    if (isAppointmentsLoading || isDepartmentsLoading || isDoctorLoading || isPatientInfoLoading) {
        return (
            <CircularProgress />
        )
    }
    appointments.forEach(
        elem => {
            doctors.forEach(element => {
                if (element.id === elem.doctor) {
                    const time_slot = elem.timeslot
                    appointmentsList.push({
                        name: element.name,
                        surname: element.surname,
                        date: elem.date,
                        timeslot: TIMESLOT_LIST[time_slot],
                        id: elem.id
                    })
                }
            });
        }
    )
    const bool = Object.keys(choosedDoctor).length !== 0 && choosedDepartment !== ''
    return (
        <Container>
            <ProfileInfo user={patientInfo}></ProfileInfo>
            <Chip label="My appointments" variant="outlined" />
            <ListOfAppointments list={appointmentsList}></ListOfAppointments>
            <Chip label="Make an appointment" variant="outlined" />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                margin: 2,
            }}><Box sx={{display: "flex"}}>
                    <DepartmentSelect departments={departments} chooseDep={setChoosedDepartment} setDoctorList={setDoctorList} ></DepartmentSelect>
                    {
                        choosedDepartment && <DoctorSelect doctors={doctorList} chooseDoc={setChoosedDoctor}></DoctorSelect>
                    }
                </Box>
            </Box>
            {
                bool && <DoctorCard doctor={choosedDoctor} setChoosedDepartment={setChoosedDepartment} setChoosedDoctor={setChoosedDoctor}></DoctorCard>
            }
        </Container>

    )
}
