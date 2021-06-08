import React from 'react'

import classes from '../../assets/css/quotes/HighlightedQuote.module.scss'
const HighlightedQuote = ({ text, author }) => {
    return (
        <figure className={classes.quote}>
            <p>{text}</p>
            <figcaption>&mdash; {author}</figcaption>
        </figure>
    )
}

export default HighlightedQuote
