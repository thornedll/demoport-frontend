import classNames from "classnames";
import ReactPortal from "../ReactPortal";
import { close } from "../../img/index";
import style from "./styles/modal.module.scss";
import CreateService from "./CreateService";
import ColumnsViewSettings from "./ColumnsViewSettings";

const Modal = ({
  isOpen,
  handleClose,
  type,
  columns,
  setColumns,
  services,
  setServices,
  chosenService = {}
}) => {
  const modalClasses = classNames({
    [style["modal"]]: true,
    [style["modal_right"]]: type === "createService",
    [style["modal_left"]]: type === "columnsViewSettings"
  });

  if (!isOpen) return null;

  const handleCloseOutside = (event) => {
    if (event.target.id === "modal-content") handleClose();
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        id="modal-content"
        className={modalClasses}
        onClick={handleCloseOutside}
      >
        <div className={style["modal-content"]}>
          <div className={style["modal__close-btn_wrapper"]}>
            <button onClick={handleClose} className={style["modal__close-btn"]}>
              <img src={close} alt="" />
            </button>
          </div>
          {type === "createService" ? (
            <CreateService
              handleClose={handleClose}
              services={services}
              setServices={setServices}
              chosenService={chosenService}
            />
          ) : type === "columnsViewSettings" ? (
            <ColumnsViewSettings
              rowElementsContent={columns}
              changeRowElementsContent={setColumns}
              handleClose={handleClose}
            />
          ) : null}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
