import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <AppBar position="static" sx={{ color: "black",bgcolor: "#E0E0E0", width: "100%" }} >
            <Box sx={{ display: "flex", flexDirection: "row",justifyContent:"center", margin: 3 }}>
                <Box sx={{flex: 1}}>
                    <Link to="/about">About</Link>
                </Box>
                <Box>
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <TelegramIcon />
                </Box>
            </Box>
        </AppBar>
    )
}
