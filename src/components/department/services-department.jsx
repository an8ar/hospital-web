import React from 'react'
import { Box } from '@mui/system'
import { useParams } from 'react-router-dom'
import { useGetServicesQuery } from '../../api/public/public-api'
import { DoctorGrid } from './doctor-grid'
import { Typography } from '@mui/material'
import { Grid } from "@mui/material";

export function ServicesInDepartment() {

    const { id } = useParams()
    const { data: serviceData, isLoading: isServiceLoading } = useGetServicesQuery(id);


    if (isServiceLoading) {
        return (
            <h1>Loading</h1>
        )
    }
    let content;
    content = serviceData.doctor.map((doctor) => (
        <Grid item xs={4} key={doctor.id}>
            <DoctorGrid service={serviceData.name} doctor={doctor} key={doctor.id} />
        </Grid>
    ))
    if (content.length === 0) {
        return (
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <Typography variant="h5">
                    There is no doctors
                </Typography>
            </Box>)
    }
    return (
        <Grid container spacing={2}>{content}</Grid>
    )
}
