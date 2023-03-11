import { useState } from "react";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import SettingRow from "./SettingRow";
import { formElementsContent } from "../../form-data";
import style from "./styles/modal.module.scss";

const ColumnsViewSettings = ({
  rowElementsContent,
  changeRowElementsContent,
  handleClose
}) => {
  const [rowContent, setRowContent] = useState(rowElementsContent);
  const [checkedArray, setCheckedArray] = useState(
    rowContent
      .map((el) => (el.active ? el.id : null))
      .filter((el) => el !== null)
  );

  const toggleCheckedRows = (id) => {
    let newIdsArr = [];
    if (checkedArray.includes(id)) {
      newIdsArr = checkedArray.filter((el) => el !== id);
    } else {
      newIdsArr = [...checkedArray, id];
    }
    setCheckedArray(newIdsArr);
  };

  const toggleAllCheckedRows = () => {
    const isEmpty = checkedArray.length === 0;
    isEmpty
      ? setCheckedArray(formElementsContent.map((el) => el.id))
      : setCheckedArray([]);
  };

  const handleChangeRows = (e) => {
    toggleCheckedRows(e.target.value);
  };

  const handleChangeAllRows = (e) => {
    toggleAllCheckedRows(e.target.value);
  };

  const moveRow = (selectedIndex, up) => {
    const arr = [...rowContent];
    if (
      (up && selectedIndex !== 0) ||
      (!up && selectedIndex !== arr.length - 1)
    ) {
      let tempElement = up ? arr[selectedIndex - 1] : arr[selectedIndex + 1];
      up
        ? (arr[selectedIndex - 1] = arr[selectedIndex])
        : (arr[selectedIndex + 1] = arr[selectedIndex]);
      arr[selectedIndex] = tempElement;
      setRowContent(arr);
    }
  };

  const setToDefault = () => {
    setRowContent(
      formElementsContent.map((c, index) => ({
        id: c.id,
        index: index,
        label: c.label
      }))
    );
  };

  const filteredColumns = () => {
    let tempArr = [...rowContent];
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i].active = false;
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[i].id === checkedArray[j]) {
          tempArr[i].active = true;
        }
      }
    }
    return tempArr;
  };

  const isAnyChecked = checkedArray.length > 0 ? true : false;

  return (
    <div>
      <div className={style["modal-header"]}>
        <h2 className={style["modal-header__text"]}>Отображение колонок</h2>
      </div>
      <div className={style["columns-container"]}>
        <div className={style["columns-checkbox-container"]}>
          <div className={style["columns-checkbox-wrapper"]}>
            <Checkbox
              label="Все"
              checked={isAnyChecked}
              onChange={handleChangeAllRows}
            />
          </div>
        </div>
        <div className={style["columns-list"]}>
          {rowContent.map((setting, index) => (
            <SettingRow
              key={`row-${setting.id}`}
              id={setting.id}
              index={index}
              label={setting.label}
              checkedArray={checkedArray}
              handleChangeRows={handleChangeRows}
              moveRow={moveRow}
            />
          ))}
        </div>
      </div>
      <div className={style["buttons-container"]}>
        <Button
          variant="button__transparent"
          btnName="Сбросить"
          onClick={() => setToDefault()}
        />
        <Button
          btnName="Применить"
          onClick={() => {
            changeRowElementsContent(filteredColumns());
            handleClose();
          }}
        />
      </div>
    </div>
  );
};

export default ColumnsViewSettings;
