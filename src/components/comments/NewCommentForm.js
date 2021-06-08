import { useEffect, useRef } from 'react'
import React from 'react'

import classes from '../../assets/css/comments/NewCommentForm.module.scss'
import useHttp from '../../hooks/use-http'
import { addComment } from '../../lib/api'
import LoadingSpinner from '../ui/LoadingSpinner'

const NewCommentForm = ({ onAddedComment, quoteId }) => {
    const commentTextRef = useRef()

    const { sendRequest, status, error } = useHttp(addComment)

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment()
        }
    }, [status, error, onAddedComment])

    const submitFormHandler = (event) => {
        event.preventDefault()
        const enteredText = commentTextRef.current.value

        // optional: Could validate here

        if (enteredText === '') {
            return
        } else sendRequest({ commentData: { text: enteredText }, quoteId })
        console.log(enteredText)
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}

            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    )
}

export default NewCommentForm
