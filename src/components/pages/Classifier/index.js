import { useState } from "react";
import Table from "../../Table";
import Menu from "../../Menu";
import TableFilters from "../../TableFilters";
import { Modal } from "../../Modal";
import { formElementsContent } from "../../../form-data";
import data from "../../../data.json";
import { MODAL_TYPES } from "../../../consts";

const Classifier = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [includingArchive, setIncludeArchive] = useState(false);
  const [checkedArray, setCheckedArray] = useState([]);
  const [columns, setColumns] = useState(
    formElementsContent.map((c, index) => ({
      id: c.id,
      index: index,
      label: c.label,
      shortLabel: c.shortLabel,
      active: true,
      width: c.width
    }))
  );
  const dataServices = data.services;
  const [services, setServices] = useState(dataServices);
  const [chosenService, setChosenService] = useState("");

  const getServices = (text, services) => {
    return services.filter((service) => {
      const regex = new RegExp(text, "gi");
      return service.businessLine.match(regex);
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setChosenService({});
  };

  const toggleCheckedRows = (id) => {
    let newIdsArr = [];
    if (checkedArray.includes(id)) {
      newIdsArr = checkedArray.filter((el) => el !== id);
    } else {
      newIdsArr = [...checkedArray, id];
    }
    setCheckedArray(newIdsArr);
    if (checkedArray.length === 0) {
      setChosenService("");
    }
  };

  const toggleAllCheckedRows = () => {
    const isEmpty = checkedArray.length === 0;
    isEmpty
      ? setCheckedArray(
          includingArchive
            ? services.map((el) => el.id)
            : services
                .filter((el) => (el.isArchive === false ? el.id : null))
                .map((el) => el.id)
        )
      : setCheckedArray([]) && setChosenService("");
  };

  const archiveServices = () => {
    const newServicesList = services.map((service) => {
      if (checkedArray.includes(service.id)) {
        service.isArchive = true;
      }
      return service;
    });
    setServices(newServicesList);
    toggleAllCheckedRows();
  };

  const deleteServices = () => {
    const newServicesList = services.filter(
      (service) => !checkedArray.includes(service.id)
    );
    setServices(newServicesList);
    toggleAllCheckedRows();
  };

  const copyService = () => {
    const chosenServices = services.filter((service) =>
      checkedArray.includes(service.id)
    );
    if (chosenServices.length === 1) {
      setModalType(MODAL_TYPES.createService);
      setIsOpen(true);
      setChosenService(chosenServices[0]);
    }
  };

  const isAnyChecked = checkedArray.length > 0 ? true : false;

  return (
    <div>
      <Menu
        includingArchive={includingArchive}
        changeIncludingArchive={setIncludeArchive}
        countChecked={checkedArray.length}
        columns={columns}
        setColumns={setColumns}
        getServices={getServices}
        setServices={setServices}
        dataServices={dataServices}
        archiveServices={archiveServices}
        deleteServices={deleteServices}
        copyService={copyService}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
        modalType={modalType}
        setModalType={setModalType}
        services={services}
      />
      <TableFilters
        toggleAllCheckedRows={toggleAllCheckedRows}
        isAnyChecked={isAnyChecked}
        columns={columns}
      />
      <Table
        includingArchive={includingArchive}
        checkedArray={checkedArray}
        toggleCheckedRows={toggleCheckedRows}
        columns={columns}
        services={services}
      />
      <Modal
        handleClose={handleClose}
        isOpen={isOpen}
        type={modalType}
        columns={columns}
        setColumns={setColumns}
        services={services}
        setServices={setServices}
        chosenService={chosenService}
      />
    </div>
  );
};

export default Classifier;
