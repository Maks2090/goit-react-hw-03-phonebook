import PropTypes from "prop-types";
import css from '../Filter/Filter.module.css'

function Filter({ filter, filterList }) {
    return (
        <div>
            <p className={css.text}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={filterList}
                value={filter}
            />
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.string,
    formSubmitHandler: PropTypes.func,
};

export default Filter;