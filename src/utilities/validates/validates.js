import _ from "lodash";
export const validateNotEmpty = value =>
  !value || value === undefined || _.isNull(value) ? "Заполните обязательное поле" : undefined;
export const validateNumber = value =>
  !value || value === undefined || _.isNull(value) || _.isNaN(Number(value))
    ? "Должно быть число"
    : undefined;
