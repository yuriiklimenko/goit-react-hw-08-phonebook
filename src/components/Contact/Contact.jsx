import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './Contact.module.css';
import Button from 'components/UI/Button/Button';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      <p className={css.name}>{contact.name}: </p>
      <p className={css.tel}>{contact.phone}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
