import Checkbox from "../ui/Checkbox";
import style from "./styles/table-filters.module.scss";

const TableFilters = ({ isAnyChecked, toggleAllCheckedRows, columns }) => {
  const columnetersItems = columns.map((column) =>
    column.active ? (
      <li
        key={column.id}
        className={style["filters-item"]}
        style={{ width: column.width + 1 }}
      >
        <button className={style["filters-item__button"]}>
          {column.shortLabel ? column.shortLabel : column.label}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.44444 10.8891C5.44444 11.3186 5.79267 11.6668 6.22222 11.6668H7.77778C8.20733 11.6668 8.55556 11.3186 8.55556 10.8891C8.55556 10.4595 8.20733 10.1113 7.77778 10.1113H6.22222C5.79267 10.1113 5.44444 10.4595 5.44444 10.8891ZM0.777777 2.3335C0.348222 2.3335 0 2.68172 0 3.11127C0 3.54083 0.348223 3.88905 0.777778 3.88905H13.2222C13.6518 3.88905 14 3.54083 14 3.11127C14 2.68172 13.6518 2.3335 13.2222 2.3335H0.777777ZM2.33333 7.00016C2.33333 7.42972 2.68156 7.77794 3.11111 7.77794H10.8889C11.3184 7.77794 11.6667 7.42972 11.6667 7.00016C11.6667 6.57061 11.3184 6.22238 10.8889 6.22238H3.11111C2.68156 6.22238 2.33333 6.57061 2.33333 7.00016Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </li>
    ) : null
  );

  function handleChange(e) {
    toggleAllCheckedRows(e.target.value);
  }

  return (
    <div className={style["filters"]}>
      <Checkbox checked={isAnyChecked} onChange={handleChange} />
      <ul className={style["filters-list"]}>{columnetersItems}</ul>
    </div>
  );
};

export default TableFilters;
