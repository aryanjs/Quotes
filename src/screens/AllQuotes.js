import React, { useEffect } from 'react'

import NoQuotesFound from '../components/quotes/NoQuotesFound'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

/* const dummyQuotes = [
    {
        id: 'q1',
        author: 'Arian',
        text: 'Learning React is fun!'
    },
    {
        id: 'q2',
        author: 'Arian Jan',
        text: 'React is Awesome!'
    }
] */

const AllQuotes = () => {
    const { sendRequest, status, data: loadQuotes, error } = useHttp(getAllQuotes, true)

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && (!loadQuotes || loadQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return <QuoteList quotes={loadQuotes} />
}

export default AllQuotes
