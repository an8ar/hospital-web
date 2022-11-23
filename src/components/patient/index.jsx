import React from 'react'
import { useState } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetPatientAppointmentsQuery } from '../../api/appointments/patient-appointments'
import { useCreateAppointmentPatientMutation } from '../../api/appointments/create-appointment';
import { useGetDepartmentsQuery } from '../../api/public/public-api';
import { DepartmentSelect } from './select-department';
import { DoctorSelect } from './select-doctor';
import { Button } from '@mui/material';
import { DateSelect } from './select-date';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import { Typography } from '@mui/material';
import { useGetDoctorsQuery } from '../../api/public/public-api';

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
    const { data: doctors } = useGetDoctorsQuery();
    console.log("Doctors:",doctors);

    const [choosedDepartment, setChoosedDepartment] = useState('');//
    const [doctorList, setDoctorList] = useState('');
    const [choosedDoctor, setChoosedDoctor] = useState('');//
    const [choosedDate, setChoosedDate] = useState('');
    const user = useSelector(state => state.auth.user);
    console.log("User: ", user);
    console.log("Appointments:", appointments);
    function makeAppointment() {
        console.log(choosedDepartment, choosedDoctor, choosedDate)

    }
    const appointmentsList = [];
    if (isAppointmentsLoading || isDepartmentsLoading) {
        return (
            <div>Is Loading...</div>
        )
    }
    if (appointments.length === 0) {

        return (
            <Container>
                You have 0 appointments
            </Container>
        )
    }
    const list = appointments.map(
        elem => {
            doctors.map(element => {
                if (element.id === elem.doctor) {
                    const time_slot = elem.timeslot
                    console.log("Time Slot:",TIMESLOT_LIST[time_slot]);
                    appointmentsList.push({
                        name: element.name,
                        surname: element.surname,
                        date: elem.date,
                        timeslot: TIMESLOT_LIST[time_slot],
                        id: elem.id
                    })
                }
            });
            console.log("appointmentList: ",appointmentsList)
        }
    )
    return (
        <Container>

            <Typography>My appointments</Typography>
            <List>
                {appointments.length === 0 && <ListItem>No appointments...</ListItem> }
                {appointmentsList.length !== 0 && appointmentsList.map(element=>{
                    const timeslot=element.timeslot;

                    return <ListItem key={element.name}>{element.name} {element.surname} {element.date} at {element.timeslot}</ListItem>
                }
                    ) }
            </List>
            <Typography>Make an appointment</Typography>
            <DepartmentSelect departments={departments} chooseDep={setChoosedDepartment} setDoctorList={setDoctorList} ></DepartmentSelect>
            <DoctorSelect doctors={doctorList} chooseDoc={setChoosedDoctor}></DoctorSelect>
            <DateSelect setChoosedDate={setChoosedDate}></DateSelect>

            <Button onClick={makeAppointment}> Make an appointment</Button>

        </Container>

    )
}
