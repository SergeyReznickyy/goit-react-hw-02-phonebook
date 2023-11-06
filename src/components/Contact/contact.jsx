import PropTypes from 'prop-types';
import css from './contact.module.css';
import { ContactListItem } from 'components/ContactItem/contactItem';

export const ContactList = ({ filtredСontacts, onDeleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {filtredСontacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtredСontacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
