import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { selectContacts } from 'redux/contacts/selectors';

import { Typography, CircularProgress, Box } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography align="center" variant="h5" marginBottom={2} marginTop={2}>
        Add new contact
      </Typography>
      <ContactForm />
      <ContactFilter />

      {isLoading ? (
        <Box
          sx={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : contacts.length > 0 ? (
        <>
          <Typography
            align="center"
            variant="h5"
            marginBottom={2}
            marginTop={2}
          >
            Your contacts
          </Typography>
          <ContactList />
        </>
      ) : (
        <Typography align="center" variant="h6" marginBottom={2} marginTop={2}>
          You don't have any contact
        </Typography>
      )}
    </>
  );
}
