import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Form, Label, Input, FormButton } from "./ContactForm.styles";


export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    };

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>Name:
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>Number:
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <FormButton type="submit">Add contact</FormButton>
            </Form>
        );
    };
}

ContactForm.prototypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
}