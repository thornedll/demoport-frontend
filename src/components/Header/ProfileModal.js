import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./styles/header.module.scss";

const ProfileModal = ({ isOpen, handleCloseOutside }) => {
  const popupClasses = classNames({
    [style["profile-popup"]]: true,
    [style["profile-popup_hidden"]]: !isOpen
  });

  return (
    <div
      className={popupClasses}
      id="profile-popup"
      onClick={handleCloseOutside}
    >
      <ul className={style["profile-popup-list"]}>
        <li className={style["profile-popup__item"]}>
          <Link to="/">Профиль</Link>
        </li>
        <li className={style["profile-popup__item"]}>
          <Link to="/login">Выйти</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
