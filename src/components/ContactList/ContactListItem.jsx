import PropTypes from "prop-types";

function ContactListItem({ name, number, id, deleteContact }) {
  return(
    <li className="listItem">
        <p className="contactItem">{name}: {number}</p>
        <button type="button" onClick={() => deleteContact(id)} className="deleteBtn">delete</button>
    </li>
  )   
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactListItem;