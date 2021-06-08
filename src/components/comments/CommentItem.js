import React from 'react'

import classes from '../../assets/css/comments/CommentItem.module.scss'

const CommentItem = (props) => {
    return (
        <li className={classes.item}>
            <p>{props.text}</p>
        </li>
    )
}

export default CommentItem
