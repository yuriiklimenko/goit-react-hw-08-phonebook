import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import PropTypes from 'prop-types';

import { TableRow, TableCell, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row" align="center">
        <Avatar name={name} size={30} round={true} />
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">
        <IconButton
          color="error"
          onClick={() => {
            toast.info('Your contact has been deleted!');
            dispatch(handleDelete);
          }}
        >
          <ClearIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
