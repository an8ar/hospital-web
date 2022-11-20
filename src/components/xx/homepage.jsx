import SearchBar from './searchbar'
import { Box } from '@mui/material'

export const HomepageXX = () => {
  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '800px',
          flexDirection: 'column',
        }}
      >
        <SearchBar />
      </Box>
    </main>
  )
}

