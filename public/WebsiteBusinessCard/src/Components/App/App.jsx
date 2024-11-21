import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/';
import { Footer } from '../Footer';
import { Main } from '../Main';
import { AboutMe } from '../AboutMe';
import { MyWorkBlock } from '../MyWorkBlock/';
import { ContactPage } from '../ContactPage';
import styles from './app.module.scss';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <Routes>
                    <Route exact path="/" element={ <Main />} />
                    <Route exact path="/about" element={ <AboutMe />} />
                    <Route exact path="/my-works" element={ <MyWorkBlock />} />
                    <Route exact path="/contacts" element={ <ContactPage />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </div>
            <Footer />
        </div>
    );
};
