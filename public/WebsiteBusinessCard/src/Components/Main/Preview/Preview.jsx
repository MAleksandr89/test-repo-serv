import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Buttons } from '../../Common/Buttons';
import My_Foto from '../../Assets/Me.png';
import myCV from '../../Assets/Makunin_A.pdf';
import classes from './Preview.module.scss';

export const Preview = () => {
    const [skills, setSkills] = React.useState([])
    const [users, setUsers] = React.useState([])
    


    React.useEffect(() => {
        try {
            axios.get('http://127.0.0.1:8000/api/skills/?format=json').then(({ data }) => {
                setSkills(data.skills)
                setUsers(data.users)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <sectionon className={classes['header__titile']}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        Привет, меня зовут Александр Макунин
                    </h2>
                    <p className={classes.subtitle}>
                        Веб разработчик / Фронтенд-разработчик
                    </p>
                    <p className={classes.subtitle}>
                        <ul className={classes['list-skills']} type="disc">
                            { skills.map(({ skill }, index) => (
                                <li key={index}>{ skill }</li>
                            ))}
                        </ul>
                    </p>
                    <div className={classes.buttons}>
                        <Link to="/about"><Buttons name="Обо мне" /></Link>
                        <a href={ myCV } download="Makunin_A.pdf"><Buttons name="Скачать CV" /></a>
                    </div>
                </div>
                <div className={ classes.photo }>
                    <img src={ My_Foto } alt="" />
                </div>
            </div>
        </sectionon>
    );
};
