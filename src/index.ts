export const isUndef = (val: any) => typeof val === "undefined";
export const isNull = (val: any) => val === null;
export const isNullOrUndef = (val: any) => isNull(val) || isUndef(val);
export const isString = (val: any) => typeof val === "string" || val instanceof String;
export const isNumber = (val: any) => typeof val === "number" && !isNaN(val);
export const isBool = (val: any) => typeof val === "boolean";
export const isFunction = (val: any) => typeof val === "function";
export const isDate = (val: any) => Object.prototype.toString.call(val) === "[object Date]";
export const isFormatDate = (val: any) => /^\d{4}-\d{2}-\d{2}$/g.test(val);
export const isFormatDateTime = (val: any) => /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/g.test(val);
export const isFormatDateUTC = (val: any) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/g.test(val);
export const isObject = (value: any) => value !== null && typeof value === "object";
export const isEmpty = (val: any) => {
  if (isNullOrUndef(val)) {
    return true;
  }

  return (Object.keys(val).length === 0 && val.constructor === Object)
    || (Array.isArray(val) && val.length === 0)
    || (isString(val) && val.length === 0);
};
