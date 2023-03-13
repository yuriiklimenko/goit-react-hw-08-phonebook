import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Box, ButtonIcon } from '@mui/material';

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
      <NavLink to="/register">
        {/* <AppRegistrationIcon /> */}
        Register
      </NavLink>
      <NavLink to="/login">
        {/* <LoginIcon /> */}
        Log In
      </NavLink>
    </Box>
  );
};
