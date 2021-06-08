import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../../assets/css/quotes/NoQuotesFound.module.scss'
const NoQuotesFound = () => {
    return (
        <div className={classes.noquotes}>
            <p>No quotes found!</p>
            <Link className="btn" to="/new-quote">
                Add a Quote
            </Link>
        </div>
    )
}

export default NoQuotesFound
