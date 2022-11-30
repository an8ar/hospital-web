import { Card, Box, Typography, Rating, Button, Chip } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import { Stack } from '@mui/system'

function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}


export const DoctorCard = ({ doctor, department }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '300px',
        padding: '1',
        marginTop: '24px',
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
      >
        <Box sx={{ margin: '24px 0px' }}>
          <Avatar src={doctor.photo} />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.5)',
            padding: '4px',
          }}
        >
          <Box>
            <Rating
              name="read-only"
              value={doctor.rating}
              precision={0.5}
              size="small"
              readOnly
              sx={{ position: 'relative', top: '4px' }}
            />
            <Typography
              component="span"
              variant="subtitle1"
              color="text.secondary"
            >
              {' '}
              {doctor.rating}
            </Typography>
          </Box>
          <Box>
            <Button>See reviews</Button>
          </Box>
        </Box>
      </Stack>

      <Box>
        <CardContent>
          <Stack
            alignItems="center"
            sx={{ marginBottom: '10px', borderBottom: '1px solid lightgray' }}
          >
            <Typography component="div" variant="h4">
              {doctor.middle_name}
            </Typography>
            <Typography component="div" variant="h5">
              {doctor.surname} {doctor.surname}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              Department
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              {department}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              Experience
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              {doctor.experience} years
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              Consultation
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              <Typography
                variant="subtitle1"
                color="royalblue"
                component="span"
              >
                {Math.round(doctor.price)} tg
              </Typography>
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="end">
            <Chip
              label="Make an appointment"
              onClick={() => console.log('click')}
              sx={{ marginTop: '8px' }}
            />
          </Stack>
        </CardContent>
      </Box>
    </Card>
  )
}


