import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function NavBarButton({ text, icon, url }) {
    return (
        <li>
            <Link to={url} className="navbar-item">
                <i className={ icon }></i> { text }
            </Link>
        </li>
    );
}

NavBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    url: PropTypes.string.isRequired
}

export default NavBarButton;