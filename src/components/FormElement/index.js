import classNames from "classnames";
import CustomSelect from "../ui/CustomSelect";
import ReadOnlyInput from "../ui/ReadOnlyInput";
import style from "./styles/formelement.module.scss";

const FormElement = ({
  isSelect,
  label,
  id,
  required,
  options,
  ...props
}) => {
  const labelClasses = classNames({
    [style["form-element__label"]]: true,
    [style["form-element__label_required"]]: required
  });

  return (
    <div className={style["form-element"]}>
      <label className={labelClasses} htmlFor={id}>
        {label}
        {isSelect ? (
          <CustomSelect
            options={options}
            id={id}
            changeInputValue={props.setInputValue}
          />
        ) : (
          <ReadOnlyInput value={props.inputValue} id={id} readOnly />
        )}
      </label>
    </div>
  );
};

export default FormElement;
