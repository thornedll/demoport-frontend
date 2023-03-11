import data from "./data.json";

export const formElementsContent = [
  {
    isSelect: false,
    label: "Составной код",
    id: "000",
    required: false,
    width: 116
  },
  {
    type: "businessLine",
    isSelect: true,
    label: "Линия бизнеса",
    id: "001",
    required: false,
    options: data["select-values"][0].businessLine,
    width: 118
  },
  {
    type: "businessLine",
    isSelect: false,
    label: "LOB",
    id: "002",
    required: false,
    width: 45
  },
  {
    type: "serviceLine",
    isSelect: true,
    label: "Линейка услуг",
    id: "003",
    required: false,
    options: data["select-values"][1].serviceLine,
    width: 134
  },
  {
    type: "serviceLine",
    isSelect: false,
    label: "SRV.LINE",
    id: "004",
    required: false,
    width: 77
  },
  {
    type: "service",
    isSelect: true,
    label: "Услуга",
    id: "005",
    required: false,
    options: data["select-values"][2].service,
    width: 134
  },
  {
    type: "service",
    isSelect: false,
    label: "SRV",
    id: "006",
    required: false,
    width: 46
  },
  {
    type: "serviceElement",
    isSelect: true,
    label: "Элемент услуги",
    id: "007",
    required: false,
    options: data["select-values"][3].serviceElement,
    width: 143
  },
  {
    type: "serviceElement",
    isSelect: false,
    label: "SRV.EL",
    id: "008",
    required: false,
    width: 64
  },
  {
    type: "tariff",
    isSelect: true,
    label: "Тариф",
    id: "009",
    required: false,
    options: data["select-values"][4].tariff,
    width: 90
  },
  {
    type: "tariff",
    isSelect: false,
    label: "Tariff",
    id: "010",
    required: false,
    width: 66
  },
  {
    type: "tarifficationElement",
    isSelect: true,
    label: "Элемент тарификации",
    id: "011",
    required: false,
    options: data["select-values"][5].tarifficationElement,
    width: 133
  },
  {
    type: "tarifficationUnit",
    isSelect: true,
    label: "Единица тарификации",
    id: "012",
    required: false,
    options: data["select-values"][6].tarifficationUnit,
    width: 133
  },
  {
    type: "tariffType",
    isSelect: true,
    label: "Тип тарифа, ежемесячно",
    id: "013",
    required: false,
    options: data["select-values"][7].tariffType,
    width: 95
  },
  {
    type: "recalculation",
    isSelect: true,
    label: "Перерасчет",
    id: "014",
    required: false,
    options: data["select-values"][8].recalculation,
    width: 95
  }
];
