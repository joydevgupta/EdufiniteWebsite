import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ textAlign: 'center', p: 2, mt: 4, backgroundColor: '#f5f5f5' }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My English Classes
      </Typography>
    </Box>
  );
}

export default Footer;
