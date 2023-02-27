import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';
import InputTel from 'components/UI/Input/InputTel';
import InputName from 'components/UI/Input/InputName';
import Button from 'components/UI/Button/Button';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;
    const nameOnInput = form.name.value;

    const namesInStore = contacts.map(contact => contact.name.toLowerCase());

    if (namesInStore.includes(nameOnInput.toLowerCase())) {
      return alert(`${nameOnInput} is already in contacts.`);
    }

    dispatch(
      addContact({
        name: nameOnInput,
        phone: form.phone.value,
      })
    );

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <InputName />
      <label className={css.label}>Number</label>
      <InputTel />
      <Button>Add Contact</Button>
    </form>
  );
};
