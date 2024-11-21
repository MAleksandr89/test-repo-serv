import React from 'react';
import classes from './Buttons.module.scss';

export const Buttons = ({ name, styles, handleClick }) => {

    return (
        <>
            <button
                onClick={ handleClick }
                style={{ ...styles }}
                className={classes.button}>
                    { name }
            </button>
        </>

    );
};
