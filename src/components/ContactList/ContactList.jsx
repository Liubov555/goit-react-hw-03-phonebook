import React from "react";
import PropTypes from "prop-types";
import { List, Item, Text, Button } from "./ContactList.style";

const ContactList = ({ contacts, deleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) => {
            return (
                <Item key={id}>
                    <Text> {name}: {number} </Text>
                    <Button type="button" onClick={() => deleteContact(id)}>Delete</Button>
                </Item>
            )
        }
        )}
    </List>
)

export default ContactList;

ContactList.prototypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        })),
    deleteContact: PropTypes.func.isRequired,
}