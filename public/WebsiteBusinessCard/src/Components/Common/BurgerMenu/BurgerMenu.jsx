import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import classes from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(prev => !prev);
    }

    const navItems = [
        {
        name: 'Главная',
        path: '/'
        },
        {
        name: 'Обо мне',
        path: '/about'
        },
        {
        name: 'Мои работы',
        path: '/my-works'
        },
        {
        name: 'Контакты',
        path: '/contacts'
        }
]

    return (
        <>
            <div className={ classes.container } onClick={ handleOpenMenu }>
                <div className={ classnames(classes.bar1, { [classes['change-bar1']]: openMenu }) }></div>
                <div className={ classnames(classes.bar2, { [classes['change-bar2']]: openMenu }) }></div>
                <div className={ classnames(classes.bar3, { [classes['change-bar3']]: openMenu }) }></div>
            </div>
            { openMenu && (
                <div className={ classes.menu }>
                    <div className={ classes['menu-items'] }>
                        {navItems.map((item) => (
                            <Link onClick={ handleOpenMenu } to={item.path}><span>{item.name}</span></Link>
                        ))}
                    </div>
                </div>
            ) }
        </>
    );
};
