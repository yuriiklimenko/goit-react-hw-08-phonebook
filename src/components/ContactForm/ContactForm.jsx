import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField, Button, Stack, Container } from '@mui/material';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;
    const nameOnInput = form.name.value;

    const namesInStore = contacts.map(contact => contact.name.toLowerCase());

    if (namesInStore.includes(nameOnInput.toLowerCase())) {
      toast.error(`${nameOnInput} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        name: nameOnInput,
        number: form.number.value,
      })
    );
    toast.success('New contact added!');

    event.target.reset();
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            type="text"
            name="name"
            required
            placeholder="Name"
            variant="outlined"
            size="small"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
          />
          <TextField
            label="Phone"
            type="tel"
            name="number"
            required
            placeholder="+38 (111) 111 11 11"
            variant="outlined"
            size="small"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            inputProps={{
              pattern:
                '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
            }}
          />
          <Button variant="contained" type="submit">
            Add Contact
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
