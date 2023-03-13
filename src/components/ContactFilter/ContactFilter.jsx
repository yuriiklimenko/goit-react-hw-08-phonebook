import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const searchContact = e.target.value;

    dispatch(setFilter(searchContact.toLowerCase()));
  };

  return (
    <Container maxWidth="xs" sx={{ mt: '1rem' }}>
      <TextField
        label="Search"
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
        variant="outlined"
        size="small"
        fullWidth
      />
    </Container>
  );
};
