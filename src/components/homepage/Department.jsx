import { Typography, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetDepartmentQuery } from '../../api/public/public-api'

const Department = () => {
  const { id } = useParams()

  const {
    data: item,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDepartmentQuery(id)

  return (
    <Stack>
      <Typography>{id}</Typography>
    </Stack>
  )
}

export default Department
