import PropTypes from "prop-types";
import { Component } from 'react';
import { Phonebook, Label, Input, AddButton } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetState();
  };

  resetState = () => {
    this.setState({ name: '', number: '', });
  }

  render() {
const { name, number } = this.state;

    return (
      <Phonebook onSubmit={this.handleSubmit}>
        <Label>
          Name  
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Phonebook>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export { ContactForm };
