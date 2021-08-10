import PropTypes from 'prop-types';
import { button } from './Button.module.css';

const Button = ({ onClick }) => {
    return (
        <div className={button} type="button" onClick={onClick}>Load more</div>
    );
};


Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;