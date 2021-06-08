import React from 'react'

import classes from '../../assets/css/ui/Card.module.scss'
const Card = ({ children }) => {
    return <div className={classes.card}>{children}</div>
}

export default Card
