import React from 'react';
import PropTypes from 'prop-types';

function LoginInput({type, icon, placeholder}) {
    return (
        <div className="mb-5 flex">
            <i className={`${icon} bg-blue-500 px-3 py-1 mr-2 text-white text-2xl rounded-l-lg`}></i>
            <input type={type} className="border-2 p-2 rounded-r-lg w-full" placeholder={placeholder} autoComplete="on" />
        </div>
    )
}

LoginInput.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default LoginInput;