import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetDepartmentQuery } from '../../api/public/public-api'
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export const Department = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const { data: departments, isLoading: isDepLoadin } = useGetDepartmentQuery(id);
    
    if(isDepLoadin){
        return (
            <h1>Loading...</h1>
        )
    }
  

   
    return (
        <Box sx={{ width: '800px', margin: '20px 0px' }}>
            <Box>
                <Typography variant="h5">Department: {departments?.name}</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Services: {departments?.name}</Typography>
                <Grid container spacing={1} sx={{ padding: 1 }}>
                    {departments.services.map((service) => {
                        return (
                            <Grid item xs={4} key={service.id}>
                                <Item sx={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate(`/services/${service.slug}`)
                                    }
                                >
                                    {service.name}
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "green",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    color: 'white',
    margin: 10,
    borderRadius: 10,
    fontSize: 23,
}));
