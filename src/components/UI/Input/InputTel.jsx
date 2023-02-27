import css from './Input.module.css';

const InputTel = props => {
  return (
    <input
      {...props}
      className={css.input}
      type="tel"
      name="phone"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
  );
};

export default InputTel;
