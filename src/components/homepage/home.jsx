import React from 'react'
import { Box } from '@mui/system'
import { CaurouselComponent } from './caurousel/caurousel';
import { BottomNavigation } from '@mui/material';
import { SearchBar } from './search-bar/search-bar';

export function HomeComponent() {

  return (
    <Box>
      <Box style={{ margin: 5, display: "flex", justifyContent: "center",}}>
        <CaurouselComponent />
      </Box>
      <SearchBar></SearchBar>
    </Box>
  )
}
