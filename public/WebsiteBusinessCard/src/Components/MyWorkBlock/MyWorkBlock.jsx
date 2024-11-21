import React from 'react';
import mixitup from 'mixitup';
import { ProjectCard } from './ProjectCard';
import styles from './MyWorkBlock.module.scss';
import CloudBudget from '../Assets/CloudBudget.png';
import CalcImg from '../Assets/Calc.png';
import Weather from '../Assets/Weather.png';
import Nique from '../Assets/nique.png';
import Pet from '../Assets/pet.png';

export const MyWorkBlock = () => {
    const [activeButton, setActiveButton] = React.useState("btn-all");

    React.useEffect(() => {
        const mixBlock = document.querySelector('#mix-card');
        mixBlock && mixitup(mixBlock, {
            animation: {
                duration: 700,
            },
        });
    }, []);

    const handleCurrentType = (type) => {
        setActiveButton(type);
    }


    const myWorks = [
        {
            titleName: 'Проект “Пицца”',
            subtitleName: 'Магазин пиццы',
            imgWork: 'https://cdn.freelance.ru/img/portfolio/pics/00/44/3B/4471665.jpg?mt=dd5233f3',
            linkWork: 'https://maleksandr89.github.io/My-works/pizza/index.html',
            typeWork: 'js',
        },
        {
            titleName: 'Проект “Квиз”',
            subtitleName: 'Проект “Квиз” с применением JS',
            imgWork: 'https://maleksandr89.github.io/My-works/html-portfolio/img/portfolioimg/kviz.png',
            linkWork: 'https://maleksandr89.github.io/My-works/kviz/index.html',
            typeWork: 'js',
        },
        {
            titleName: 'Сайт приложения “Юнит”',
            subtitleName: 'Верстка лендинга',
            imgWork: 'https://maleksandr89.github.io/My-works/html-portfolio/img/HEADER.jpg',
            linkWork: 'https://maleksandr89.github.io/My-works/Unit/index.html',
            typeWork: 'html',
        },
        {
            titleName: 'Проект “Калькулятор v.1”',
            // subtitleName: 'Верстка многостраничного сайта',
            imgWork: 'https://maleksandr89.github.io/My-works/html-portfolio/img/portfolioimg/calc.png',
            linkWork: 'https://maleksandr89.github.io/My-works/calc/index.html',
            typeWork: 'js',
        },
        {
            titleName: 'Проект “Калькулятор v.2”',
            // subtitleName: 'Верстка многостраничного сайта',
            imgWork: CalcImg,
            linkWork: 'https://maleksandr89.github.io/My-works/Calculator/index.html',
            typeWork: 'js',
        },
        {
            titleName: 'Прогноз погоды',
            // subtitleName: '',
            imgWork: Weather,
            linkWork: 'https://maleksandr89.github.io/My-works/Weather/index.html',
            typeWork: 'js',
        },
        {
            titleName: 'Проект “CloudBudget”',
            subtitleName: 'Верстка лендинга',
            imgWork: CloudBudget,
            linkWork: 'https://maleksandr89.github.io/My-works/Cloud/index.html',
            typeWork: 'html',
        },
        {
            titleName: 'Верстка “Форест тревел”',
            subtitleName: 'Верстка многостраничного сайта',
            imgWork: 'https://maleksandr89.github.io/My-works/html-portfolio/img/HEADER1.jpg',
            linkWork: 'https://maleksandr89.github.io/My-works/Forest/index.html',
            typeWork: 'html',
        },
        {
            titleName: 'Верстка “Nique”',
            subtitleName: 'Верстка лендинга',
            imgWork: Nique,
            linkWork: 'https://maleksandr89.github.io/My-works/nique/index.html',
            typeWork: 'html',
        },
        {
            titleName: 'Верстка “Pet-shop”',
            subtitleName: 'Верстка лендинга',
            imgWork: Pet,
            linkWork: 'https://maleksandr89.github.io/My-works/pet-spa/index.html',
            typeWork: 'html',
        },
    ]

    const butttonsType = [
        {
            buttonName: 'Все работы',
            typeWork: 'all',
        },
        {
            buttonName: 'HTML & CSS',
            typeWork: '.html',
        },
        {
            buttonName: 'Java Script/React',
            typeWork: '.js',
        }
    ]


    return (
        <div id='mix-block' className={ styles["mix-block"] }>
            <div className={ styles["mix-block__btn"] }>
                { butttonsType.map(({ buttonName, typeWork }, index) => {
                    return (
                        <button
                            key={ index }
                            type="button"
                            className={ activeButton === `btn-${typeWork}` ? styles.active : '' }
                            data-filter={ typeWork }
                            onClick={() => handleCurrentType(`btn-${typeWork}`) }
                        >
                            { buttonName }
                        </button>
                    )
                })}
            </div>
            <div className={ styles["section__portfolio-cards"] } id="mix-card">
                { myWorks.map(({ titleName, subtitleName, imgWork, linkWork, typeWork }, index) => {
                    return (
                        <ProjectCard
                            key={ index }
                            titleName={ titleName }
                            subtitleName={ subtitleName }
                            imgWork={ imgWork }
                            linkWork={ linkWork }
                            typeWork={ typeWork }
                        />
                    )
                })}
            </div>
        </div>
    );
};
