import React from 'react'
import { Box } from '@mui/system'
import { CaurouselComponent } from './caurousel/caurousel';
import { SearchBar } from './search-bar/search-bar';
import { DepartmentsCard } from './departments-card';

export function HomeComponent() {

  return (
    <Box>
      <Box style={{ margin: 5, display: "flex", justifyContent: "center",}}>
        <CaurouselComponent />
      </Box>
      <SearchBar></SearchBar>
      <DepartmentsCard/>
    </Box>
  )
}
