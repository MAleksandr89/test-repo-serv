import React from 'react';
import classNames from 'classnames';
import styles from './ProjectCard.module.scss';

export const ProjectCard = ({ titleName, subtitleName, imgWork, linkWork, typeWork }) => {

    return (
        <div className={ classNames(styles["project-card"], 'mix', typeWork ) }>
            <div className={ styles["card-img"] }>
                <a target="_blank" rel='noreferrer' className={ styles["card-link"] } href={ linkWork }>
                    <div className={ styles["card-image"] }>
                        <img
                            src={ imgWork }
                            alt="Forest Treval"
                        />
                        <span>Смотреть проект</span>
                    </div>
                    <div className={ styles["card-description"] }>
                        <h4 className={ styles["title-4"] }>{ titleName }</h4>
                        <p className={ styles["subtitle-portfolio"] }>
                            { subtitleName }
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};
