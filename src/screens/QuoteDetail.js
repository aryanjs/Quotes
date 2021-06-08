import React, { Fragment, useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'

import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

const QuoteDetail = () => {
    const match = useRouteMatch()
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    const { quoteId } = useParams()

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className="centered"> {error} </p>
    }

    if (!loadedQuote.text) {
        return <NoQuotesFound />
    }

    return (
        <Fragment>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />

            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
