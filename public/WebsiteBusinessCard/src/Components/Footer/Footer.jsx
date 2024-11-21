import React from 'react';
import { MailIcon, TgIcon, GitHubIcon } from '../Common/Icons/index';
import styles from './Footer.module.scss';

export const Footer = () => {

    const mySocials = [
        {
            titleName: 'Мой телеграм',
            link: 'https://t.me/alexmak89',
            name: 'TG',
            icon: <TgIcon />
        },
        {
            titleName: 'Мой GitHub',
            link: 'https://github.com/maleksandr89',
            name: 'GitHub',
            icon: <GitHubIcon />
        },
        {
            titleName: 'Моя почта',
            link: 'mailto:amakunin@list.ru',
            name: 'Mail',
            icon: <MailIcon />
        }
    ]

    return (
        <div className={styles.footer}>
            <div className={styles['footer-container']}>
                { mySocials.map(({ titleName, link, icon }, index) => {
                    return (
                        <a key={ index } href={ link } target="_blank" rel="noreferrer">
                            <div className={styles['footer-icons']}>
                                <span>{ titleName }</span> 
                                { icon }
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};
