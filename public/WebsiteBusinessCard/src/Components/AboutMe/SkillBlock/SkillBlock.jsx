import React from 'react';
import { ExpandingButton } from '../../Common/ExpandingButton';
import styles from './SkillBlock.module.scss';

export const SkillBlock = ({ key, skillName, skillIcon, detailsSkill, passed, additionalStyle, expanding }) => {

    return (
        <div
        style={{ ...additionalStyle }}
        key={key}
        className={styles['about-me__skill']}
    >
        {skillName}
        {expanding && <ExpandingButton idx={key} key={key} detailsSkill={detailsSkill} />}
        { !passed && <div className={styles['about-me__in-process']}>In process</div>}
        <div
            className={
                styles['about-me__skill-wrapper']
            }
        >
            {skillIcon?.map((skillItem) => (
                <span
                    className={
                        styles['about-me__skill-icon']
                    }
                >
                    {skillItem}
                </span>
            ))}
        </div>
    </div>
    );
};
