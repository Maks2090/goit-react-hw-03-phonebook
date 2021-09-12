import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import css from '../ContactFotm/ContactForm.module.css'

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }

    handelChange = e => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    }

    handelSubmit = e => {
        e.preventDefault();
        let idName = uuidv4();
        const total = {
            id: idName,
            name: this.state.name,
            number: this.state.number,
        }

        this.props.onSubmit(total)

        this.reset();
    }



    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {

        return (
            <form className={css.form} onSubmit={this.handelSubmit}>


                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        value={this.state.name}
                        onChange={this.handelChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    >

                    </input>
                </label>



                <label className={css.label}>
                    Number
                    <input
                        className={css.input}
                        value={this.state.number}
                        onChange={this.handelChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>


                <button
                    className={css.button}
                    type="submit">
                    Add contact
                </button>


            </form>
        )
    }
}

export default ContactForm

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};