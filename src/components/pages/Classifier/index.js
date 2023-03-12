import { useState } from "react";
import Table from "../../Table";
import Menu from "../../Menu";
import TableFilters from "../../TableFilters";
import { formElementsContent } from "../../../form-data";
import data from "../../../data.json";

const Classifier = () => {
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

  const getServices = (text, services) => {
    return services.filter((service) => {
      const regex = new RegExp(text, "gi");
      return service.businessLine.match(regex);
    });
  };

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
    checkedArray ? setCheckedArray([]) : setCheckedArray([1]);
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
    </div>
  );
};

export default Classifier;
