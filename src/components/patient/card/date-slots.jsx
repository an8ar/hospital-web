import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetAvailableSlotQuery } from '../../../api/appointments/appointments';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { useSelector } from 'react-redux'
import { useCreateAppointmentMutation } from '../../../api/appointments/appointments'
import Modal from '@mui/material/Modal';
import { Alert } from '@mui/material';
import {Grid} from '@mui/material';

function toFormateDate(date) {
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`
  }
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

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

export function BasicTabs({ doctor, setChoosedDepartment, setChoosedDoctor }) {
  const [value, setValue] = React.useState(0);
  const [createAppointment] = useCreateAppointmentMutation();
  var dateArr = [];
  const date = new Date();
  for (let index = 0; index < 10; index++) {
    dateArr = [...dateArr, toFormateDate(date)];
    date.setDate(date.getDate() + 1);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const finalDate = dateArr[value];
  const { data = [], isLoading } = useGetAvailableSlotQuery({ username: doctor.slug, date: finalDate })
  const [open, setOpen] = React.useState(false);
  const [choosedTimeSlot, setChosedTimeSlot] = React.useState('');
  const handleOpen = (e) => { setOpen(true); setChosedTimeSlot(e.target.value) }
  const handleClose = () => setOpen(false);
  if (isLoading) {
    <h1>isLoading...</h1>
  }
  const patientId = useSelector(state => state.auth.user.id)
  async function handleClick(e) {
    setChoosedDepartment('');
    setChoosedDoctor({});
    setOpen(false);
    await createAppointment({
      date: finalDate,
      timeslot: choosedTimeSlot,
      doctor: doctor.id,
      patient: patientId,
    });

  }


  return (
    <Box sx={{ width: '100%', display: "flex", flexDirection: "column" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            dateArr.map(elem => <Tab key={elem} label={elem} />)
          }
        </Tabs>
      </Box>

      <Stack direction="row" spacing={2}>
        <Grid container spacing={1}>
          {data.map(id => {
            return <Grid item xs={2}>
              <Button variant="contained" value={id} key={id} onClick={(e) => handleOpen(e)}>{TIMESLOT_LIST[id]}</Button>
            </Grid>
          })}
        </Grid>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Are you confirming the appointment"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}>
          <Alert>Are you confirming the appointment!</Alert>
          <Button variant="contained" size='small' onClick={handleClick}>Confirm</Button>
        </Box>


      </Modal>
    </Box>
  );
}