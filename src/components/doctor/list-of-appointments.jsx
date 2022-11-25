import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import { useState } from 'react';

export function ListOfAppointments({ list }) {
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
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>{initial}</Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId} sx={{ fontSize: 20 }} primary={`Patient ${appointmentElem.name} ${appointmentElem.surname} appointed to you on ${appointmentElem.date} between ${appointmentElem.timeslot}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Pagination count={paginationCount} color="primary" onChange={(e) => handlePage(e.target.textContent)}></Pagination>
    </Box>
  );
}