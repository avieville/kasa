import logo from '../../assets/logo-footer.png';

export default function Footer(){
    return(
        <footer className="footer">
        <img src={logo} alt="logo de kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}