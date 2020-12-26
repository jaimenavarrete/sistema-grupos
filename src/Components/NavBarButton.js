import React from 'react';
import PropTypes from 'prop-types';

function NavBarButton({text, icon, url}) {
    return (
        <li className="navbar-item">
            <i className="las la-home"></i> Inicio
        </li>
    );
}

NavBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    url: PropTypes.string
}

export default NavBarButton;