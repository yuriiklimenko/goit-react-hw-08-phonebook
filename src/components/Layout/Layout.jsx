import css from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
