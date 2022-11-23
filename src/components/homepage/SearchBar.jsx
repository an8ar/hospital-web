import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { Stack, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Link from '@mui/material/Link'
import { useState, useEffect } from 'react'

import { departments } from './constants'

export const SearchBar = () => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  let searchOptions = departments

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    if (active) {
      setOptions(searchOptions)
    }

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Stack flexDirection="row" justifyContent="center" alignItems="center">
      <Autocomplete
        sx={{ width: '500px', margin: '0px 0' }}
        freeSolo
        open={open}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        loading={loading}
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
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ background: '#fff', '& fieldset': {} }}
            placeholder="Search..."
            required
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon style={{ fill: 'white' }} />
      </IconButton>
    </Stack>
  )
}