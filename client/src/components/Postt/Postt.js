import React from 'react';

import classes from './Postt.css';

const post = (props) => {
    return (
        <div className={classes.Post} >
            <h1>{props.title} </h1><small>{props.date}</small> 
            <p>{props.children}</p>
        </div> 
    );
}

export default post;