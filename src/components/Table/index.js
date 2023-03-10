import TableElement from "../TableElement";
import style from "./styles/table.module.scss";

const Table = ({
  includingArchive,
  checkedArray,
  toggleCheckedRows,
  columns,
  services
}) => {
  const servicesItems = includingArchive
    ? services.map((content) => (
        <TableElement
          id={content.id}
          key={`table-archive-${content.id}`}
          checkedArray={checkedArray}
          toggleCheckedRows={toggleCheckedRows}
          columns={columns}
          isArchive={content.isArchive}
          complexCode={content.complexCode}
          businessLine={columns[1].active ? content.businessLine : null}
          businessLineCode={columns[2].active ? content.businessLineCode : null}
          serviceLine={columns[3].active ? content.serviceLine : null}
          serviceLineCode={columns[4].active ? content.serviceLineCode : null}
          service={columns[5].active ? content.service : null}
          serviceCode={columns[6].active ? content.serviceCode : null}
          serviceElement={columns[7].active ? content.serviceElement : null}
          serviceElementCode={
            columns[8].active ? content.serviceElementCode : null
          }
          tariff={columns[9].active ? content.tariff : null}
          tariffCode={columns[10].active ? content.tariffCode : null}
          tarifficationElement={
            columns[11].active ? content.tarifficationElement : null
          }
          tarifficationUnit={
            columns[12].active ? content.tarifficationUnit : null
          }
          tariffType={columns[13].active ? content.tariffType : null}
          recalculation={columns[14].active ? content.recalculation : null}
        />
      ))
    : services.map((content) =>
        content.isArchive === false ? (
          <TableElement
            id={content.id}
            key={`table-el-${content.id}`}
            checkedArray={checkedArray}
            toggleCheckedRows={toggleCheckedRows}
            columns={columns}
            isArchive={content.isArchive}
            complexCode={columns[0].active ? content.complexCode : null}
            businessLine={columns[1].active ? content.businessLine : null}
            businessLineCode={
              columns[2].active ? content.businessLineCode : null
            }
            serviceLine={columns[3].active ? content.serviceLine : null}
            serviceLineCode={columns[4].active ? content.serviceLineCode : null}
            service={columns[5].active ? content.service : null}
            serviceCode={columns[6].active ? content.serviceCode : null}
            serviceElement={columns[7].active ? content.serviceElement : null}
            serviceElementCode={
              columns[8].active ? content.serviceElementCode : null
            }
            tariff={columns[9].active ? content.tariff : null}
            tariffCode={columns[10].active ? content.tariffCode : null}
            tarifficationElement={
              columns[11].active ? content.tarifficationElement : null
            }
            tarifficationUnit={
              columns[12].active ? content.tarifficationUnit : null
            }
            tariffType={columns[13].active ? content.tariffType : null}
            recalculation={columns[14].active ? content.recalculation : null}
          />
        ) : (
          <></>
        )
      );

  return (
    <>
      <ul className={style["table"]}>{servicesItems}</ul>
    </>
  );
};

export default Table;
