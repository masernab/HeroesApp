import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

export const PublicRoutes = ({
    isLogged,
    ...rest
}) => {
    return (
        (!isLogged)
            ?<Route {...rest}/>
            :<Redirect to='/'/>
    )
}

PublicRoutes.propType = {
    isLogged: PropTypes.bool.isRequiered,
}