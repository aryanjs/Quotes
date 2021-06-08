import React, { Fragment } from 'react'

import classes from '../../assets/css/layout/Layout.module.scss'
import MainNavigation from './MainNavigation'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />

            <main className={classes.main}>{children}</main>
        </Fragment>
    )
}

export default Layout
