import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import routes from "../../routes";
import data from "../../data.json";
import { logo, profile } from "../../img";
import style from "./styles/header.module.scss";

const Header = ({
  isProfilePopupVisible,
  setIsProfilePopupVisible
}) => {
  const location = useLocation();
  const userName = data.users[0].lastName + " " + data.users[0].firstName;

  const linkClasses = classNames({
    [style["header__nav-link"]]: true,
    [style["header__nav-link_special"]]: true
  });

  const profileButtonClasses = classNames({
    [style["header__profile-button"]]: true,
    [style["header__profile-button_pressed"]]: isProfilePopupVisible
  });

  const menuItems = routes.map((c) =>
    c.name !== "Вход" ? (
      location.pathname === c.path ? (
        <li className={style["header__nav-element"]} key={c.name}>
          <Link className={linkClasses} to={c.path}>
            {c.name}
          </Link>
        </li>
      ) : (
        <li className={style["header__nav-element"]} key={c.name}>
          <Link className={linkClasses.split(" ").shift()} to={c.path}>
            {c.name}
          </Link>
        </li>
      )
    ) : null
  );

  return (
    <header className={style["header"]}>
      <div className={style["header__menu"]}>
        <img src={logo} alt="logo" className={style["header__logo"]} />
        <nav className={style["header__nav"]}>
          <ul className={style["header__nav-list"]}>{menuItems}</ul>
        </nav>
      </div>
      <div className={style["header__profile"]}>
        <img src={profile} alt="default profile pic" />
        <button
          className={profileButtonClasses}
          onClick={() =>
            isProfilePopupVisible
              ? setIsProfilePopupVisible(false)
              : setIsProfilePopupVisible(true)
          }
        >
          {userName}
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.41421L1.41421 0L4.35335 2.88899L2.92194 4.3204L0 1.41421Z"
              fill="currentColor"
            />
            <path
              d="M7.24219 0.000151038L8.6564 1.41436L4.33615 5.73462L2.92194 4.3204L7.24219 0.000151038Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <ProfileModal
          isOpen={isProfilePopupVisible}
        />
      </div>
    </header>
  );
};

export default Header;
