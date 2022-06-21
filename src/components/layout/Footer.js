import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo-box">Logo</div>

        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <NavLink className="footer__link" to="/about">
                About
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink className="footer__link" to="/team">
                Team
              </NavLink>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>

          <div class="footer__copyright">
            <p>Copyright &copy; by SzkolaReacta.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
