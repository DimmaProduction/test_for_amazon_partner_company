import css from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={css.footer}>
            <p className={css.companyName}> AMAZON PARTNER COMPANY &nbsp; &nbsp; & &nbsp; &nbsp; DIMMA MELNYCHUK </p>
            <div className={css.blockFooter}></div>
        </footer>
    );
}

export default Footer;