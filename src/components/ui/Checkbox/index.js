import classNames from "classnames";
import style from "./styles/checkbox.module.scss";

const Checkbox = ({
  value = "",
  label,
  checked = false,
  onChange = () => {},
  boldlabels = false,
  ...props
}) => {
  const spanClasses = classNames({
    [style["span"]]: true,
    [style["span_bold"]]: boldlabels
  });

  return (
    <div className={style["checkbox-wrapper"]}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={style["checkbox"]}
          value={value}
          {...props}
        />
        <span className={spanClasses}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
