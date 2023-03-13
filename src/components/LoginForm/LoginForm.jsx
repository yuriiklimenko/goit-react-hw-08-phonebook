import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import {
  TextField,
  Button,
  Stack,
  Container,
  CircularProgress,
} from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} marginTop={5}>
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            variant="outlined"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            required
            variant="outlined"
            size="small"
          />
          <Button variant="contained" type="submit">
            {!isLoggedIn ? (
              'Log In'
            ) : (
              <CircularProgress size={28} color="info" />
            )}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
