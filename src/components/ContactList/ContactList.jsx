import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  if (!contacts.length) {
    return <h3>You don't have any contact</h3>;
  }

  const getVisibleContact = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContact(contacts, filter);

  return (
    <>
      {visibleContacts.length ? (
        <ul>
          {visibleContacts.map(contact => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>
      ) : (
        <h3>No matches found</h3>
      )}
    </>
  );
};
