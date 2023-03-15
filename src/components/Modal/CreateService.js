import { useState, useEffect } from "react";
import { Form, Formik, useFormik } from "formik";
import FormElement from "../FormElement";
import Button from "../ui/Button";
import { formElementsContent } from "../../form-data";
import style from "./styles/modal.module.scss";
import uuid from "react-uuid";

const CreateService = ({
  handleClose,
  services,
  setServices,
  chosenService
}) => {
  const createNewService = () => {
    let newServices = [...services];
    newServices.push({
      id: uuid(),
      complexCode: complexCode,
      businessLine: formElementsContent[1].options
        .map((option) => (option.value === inputValueLOB ? option.label : null))
        .toString()
        .replace(/,/g, ""),
      businessLineCode: inputValueLOB,
      serviceLine: formElementsContent[3].options
        .map((option) =>
          option.value === inputValueSRVLINE ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      serviceLineCode: inputValueSRVLINE,
      service: formElementsContent[5].options
        .map((option) => (option.value === inputValueSRV ? option.label : null))
        .toString()
        .replace(/,/g, ""),
      serviceCode: inputValueSRV,
      serviceElement: formElementsContent[7].options
        .map((option) =>
          option.value === inputValueSRVEL ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      serviceElementCode: inputValueSRVEL,
      tariff: formElementsContent[9].options
        .map((option) =>
          option.value === inputValueTARIFF ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      tariffCode: inputValueTARIFF,
      tarifficationElement: formElementsContent[11].options
        .map((option) =>
          option.value === inputValueTARIFFELEM ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      tarifficationUnit: formElementsContent[12].options
        .map((option) =>
          option.value === inputValueTARIFFUNIT ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      tariffType: formElementsContent[13].options
        .map((option) =>
          option.value === inputValueTARIFFTYPE ? option.label : null
        )
        .toString()
        .replace(/,/g, ""),
      recalculation: inputValueRECALC === 0 ? false : true,
      isArchive: false
    });
    setServices(newServices);
  };

  const formik = useFormik({
    initialValues: {
      complexCode: "",
      businessLine: "",
      businessLineCode: 0,
      serviceLine: "",
      serviceLineCode: 0,
      tariff: "",
      tariffCode: 0
    },
    validationSchema: null,
    onSubmit: () => {
      createNewService();
      handleClose();
    }
  });

  const [inputValueLOB, setInputValueLOB] = useState(0);
  const [inputValueSRVLINE, setInputValueSRVLINE] = useState(0);
  const [inputValueSRV, setInputValueSRV] = useState(0);
  const [inputValueSRVEL, setInputValueSRVEL] = useState(0);
  const [inputValueTARIFF, setInputValueTARIFF] = useState(0);
  const [inputValueTARIFFELEM, setInputValueTARIFFELEM] = useState(0);
  const [inputValueTARIFFUNIT, setInputValueTARIFFUNIT] = useState(0);
  const [inputValueTARIFFTYPE, setInputValueTARIFFTYPE] = useState(0);
  const [inputValueRECALC, setInputValueRECALC] = useState(0);
  const [complexCode, setComplexCode] = useState("0.0.0.0.0");

  useEffect(() => {
    const businessLine = inputValueLOB;
    const serviceLine = inputValueSRVLINE;
    const service = inputValueSRV;
    const serviceElement = inputValueSRVEL;
    const tariff = inputValueTARIFF;
    const code = `${businessLine}.${serviceLine}.${service}.${serviceElement}.${tariff}`;
    setComplexCode(code);
  }, [
    inputValueLOB,
    inputValueSRV,
    inputValueSRVEL,
    inputValueSRVLINE,
    inputValueTARIFF
  ]);

  const formElements =
    chosenService !== {}
      ? formElementsContent.map((c) =>
          c.isSelect ? (
            <FormElement
              key={c.id}
              isSelect={c.isSelect}
              label={c.label}
              id={c.id}
              required={c.required}
              options={c.options}
              setInputValue={
                c.id === "001"
                  ? setInputValueLOB
                  : c.id === "003"
                  ? setInputValueSRVLINE
                  : c.id === "005"
                  ? setInputValueSRV
                  : c.id === "007"
                  ? setInputValueSRVEL
                  : c.id === "009"
                  ? setInputValueTARIFF
                  : c.id === "011"
                  ? setInputValueTARIFFELEM
                  : c.id === "012"
                  ? setInputValueTARIFFUNIT
                  : c.id === "013"
                  ? setInputValueTARIFFTYPE
                  : c.id === "014"
                  ? setInputValueRECALC
                  : null
              }
            />
          ) : (
            <FormElement
              key={c.id}
              isSelect={c.isSelect}
              label={c.label}
              id={c.id}
              required={c.required}
              inputValue={
                c.id === "000"
                  ? complexCode
                  : c.id === "002"
                  ? inputValueLOB
                  : c.id === "004"
                  ? inputValueSRVLINE
                  : c.id === "006"
                  ? inputValueSRV
                  : c.id === "008"
                  ? inputValueSRVEL
                  : c.id === "010"
                  ? inputValueTARIFF
                  : null
              }
            />
          )
        )
      : formElementsContent.map((c) =>
          c.isSelect ? (
            <FormElement
              key={c.id}
              isSelect={c.isSelect}
              label={c.label}
              id={c.id}
              required={c.required}
              options={c.options}
              setInputValue={
                c.id === "001"
                  ? setInputValueLOB
                  : c.id === "003"
                  ? setInputValueSRVLINE
                  : c.id === "005"
                  ? setInputValueSRV
                  : c.id === "007"
                  ? setInputValueSRVEL
                  : c.id === "009"
                  ? setInputValueTARIFF
                  : c.id === "011"
                  ? setInputValueTARIFFELEM
                  : c.id === "012"
                  ? setInputValueTARIFFUNIT
                  : c.id === "013"
                  ? setInputValueTARIFFTYPE
                  : c.id === "014"
                  ? setInputValueRECALC
                  : null
              }
            />
          ) : (
            <FormElement
              key={c.id}
              isSelect={c.isSelect}
              label={c.label}
              id={c.id}
              required={c.required}
              inputValue={
                c.id === "000"
                  ? complexCode
                  : c.id === "002"
                  ? inputValueLOB
                  : c.id === "004"
                  ? inputValueSRVLINE
                  : c.id === "006"
                  ? inputValueSRV
                  : c.id === "008"
                  ? inputValueSRVEL
                  : c.id === "010"
                  ? inputValueTARIFF
                  : null
              }
            />
          )
        );

  return (
    <div>
      <div className={style["modal-header"]}>
        <h2 className={style["modal-header__text"]}>
          {!chosenService ? "Добавить услугу" : "Редактировать услугу"}
        </h2>
      </div>
      <Formik validateOnChange={false}>
        <Form className={style["modal-form"]} onSubmit={formik.handleSubmit}>
          <div className={style["modal-form-input-container"]}>
            {formElements}
          </div>
          <div className={style["modal-form-button-container"]}>
            <Button type="submit" btnName="Сохранить" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateService;
