import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { useDeleteAppointmentMutation } from '../../api/appointments/appointments';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import { useState } from 'react';

export function ListOfAppointments({ list }) {
  const [deleteAppointment] = useDeleteAppointmentMutation();

  const handleToggle = (event) => {
    console.log(event.target.value);
    deleteAppointment(event.target.value);

  };
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(3);
  const indexOfLastPost = curPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const paginationCount = Math.ceil(list.length / postPerPage);

  function handlePage(pageNum) {
    setCurPage(pageNum);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <List dense sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: 2 }}>
        {currentPosts.map((appointmentElem) => {
          const labelId = `checkbox-list-secondary-label-${appointmentElem.name}`;
          const initial = appointmentElem.name.charAt(0) + appointmentElem.surname.charAt(0);
          return (
            <ListItem
              key={appointmentElem.name.concat(appointmentElem.timeslot).concat(appointmentElem.date)}
              secondaryAction={
                <Button value={appointmentElem.id} onClick={handleToggle}> Delete Appointment</Button>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>{initial}</Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId} sx={{ fontSize: 20 }} primary={`You have appointment to ${appointmentElem.name} ${appointmentElem.surname} ${appointmentElem.date} between ${appointmentElem.timeslot}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Pagination count={paginationCount} color="primary" onChange={(e) => handlePage(e.target.textContent)}></Pagination>
    </Box>
  );
}