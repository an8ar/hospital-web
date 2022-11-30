import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetDepartmentQuery } from '../../api/public/public-api'
import { DoctorGrid } from './doctor-grid'


export const Department = () => {
    const { id } = useParams()

    const {
        data: item, isSuccess, } = useGetDepartmentQuery(id)

    let content

    if (isSuccess) {
        let doctors = item.doctors
        content = doctors.map((doctor) => (
            <DoctorGrid department={item.name} doctor={doctor} key={doctor.id} />
        ))
    }

    return (
        <Box sx={{ width: '800px', margin: '20px 0px' }}>
            <Box>
                <Typography variant="h5">Department: {item?.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>{content}</Box>
        </Box>
    )
}
