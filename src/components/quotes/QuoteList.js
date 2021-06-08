import { Fragment } from 'react'
import React from 'react'
import { useHistory, useLocation } from 'react-router'

import classes from '../../assets/css/quotes/QuoteList.module.scss'
import QuoteItem from './QuoteItem'

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1
        } else {
            return quoteA.id < quoteB.id ? 1 : -1
        }
    })
}

const QuoteList = ({ quotes }) => {
    const history = useHistory()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const isSortingAscending = queryParams.get('sort') === 'asc'
    const sortedQuotes = sortQuotes(quotes, isSortingAscending)

    const changeSortingHandler = () => {
        history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'))
    }

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default QuoteList
