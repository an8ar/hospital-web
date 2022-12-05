import React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { BasicTabs } from "./date-slots";

export function DoctorCard({ doctor, setChoosedDepartment, setChoosedDoctor }) {
    return (
        <div>
            <Grid container spacing={1} sx={{ padding: 1 }}>
                <Grid item xs={4}>
                    <Item><img style={{ width: '100%' }} alt={doctor.name} src={`https://csci361.pythonanywhere.com/${doctor.photo}`}></img></Item>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <p>Name: {doctor.name}</p>
                        <p>Surname: {doctor.surname}</p>
                        <p>Category: {doctor.category}</p>
                    </div>
                </Grid>
                <BasicTabs doctor={doctor} setChoosedDepartment={setChoosedDepartment} setChoosedDoctor={setChoosedDoctor} ></BasicTabs>
            </Grid>
        </div>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
}));