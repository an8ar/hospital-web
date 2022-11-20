import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { Stack, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Link from '@mui/material/Link'

const specialty = [
  { name: 'Cardiologists', group: 'Doctor speciality' },
  { name: 'Dermatologists', group: 'Doctor speciality' },
  { name: 'Emergence Medicine Specialists', group: 'Doctor speciality' },
  { name: 'Allergists/Immunologists', group: 'Doctor speciality' },
  { name: 'Anesthesiologists', group: 'Doctor speciality' },
  { name: 'Colon and Rectal Surgeons', group: 'Doctor speciality' },
]

const SearchBar = () => {
  const [query, setQuery] = useState('')

  return (
    <Stack flexDirection="row" justifyContent="center" alignItems="center">
      <Autocomplete
        sx={{ width: '600px', margin: '24px 0' }}
        freeSolo
        disableClearable
        options={specialty}
        groupBy={(option) => option.group}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => {
          return (
            <li key={option.name}>
              <Typography
                variant="inherit"
                gutterBottom
                sx={{ marginLeft: '16px' }}
              >
                <Link
                  href="/1"
                  variant="inherit"
                  underline="hover"
                  color="inherit"
                >
                  {option.name}
                </Link>
              </Typography>
            </li>
          )
        }}
        size="medium"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
    </Stack>
  )
}

export default SearchBar
