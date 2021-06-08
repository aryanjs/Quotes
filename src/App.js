import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

const AllQuotes = React.lazy(() => import('./screens/AllQuotes'))
const NewQuote = React.lazy(() => import('./screens/NewQuote'))
const NotFound = React.lazy(() => import('./screens/NotFound'))
const QuoteDetail = React.lazy(() => import('./screens/QuoteDetail'))

const App = () => {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route path="/quotes" component={AllQuotes} exact />
                    <Route path="/quotes/:quoteId" component={QuoteDetail} />
                    <Route path="/new-quote" component={NewQuote} />

                    {/* only render if all above paths did't match */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App
