import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  IconButton,
  LogoutIcon,
  Box,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <Typography align="center" variant="p" fontWeight="700">
        Welcome, {user.name}!
      </Typography>

      <Button
        sx={{
          color: '#fff',
          fontWeight: 700,
          textTransform: 'capitalize',
          fontSize: 16,
        }}
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        {isLoggedIn ? 'Logout' : <CircularProgress size={28} color="info" />}
      </Button>
    </Box>
  );
};
