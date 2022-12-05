import { Card, Box, Typography, Rating, Chip } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import { Stack } from '@mui/system'
import {Modal} from '@mui/material'
import { useState } from 'react'
import {DoctorCard} from './modal-appointment/doctor-card';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 10,
    p: 4,
  };
  
export const DoctorGrid = ({ doctor, service }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Card
                variant="outlined"
                sx={{
                    width: '300px',
                    padding: '1',
                    marginTop: '24px',
                }}
            >
                <Stack
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
                >
                    <Box sx={{ margin: '24px 0px' }}>
                        <Avatar src={doctor.photo} />
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.5)',
                            padding: '4px',
                        }}
                    >
                        <Box>
                            <Rating
                                name="read-only"
                                value={doctor.rating}
                                precision={0.5}
                                size="small"
                                readOnly
                                sx={{ position: 'relative', top: '4px' }}
                            />
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {' '}
                                {doctor.rating}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>

                <Box>
                    <CardContent>
                        <Stack
                            alignItems="center"
                            sx={{ marginBottom: '10px', borderBottom: '1px solid lightgray' }}
                        >
                            <Typography component="div" variant="h5">
                                {doctor.name} {doctor.surname}
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="space-between">
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                Service
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                {service}
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="space-between">
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                Experience
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                {doctor.experience} years
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="space-between">
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                Consultation
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="span"
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="royalblue"
                                    component="span"
                                >
                                    {Math.round(doctor.price)} tg
                                </Typography>
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="end">
                            <Chip
                                label="Make an appointment"
                                onClick={handleOpen}
                                sx={{ marginTop: '8px' }}
                            />
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DoctorCard doctor={doctor}/>
                </Box>
            </Modal>
        </Box>
    )
}


