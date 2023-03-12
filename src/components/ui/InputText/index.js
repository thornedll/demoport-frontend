import classNames from "classnames";
import Icon from "../Icon";
import style from "./styles/input-text.module.scss";

const InputText = ({
  type,
  id,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  withIcon = false,
  icon,
  errors,
  onKeyUp
}) => {
  const classes = classNames({
    [style["input-text"]]: true,
    [style["input-text_error"]]: errors
  });
  return (
    <div>
      <div className={style["input-container"]}>
        <label htmlFor={id} className={style["input__placeholder"]}>
          {!value ? placeholder : null}
        </label>
        <input
          className={classes}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onKeyUp={onKeyUp}
        />
        {withIcon ? (
          <button>
            <Icon name={icon} />
          </button>
        ) : null}
      </div>
      {errors ? (
        <div className={style["input__error-wrapper"]}>{errors}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputText;
