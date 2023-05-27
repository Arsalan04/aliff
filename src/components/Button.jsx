import PropTypes from 'prop-types';

const Button = ({ btnText, fullwidth }) => {
    const buttonStyle = fullwidth ? 'w-full' : '';

    return (
        <button className={`bg-orange-500 text-white px-12 py-2 rounded ${buttonStyle}`}>
            {btnText}
        </button>
    );
};

Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    fullwidth: PropTypes.bool,
};

Button.defaultProps = {
    fullwidth: false,
};

export default Button;
