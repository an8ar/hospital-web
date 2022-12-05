import React from "react";
import { Grid, Box } from "@mui/material";
import { useGetDepartmentsQuery } from "../../api/public/public-api"; 
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export function DepartmentsCard() {
  const { data: departments, isLoading: isDepLoadin } = useGetDepartmentsQuery();
  const navigateTo = useNavigate();
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(6);
  if (isDepLoadin) {
    return <h1>Loading...</h1>;
  }
  const indexOfLastPost = curPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = departments.slice(indexOfFirstPost, indexOfLastPost);
  const paginationCount = Math.ceil(departments.length / postPerPage);
  function handlePage(pageNum) {
    setCurPage(pageNum);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1} sx={{ padding: 1 }}>
        {currentPosts.map((item) => {
          return (
            <Grid item xs={4} key={item.name}>
              <Item sx={{cursor: "pointer"}}
                onClick={() =>
                  navigateTo(`/departments/${item.name.toLowerCase()}`)
                }
              >
                {item.name}
              </Item>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        count={paginationCount}
        color="primary"
        onChange={(e) => handlePage(e.target.textContent)}
      ></Pagination>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:  "green" ,
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: 'white',
  margin: 10,
  borderRadius:10,
  fontSize:23,
}));
