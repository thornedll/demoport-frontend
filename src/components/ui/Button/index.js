import classNames from "classnames";
import { ICONS_IDS } from "../../../consts";
import Icon from "../Icon";
import style from "./styles/button.module.scss";

const Button = ({
  btnName = "Настроить",
  variant = "",
  withIcon = false,
  icon = "",
  type = "button",
  onClick,
  ...props
}) => {
  const classes = classNames({
    [style["button"]]: true,
    [style[variant]]: true,
    [style["button__icon"]]: withIcon
  });

  var iconName;

  switch (icon) {
    case "settings":
      iconName = ICONS_IDS.settings;
      break;
    case "trash":
      iconName = ICONS_IDS.trash;
      break;
    case "copy":
      iconName = ICONS_IDS.copy;
      break;
    case "folder":
      iconName = ICONS_IDS.folder;
      break;
    default:
      break;
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {withIcon ? <Icon name={iconName}></Icon> : <></>}
      {btnName}
    </button>
  );
};

export default Button;
