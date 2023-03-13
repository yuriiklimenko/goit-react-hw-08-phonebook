import { useAuth } from 'hooks';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: '30px', fontWeight: '700' }}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Box>
  );
};
