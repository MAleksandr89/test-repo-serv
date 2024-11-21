import React from 'react';
import {
    ReactIcon,
    ReduxIcon,
    ScssIcon,
    GitIcon,
    TsIcon,
    SqlIcon,
    CssIcon,
    JiraIcon,
    ConfluenceIcon,
    FigmaIcon,
    PythonIcon,
    DjangoIcon,
    CommunicationIcon,
    ClockIcon,
    ImprovmentIcon,
    LightIcon,
    IogaIcon,
    TeamIcon,
} from '../Common/Icons';
import { SkillBlock } from './SkillBlock';
import styles from './AboutMe.module.scss';

export const AboutMe = () => {

    const mySkillsHard = [
        {
            skillName: 'React/TypeScript',
            skillIcon: [<ReactIcon />, <TsIcon />],
            detailsSkill: [
                'Router-Hoocks',
                'Router-Router',
                'Chart.js',
                'React Hook Form',
                'ES6+',
            ],
            passed: true,
        },
        {
            skillName: 'Redux',
            skillIcon: [<ReduxIcon />],
            detailsSkill: [
                'Redux',
                'Redux toolkit',
                'RTK Query',
            ],
            passed: true,
        },
        {
            skillName: 'SQL',
            skillIcon: [<SqlIcon />],
            detailsSkill: [
                'Просты запросы в БД',
                'Хранимые процедуры',
            ],
            passed: true,
        },
        {
            skillName: 'Css & Scss',
            skillIcon: [<ScssIcon />, <CssIcon />],
            detailsSkill: ['CSS','SCSS','Flex', 'Grid', 'CSS modules', 'Адаптивная верстка'],
            passed: true,
        },
        {
            skillName: 'Git',
            skillIcon: [<GitIcon />],
            detailsSkill: ['Gitlab', 'Jenkins', 'Github'],
            passed: true,
        },
        {
            skillName: 'Jira & Confluence',
            skillIcon: [<JiraIcon />, <ConfluenceIcon />],
            detailsSkill: [
                'Управление задачами',
                'Работа с эпиками и спринтами',
                'Создание документации',
            ],
            passed: true,
        },
        {
            skillName: 'Figma',
            skillIcon: [<FigmaIcon />],
            detailsSkill: [
                'Работа с компонентами',
                'Совместная работа и комментарии',
            ],
            passed: true,
        },
        {
            skillName: 'Python',
            skillIcon: [<PythonIcon />],
            passed: false,
        },
        {
            skillName: 'Django',
            skillIcon: [<DjangoIcon />],
            passed: false,
        },
    ];

    const mySkillsSoft = [
        {
            skillName: 'Тайм-менеджмент и дисциплинированность в выполнении задач.',
            skillIcon: [ <ClockIcon /> ],
            passed: true,
        },
        {
            skillName: 'Проактивный подход к работе и стремление к постоянному улучшению.',
            skillIcon: [<ImprovmentIcon />],
            passed: true,
        },
        {
            skillName: 'Креативность и гибкость в решении проблемных ситуаций.',
            skillIcon: [<LightIcon />],
            passed: true,
        },
        {
            skillName: 'Навыки эффективной коммуникации.',
            skillIcon: [<CommunicationIcon />],
            passed: true,
        },
        {
            skillName: 'Работа в команде.',
            skillIcon: [<TeamIcon />],
            passed: true,
        },
        {
            skillName: 'Стрессоустойчивость.',
            skillIcon: [<IogaIcon />],
            passed: true,
        },
    ];

    return (
        <div className={styles['about-me']}>
            <h1 className={styles['about-me__title']}>Мой путь</h1>
            <div className={styles['about-me__subtitle-wrapper']}>
                <div className={styles['about-me__time-line']}></div>
                <p className={styles['about-me__subtitle']}>
                    04/2021 - 11/2022
                </p>
                <p>
                    Я начал изучать программирование в 2021 году, начинал с простых шагов — просмотра видео на YouTube и прохождения бесплатных курсов. Со временем стал практиковаться и закреплять полученные знания на фрилансе, занимаясь версткой лендингов с использованием HTML и CSS.
                </p>
                <p className={styles['about-me__subtitle']}>
                    11/2022 - 04/2023
                </p>
                <p className={styles['about-me__job-title']}>
                    Должность: HTML-верстальщик
                </p>
                <p>
                    В 2022 году я устроился в компанию 1551 на должность HTML-верстальщика и параллельно начал изучать JavaScript и React. На работе занимался различными задачами, включая верстку постов, наполнение корпоративного портала контентом, создание отдельных блоков для компонентов, внесение изменений в существующие компоненты и исправление верстки.
                </p>
                <p className={styles['about-me__subtitle']}>04/2023</p>
                <p className={styles['about-me__job-title']}>
                    Должность: Фронтенд разработчик
                </p>
                <p>
                    В 2023 благодаря проактивному подходу к работе и стремлению развиваться, меня перевели на должность фронтенд разработчика, на которой я продолжаю работать по сегодняшний день. На этой позиции я расширил свои навыки и стал заниматься более сложными задачами, включая разработку интерфейсов, работу с React & Redux, а также улучшением пользовательского опыта.
                </p>
            </div>

            <div className={styles['about-me__skills']}>
                <span className={styles['about-me__skills-title']}>
                    Навыки:
                </span>
                <span
                    style={{
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: '26px',
                        marginTop: '15px',
                    }}
                >
                    Hard Skills
                </span>
                <div className={styles['about-me__skills-list']}>
                    { mySkillsHard.map(
                        ({ skillName, skillIcon, detailsSkill, passed }, index) => (
                            <SkillBlock
                                key={index}
                                skillName={skillName}
                                skillIcon={skillIcon}
                                detailsSkill={detailsSkill}
                                passed={passed}
                                expanding={true}
                            />
                        )
                    )}
                </div>
                <span
                        style={{
                            display: 'block',
                            fontWeight: 'bold',
                            fontSize: '26px',
                            marginTop: '80px',
                        }}
                >
                        Soft Skills
                </span>
                <div style={{ marginBottom: '50px' }} className={styles['about-me__skills-list']}>
                    { mySkillsSoft.map(
                        ({ skillName, skillIcon, passed }, index) => (
                            <SkillBlock
                                key={index}
                                skillName={skillName}
                                skillIcon={skillIcon}
                                passed={passed}
                                additionalStyle={{ opacity: '1' }}
                                expanding={false}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
