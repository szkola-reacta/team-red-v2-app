import LogoOne from "../../img/logo/LogoOne.png";
import LogoTwo from "../../img/logo/LogoTwo.png";

function Logo() {
  return (
    <div className="header__logo">
      <img className="header__logo-one" src={LogoOne} alt="logo" />
      <img className="header__logo-two" src={LogoTwo} alt="logo" />
    </div>
  );
}

export default Logo;
