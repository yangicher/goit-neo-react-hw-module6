import PropTypes from 'prop-types';
import { FaUser, FaPhone } from "react-icons/fa6";

import css from './Contact.module.css';

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={css.card}>
      <div>
        <div className={css.label}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.label}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Contact;
