import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../Common/BurgerMenu';
import { Buttons } from '../Common/Buttons';
import devIcon from '../Common/Icons/dev-icon.png';
import myCV from '../Assets/Makunin_A.pdf';
import styles from './header.module.scss';

export const Header = () => {

    const buttonStyles = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #FFFFFF',
        color: '#000000',
        fontWeight: '600',
    }

    return (
        <div className={styles.header}>
            <div className={styles['header-container']}>
                <Link to={'/'}>
                    <div className={styles.logo}>
                        <img src="./logo.png" alt="Logo" />
                    </div>
                </Link>
                <div className={styles.tabs}>
                    <Link to={'/'}><span>Главная</span></Link>
                    <Link to={'/about'}><span>Обо мне</span></Link>
                    <Link to={'/my-works'}><span>Мои работы</span></Link>
                    <Link to={'/contacts'}><span>Контакты</span></Link>
                </div>
                <a href={ myCV } download="Makunin_A.pdf">
                    <Buttons
                        name="Скачать CV"
                        styles= { buttonStyles }
                    />
                </a>
            </div>
            <Link to={'/'}>
                <div className={styles['dev-info']}>
                    <div style={{ color: '#fd5', fontWeight: '600', fontSize: '22px'}}>Frontend developer</div>
                    <div className={styles['dev-icon']}>
                        <img src={ devIcon } alt="" />
                    </div>
                </div>
            </Link>
            <BurgerMenu />
        </div>
    );
};
