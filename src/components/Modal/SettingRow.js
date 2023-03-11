import Checkbox from "../ui/Checkbox";
import style from "./styles/modal.module.scss";

const SettingRow = ({
  id,
  index,
  label,
  checkedArray,
  handleChangeRows,
  moveRow
}) => {
  return (
    <div className={style["row-container"]} key={id}>
      <div className={style["row-index"]}>{index + 1}</div>
      <div className={style["row-wrapper"]}>
        <div className={style["row-checkbox"]}>
          <Checkbox
            value={id}
            label={label}
            checked={checkedArray?.includes(id)}
            onChange={handleChangeRows}
            boldlabels={true}
          />
        </div>
        <div className={style["row-buttons"]}>
          <button
            className={style["row-button"]}
            onClick={() => moveRow(index, true)}
            // up
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              transform="rotate(180)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0333 16.172L18.2821 10.808L19.6657 12.222L12.0548 20L4.44385 12.222L5.82747 10.808L11.0763 16.172V4H13.0333V16.172Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className={style["row-button"]}
            onClick={() => moveRow(index, false)}
            // down
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0333 16.172L18.2821 10.808L19.6657 12.222L12.0548 20L4.44385 12.222L5.82747 10.808L11.0763 16.172V4H13.0333V16.172Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={style["row-button"]}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_53_1542)">
                <path
                  d="M11.3887 4H21.1739V6H11.3887V4ZM6.49611 7V11H4.53907V7H1.60352L5.51759 3L9.43167 7H6.49611ZM6.49611 17H9.43167L5.51759 21L1.60352 17H4.53907V13H6.49611V17ZM11.3887 18H21.1739V20H11.3887V18ZM9.43167 11H21.1739V13H9.43167V11Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_53_1542">
                  <rect
                    width="23.4845"
                    height="24"
                    fill="white"
                    transform="translate(0.625)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingRow;
