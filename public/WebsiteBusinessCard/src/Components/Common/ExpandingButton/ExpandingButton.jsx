import React from 'react';
import { CloseIcon } from '../../Common/Icons/CloseIcon'
import classNames from 'classnames';
import classes from './ExpandingButton.module.scss';

export const ExpandingButton = ({ detailsSkill, idx }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleOpen = (e) => {
        setExpanded((prev) => !prev);
    };

    window.onclick = function (event) {
        if(event.target.id !== `wrapper-${ idx }`) {
            setExpanded(false);
        } 
    }


    return (
        <>
            <div id={ `wrapper-${ idx }` } onClick={(e) => handleOpen(e)} className={classes.wrapper}>
                <div className={classNames(classes.dots, expanded && classes.hidden) }></div>
                <div className={classNames(classes.dots, expanded && classes.hidden) }></div>
                <div className={classNames(classes.dots, expanded && classes.hidden) }></div>
                <div className={classNames(classes.close, !expanded && classes.hidden) }><CloseIcon /></div>
            </div>
            <div
                className={classNames(
                    classes.expanded,
                    !expanded && classes.hidden
                )}
            >
                {detailsSkill?.map((skill) => (
                    <div className={classes['expanding-button__title']}>
                        <li>{skill}</li>
                        {/* {skill} */}
                    </div>
                ))}
            </div>
        </>
    );
};
