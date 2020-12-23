import React from 'react';
import PropTypes from 'prop-types';

function LoginInput({icon, placeholder}) {
    return (
        <div className="mb-5 flex">
            <i className={`${icon} bg-blue-500 px-2 py-1 mr-2 text-white text-2xl rounded-l-lg`}></i>
            <input type="text" className="border-2 p-2 rounded-r-lg w-full" placeholder={placeholder} />
        </div>
    )
}

LoginInput.propTypes = {
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default LoginInput;