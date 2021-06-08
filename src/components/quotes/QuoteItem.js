import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../../assets/css/quotes/QuoteItem.module.scss'
const QuoteItem = ({ text, author, id }) => {
    return (
        <li className={classes.item}>
            <figure>
                <q className={classes.quote}>{text}</q>

                <figcaption>&mdash; {author}</figcaption>
            </figure>
            <Link className="btn" to={`/quotes/${id}`}>
                View Fullscreen
            </Link>
        </li>
    )
}

export default QuoteItem
