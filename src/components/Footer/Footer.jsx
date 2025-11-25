import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Box sx={{ bgcolor: '#493c3cff', color: 'white', textAlign: 'center', p: 2, mt: 4 }}>
            <Typography variant='h6'>
                 List your Show Got a show event,activity or a great experience? Partner witth us & get listed on BookMyShow <button style={{backgroundColor:'#db3a3aff',color:'#f4eeeeff',border:'none',padding:'5px 10px',borderRadius:'5px',cursor:'pointer',marginLeft:'10px'}}>Contact today</button>
            </Typography>
          <p>&copy; {new Date().getFullYear()} BookMyShow. All rights reserved.</p>

        </Box>
    </div>
  )
}

export default Footer
