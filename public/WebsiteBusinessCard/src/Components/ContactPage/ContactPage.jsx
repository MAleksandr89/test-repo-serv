import React from 'react';
import styles from './ContactPage.module.scss';

export const ContactPage = () => {

    return (
        <div className={ styles["contact-section"] }>
            <p className={ styles["contact-name"] }>Александр Макунин</p>
            <p className={ styles["contact-role"] }>Фронтенд-разработчик</p>
            <p className={ styles["contact-info"] }>Телефон: <a href="tel:+79654306353">+7 965 430 63 53</a></p>
            <p className={ styles["contact-info"] }>Телеграмм: <a href="https://t.me/alexmak89">alexmak89</a></p>
            <p className={styles["contact-info"]}>Email: <a href="mailto:amakunin@list.ru">amakunin@list.ru</a></p>
            <form className={ styles["contact-form"]} action="#">
                <input className={ styles["contact-input"]} type="text" placeholder="Ваше имя" required />
                <input className={ styles["contact-input"]} type="email" placeholder="Ваш email" required />
                <textarea className={ styles["contact-input"]} placeholder="Ваше сообщение" required></textarea>
                <button className={ styles["contact-button"] } type="submit">Отправить</button>
            </form>
        </div>
    );
};
