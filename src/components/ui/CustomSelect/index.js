import Select from "react-select";
import classNames from "classnames";
import style from "./styles/select.module.scss";

const baseCustomStyles = (error = false) => {
  return {
    control: (base, { isDisabled }) => {
      return {
        ...base,
        minHeight: "100%",
        maxHeight: "100%",
        border: error
          ? "2px solid var(--red)"
          : isDisabled
          ? "none"
          : "2px solid var(--gray-25)",
        boxShadow: "none",
        borderRadius: "6px",
        opacity: isDisabled ? "0.5" : "1",
        backgroundColor: isDisabled ? "#f8f9fa" : "var(--white)",
        "&:hover": {
          borderColor: error ? "var(--red)" : "var(--gray-50)"
        },
        "&:focus": {
          borderColor: error ? "var(--red)" : "var(--gray-50)"
        }
      };
    },
    input: (base) => ({
      ...base,
      position: "absolute",
      height: "calc(100% - 4px)",
      top: "2px"
    }),
    indicatorSeparator: () => ({
      display: "none"
    }),
    valueContainer: (base) => ({
      ...base,
      minHeight: "36px",
      padding: "0px",
      paddingLeft: "12px"
    }),
    singleValue: (base) => ({
      ...base
    }),
    menu: (base) => ({
      ...base
    }),
    option: (base, { isSelected }) => ({
      ...base,
      color: "#002C44",
      backgroundColor: isSelected ? "#EDF8F8" : "white",
      "&:hover": {
        color: isSelected ? "#002C44" : "#009BA4"
      },
      "&:active": {
        backgroundColor: "#EDF8F8"
      },
      "&:focus": {
        backgroundColor: "#EDF8F8"
      }
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "rgba(0, 155, 164, 0.07)"
    }),
    multiValueLabel: (base) => ({
      ...base,
      padding: "2px",
      whiteSpace: "break-spaces"
    }),
    multiValueRemove: (base) => ({
      ...base,
      ":hover": {
        backgroundColor: "rgba(0, 155, 164, 0.7)",
        color: "white"
      }
    })
  };
};

const DropdownIndicator = () => {
  return (
    <div style={{ marginRight: "12px", height: "22px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path d="M0 0H10L5.16129 6L0 0Z" fill="#002C44" />
      </svg>
    </div>
  );
};

const CustomSelect = ({
  id,
  options = [],
  value = null,
  err = false,
  isMulti = false,
  changeInputValue,
  ...props
}) => {
  const classes = classNames({
    [style.select]: true,
    [style["select-multi"]]: isMulti
  });

  const handleChange = (e) => {
    changeInputValue(e.value);
  };

  return (
    <>
      <Select
        id={id}
        isMulti={isMulti}
        className={classes}
        styles={baseCustomStyles(err)}
        placeholder=""
        components={{ DropdownIndicator }}
        options={options}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default CustomSelect;
