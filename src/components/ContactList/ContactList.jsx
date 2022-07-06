import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList({ contacts, onDelete }) {
  return(
    <ul className="friendsList">
        {contacts.map(contact => (  
            <ContactListItem 
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                deleteContact={onDelete}
            />
        ))}   
    </ul> 
 )   
}

ContactList.defaultProps = {
    contacts: [],
    onDelete: () => {}
};
  
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string
        })
      ).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ContactList;