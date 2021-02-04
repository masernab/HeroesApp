import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types';
export const PrivateRoutes = ({
    isLogged,
    ...rest
}) => {
    localStorage.setItem('lasPathname',{...rest}.location.pathname)
    return (
        (isLogged)
            ?<Route {...rest}/>
            :<Redirect to='/login'/>
    )
}
PrivateRoutes.propType = {
    isLogged: PropTypes.bool.isRequiered,
}