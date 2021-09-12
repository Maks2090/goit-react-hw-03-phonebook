import PropTypes from "prop-types";
import css from '../ContactList/ContactList.module.css'

function ContactList({ getContacts, deleteContact }) {
    return (
        <ul className={css.list}>
            {getContacts.map((contact) => (
                <li key={contact.id} className={css.item} >

                    {contact.name}: {contact.number}

                    <button
                        className={css.button}
                        type="submit"
                        onClick={() => deleteContact(contact)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList

ContactList.propTypes = {
    getContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
};