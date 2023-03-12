import classNames from "classnames";
import Checkbox from "../ui/Checkbox";
import style from "./styles/table-element.module.scss";

const TableElement = ({
  id,
  checkedArray = [],
  toggleCheckedRows,
  columns,
  ...props
}) => {
  const rowClasses = classNames({
    [style["row-element"]]: true,
    [style["row-element__archive"]]: props.isArchive
  });

  const handleChange = (e) => {
    toggleCheckedRows(e.target.value);
  };

  let tempTableData = Object.entries(props);
  tempTableData.shift();
  const tableData = tempTableData;

  const tableRowData = columns.map((column, index) =>
    column.active ? (
      <div
        style={{
          width: column.width + 20,
          justifyContent:
            typeof tableData[index][1] === "number" ? "center" : "none"
        }}
        key={`row-data-${tableData[index][0]}`}
      >
        <span>
          {typeof tableData[index][1] !== "boolean"
            ? tableData[index][1]
            : tableData[index][1] === true
            ? "да"
            : ""}
        </span>
      </div>
    ) : null
  );

  return (
    <li className={rowClasses}>
      <Checkbox
        value={id}
        checked={checkedArray?.includes(id)}
        onChange={handleChange}
      />
      <button className={style["edit-button"]}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_38_92)">
            <path
              d="M3.24006 15.1561C3.42006 15.1561 3.45606 15.1381 3.61806 15.1021L6.85806 14.4541C7.20006 14.3641 7.54206 14.2021 7.81206 13.9321L15.6601 6.08411C16.8661 4.87811 16.8661 2.80811 15.6601 1.60211L14.9941 0.900105C13.7881 -0.305895 11.7001 -0.305895 10.4941 0.900105L2.64606 8.76611C2.39406 9.01811 2.21406 9.37811 2.12406 9.72011L1.44006 12.9961C1.35006 13.6081 1.53006 14.2021 1.96206 14.6341C2.30406 14.9761 2.80806 15.1561 3.24006 15.1561ZM3.85206 10.0621L11.7001 2.19611C12.2221 1.67411 13.1761 1.67411 13.6801 2.19611L14.3641 2.88011C14.9761 3.49211 14.9761 4.35611 14.3641 4.95011L6.53406 12.8161L3.20406 13.3741L3.85206 10.0621Z"
              fill="currentColor"
            />
            <path
              d="M15.5879 16.272H2.30394C1.78194 16.272 1.43994 16.614 1.43994 17.136C1.43994 17.658 1.87194 18 2.30394 18H15.5159C16.0379 18 16.4699 17.658 16.4699 17.136C16.4519 16.614 16.0199 16.272 15.5879 16.272Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_38_92">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {tableRowData}
    </li>
  );
};

export default TableElement;
