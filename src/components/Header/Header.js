import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => {
    return (
            <header className={css.header}>
                <NavLink to='/main' className={css.pageName} activeClassName={css.activeLink}>MAIN</NavLink>
                <NavLink to='/cat' className={css.pageName} activeClassName={css.activeLink}>CAT</NavLink>
                <NavLink to='/dog' className={css.pageName} activeClassName={css.activeLink}>DOG</NavLink>
                <NavLink to='/fox' className={css.pageName} activeClassName={css.activeLink}>FOX</NavLink>
            </header>
    );
}

export default Header;
