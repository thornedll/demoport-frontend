import { useFormik } from "formik";
import classNames from "classnames";
import { Modal } from "../Modal";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import InputText from "../ui/InputText";
import style from "./styles/menu.module.scss";
import { MODAL_TYPES } from "../../consts";

const Menu = ({
  includingArchive,
  changeIncludingArchive,
  countChecked,
  columns,
  setColumns,
  getServices,
  setServices,
  dataServices,
  archiveServices,
  deleteServices,
  copyService,
  isOpen,
  setIsOpen,
  handleClose,
  modalType,
  setModalType,
  services
}) => {
  const isRowManagementHidden = !Boolean(countChecked);

  const displayServices = (value) => {
    const srv = getServices(value, dataServices);
    setServices(srv);
  };

  function handleChange(e) {
    changeIncludingArchive(e.target.checked);
  }

  const formik = useFormik({
    initialValues: {
      search: ""
    },
    validationSchema: "",
    onSubmit: () => {}
  });

  const rowManagementClasses = classNames({
    [style["menu__middle"]]: true,
    [style["menu__middle_hidden"]]: isRowManagementHidden
  });

  return (
    <div className={style["menu"]}>
      <div className={style["menu-wrapper"]}>
        <div className={style["menu__left"]}>
          <InputText
            type="text"
            id="search"
            name="search"
            placeholder="Поиск..."
            value={formik.values.search}
            onChange={formik.handleChange}
            onKeyUp={() => displayServices(formik.values.search)}
            onBlur={formik.onBlur}
            withIcon={true}
            icon="search"
          />
          <Button
            btnName="Настроить"
            variant="button__transparent"
            withIcon={true}
            icon="settings"
            onClick={() => {
              setModalType(MODAL_TYPES.columnsViewSettings);
              setIsOpen(true);
            }}
          />
          <button className={style["download-button"]}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0813 5.02682C13.8158 4.36578 14.769 4 15.7572 4H19.5185H29C31.2091 4 33 5.79086 33 8V32C33 34.2091 31.2091 36 29 36H11C8.79086 36 7 34.2091 7 32V23.2V12.2814C7 11.1475 7.48129 10.0668 8.32414 9.30827L13.0813 5.02682Z"
                fill="currentColor"
              />
              <path
                d="M13.5179 24.7914L15.0447 22.107H16.9743L14.6029 25.9679L17.0358 29.893H15.0839L13.5179 27.1658L11.9519 29.893H10L12.4329 25.9679L10.0615 22.107H11.9911L13.5179 24.7914Z"
                fill="white"
              />
              <path
                d="M19.5638 28.6043H23.1264V29.893H17.8859V22.107H19.5638V28.6043Z"
                fill="white"
              />
              <path
                d="M28.3166 27.8503C28.3166 27.5472 28.2047 27.3155 27.981 27.1551C27.7573 26.9911 27.3546 26.82 26.7729 26.6417C26.1913 26.4599 25.7308 26.2816 25.3915 26.107C24.4668 25.6292 24.0045 24.9857 24.0045 24.1765C24.0045 23.7558 24.1275 23.3815 24.3736 23.0535C24.6234 22.7219 24.9795 22.4635 25.4418 22.2781C25.9079 22.0927 26.4299 22 27.0078 22C27.5895 22 28.1078 22.1016 28.5626 22.3048C29.0175 22.5045 29.3699 22.7879 29.6197 23.1551C29.8732 23.5223 30 23.9394 30 24.4064H28.3221C28.3221 24.0499 28.2047 23.7736 27.9698 23.5775C27.7349 23.3779 27.4049 23.2781 26.9799 23.2781C26.5697 23.2781 26.2509 23.3619 26.0235 23.5294C25.796 23.6934 25.6823 23.9109 25.6823 24.1818C25.6823 24.4349 25.8147 24.6471 26.0794 24.8182C26.3479 24.9893 26.7412 25.1497 27.2595 25.2995C28.214 25.574 28.9094 25.9144 29.3456 26.3209C29.7819 26.7273 30 27.2335 30 27.8396C30 28.5134 29.7334 29.0428 29.2002 29.4278C28.667 29.8093 27.9493 30 27.047 30C26.4206 30 25.8501 29.8913 25.3356 29.6738C24.821 29.4528 24.4277 29.1515 24.1555 28.7701C23.887 28.3886 23.7528 27.9465 23.7528 27.4439H25.4362C25.4362 28.303 25.9732 28.7326 27.047 28.7326C27.4459 28.7326 27.7573 28.656 27.981 28.5027C28.2047 28.3458 28.3166 28.1283 28.3166 27.8503Z"
                fill="white"
              />
              <rect
                x="19.1445"
                y="10"
                width="1.74841"
                height="8.69565"
                rx="0.874207"
                fill="white"
              />
              <rect
                width="1.74378"
                height="4.36884"
                rx="0.871889"
                transform="matrix(0.708987 -0.705222 0.708987 0.705222 16.522 16.4473)"
                fill="white"
              />
              <rect
                width="1.74378"
                height="4.90175"
                rx="0.871889"
                transform="matrix(-0.708987 -0.705222 -0.708987 0.705222 23.4785 16.4473)"
                fill="white"
              />
            </svg>
          </button>
          <Checkbox
            label="Архивные"
            checked={includingArchive}
            onChange={handleChange}
          />
        </div>
        <div className={rowManagementClasses}>
          <div className={style["checkbox-counter"]}>
            Выбрано: {countChecked}
          </div>
          <Button
            btnName="Копировать"
            variant="button__copy"
            withIcon={true}
            icon="copy"
            onClick={() => copyService()}
          />
          <Button
            btnName="В архив"
            variant="button__transparent"
            withIcon={true}
            icon="folder"
            onClick={() => archiveServices()}
          />
          <Button
            btnName="Удалить"
            variant="button__delete"
            withIcon={true}
            icon="trash"
            onClick={() => deleteServices()}
          />
        </div>
      </div>
      <Button
        btnName="+ Добавить услугу"
        variant="button__add"
        onClick={() => {
          setModalType(MODAL_TYPES.createService);
          setIsOpen(true);
        }}
      />
      <Modal
        handleClose={handleClose}
        isOpen={isOpen}
        type={modalType}
        columns={columns}
        setColumns={setColumns}
        services={services}
        setServices={setServices}
      />
    </div>
  );
};

export default Menu;
