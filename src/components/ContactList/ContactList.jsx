import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContact = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContact(contacts, filter);

  return (
    <>
      {visibleContacts.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleContacts.map(({ id, name, number }) => {
              return <Contact key={id} id={id} name={name} number={number} />;
            })}
          </TableBody>
        </Table>
      ) : (
        <Typography align="center" variant="h6" marginBottom={2} marginTop={2}>
          No matches found
        </Typography>
      )}
    </>
  );
};
