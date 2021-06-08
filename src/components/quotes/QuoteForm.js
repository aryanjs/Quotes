import { Fragment, useRef, useState } from 'react'
import React from 'react'
import { Prompt } from 'react-router-dom'

import classes from '../../assets/css/quotes/QuoteForm.module.scss'
import Card from '../ui/Card'
import LoadingSpinner from '../ui/LoadingSpinner'

// eslint-disable-next-line no-unused-vars
const QuoteForm = ({ onAddQuote, isLoading }) => {
    const authorInputRef = useRef()
    const textInputRef = useRef()

    const [isEntered, setIsEntered] = useState(false)

    const submitFormHandler = (event) => {
        event.preventDefault()

        const enteredAuthor = authorInputRef.current.value
        const enteredText = textInputRef.current.value

        // optional: Could validate here

        if (enteredText === '') {
            return
        } else onAddQuote({ author: enteredAuthor, text: enteredText })
    }

    const formFocusHandler = () => {
        setIsEntered(true)
    }

    const finishEnteringHandler = () => {
        setIsEntered(false)
    }

    return (
        <Fragment>
            <Prompt when={isEntered} message={() => 'Are you sure you want to leave this page?'} />
            <Card>
                <form
                    onFocus={formFocusHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}>
                    {isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="text">Text</label>
                        <textarea id="text" rows="5" ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className="btn">
                            Add Quote
                        </button>
                    </div>
                </form>
            </Card>
        </Fragment>
    )
}

export default QuoteForm
