import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
        fontWeight: '700',
        alignItems: 'center',
      }}
    >
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Box>
  );
};
