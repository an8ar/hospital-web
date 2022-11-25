import React from 'react'
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { useGetPatientsQuery } from '../../api/public/public-api';
import { useGetDoctorAppointmentsQuery } from '../../api/appointments/appointments';
import { useGetDoctorQuery } from '../../api/doctor/doctor-api'
import { ProfileInfo } from './profile-info';
import Chip from '@mui/material/Chip'; 
import { ListOfAppointments } from './list-of-appointments';

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

export function Doctor() {
  const username = useSelector(state => state.auth.user.username);
  const { data: doctorInfo, isLoading: isDoctorInfoLoading } = useGetDoctorQuery(username);
  const { data: doctorAppointments, isLoading: isDoctorAppointmentsLoading } = useGetDoctorAppointmentsQuery(username);
  const { data: patients, isLoading } = useGetPatientsQuery();
  if (isLoading || isDoctorAppointmentsLoading || isDoctorInfoLoading) {
    return (<div>Is Loading</div>)
  }
  const appointmentsList = [];

  doctorAppointments.forEach(
    elem => {
      patients.forEach(element => {
        if (element.id === elem.patient) {
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
  return (
    <Container sx={{ marginTop: 5, fontSize: 20 }}>
      <ProfileInfo user={doctorInfo}></ProfileInfo>
      <Chip label="List of patients for the next 10 days" variant="outlined" />
      <ListOfAppointments list={appointmentsList}></ListOfAppointments>
    </Container>
  )
}



