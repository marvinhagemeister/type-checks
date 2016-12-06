import { assert as t } from "chai";
import {
  isBool,
  isDate,
  isEmpty,
  isFormatDate,
  isFormatDateTime,
  isFormatDateUTC,
  isNull,
  isNullOrUndef,
  isNumber,
  isNumberOrString,
  isObject,
  isString,
  isUndef,
} from "./../index";

describe("isUndef", () => {
  it("should check if value is undefined", () => {
    t.equal(isUndef(undefined), true);
    t.equal(isUndef(false), false);
    t.equal(isUndef(null), false);
    t.equal(isUndef([]), false);
    t.equal(isUndef({}), false);
    t.equal(isUndef(-1), false);
    t.equal(isUndef(0), false);
    t.equal(isUndef(1), false);
    t.equal(isUndef(999), false);
    t.equal(isUndef(""), false);
    t.equal(isUndef("a"), false);
    t.equal(isUndef(NaN), false);
  });
});

describe("isNull", () => {
  it("should check if value is null", () => {
    t.equal(isNull(undefined), false);
    t.equal(isNull(false), false);
    t.equal(isNull(null), true);
    t.equal(isNull([]), false);
    t.equal(isNull({}), false);
    t.equal(isNull(-1), false);
    t.equal(isNull(0), false);
    t.equal(isNull(1), false);
    t.equal(isNull(999), false);
    t.equal(isNull(""), false);
    t.equal(isNull("a"), false);
    t.equal(isNull(NaN), false);
  });
});

describe("isNullOrUndef", () => {
  it("should check if value is null or undefined", () => {
    t.equal(isNullOrUndef(undefined), true);
    t.equal(isNullOrUndef(false), false);
    t.equal(isNullOrUndef(null), true);
    t.equal(isNullOrUndef([]), false);
    t.equal(isNullOrUndef({}), false);
    t.equal(isNullOrUndef(-1), false);
    t.equal(isNullOrUndef(0), false);
    t.equal(isNullOrUndef(1), false);
    t.equal(isNullOrUndef(999), false);
    t.equal(isNullOrUndef(""), false);
    t.equal(isNullOrUndef("a"), false);
    t.equal(isNullOrUndef(NaN), false);
  });
});

describe("isString", () => {
  it("should check if value is a string", () => {
    t.equal(isString(undefined), false);
    t.equal(isString(false), false);
    t.equal(isString(null), false);
    t.equal(isString([]), false);
    t.equal(isString({}), false);
    t.equal(isString(-1), false);
    t.equal(isString(0), false);
    t.equal(isString(1), false);
    t.equal(isString(999), false);
    t.equal(isString(""), true);
    t.equal(isString("a"), true);
    t.equal(isString(NaN), false);
  });
});

describe("isNumber", () => {
  it("should check if value is a number", () => {
    t.equal(isNumber(undefined), false);
    t.equal(isNumber(false), false);
    t.equal(isNumber(null), false);
    t.equal(isNumber([]), false);
    t.equal(isNumber({}), false);
    t.equal(isNumber(-1), true);
    t.equal(isNumber(0), true);
    t.equal(isNumber(1), true);
    t.equal(isNumber(999), true);
    t.equal(isNumber(""), false);
    t.equal(isNumber("a"), false);
    t.equal(isNumber(NaN), false);
  });
});

describe("isNumberOrString", () => {
  it("should check if value is a string or a number", () => {
    t.equal(isNumberOrString(undefined), false);
    t.equal(isNumberOrString(false), false);
    t.equal(isNumberOrString(null), false);
    t.equal(isNumberOrString([]), false);
    t.equal(isNumberOrString({}), false);
    t.equal(isNumberOrString(-1), true);
    t.equal(isNumberOrString(0), true);
    t.equal(isNumberOrString(1), true);
    t.equal(isNumberOrString(999), true);
    t.equal(isNumberOrString(""), true);
    t.equal(isNumberOrString("a"), true);
    t.equal(isNumberOrString(NaN), false);
  });
});

describe("isBool", () => {
  it("should check if value is a boolean", () => {
    t.equal(isBool(undefined), false);
    t.equal(isBool(false), true);
    t.equal(isBool(null), false);
    t.equal(isBool([]), false);
    t.equal(isBool({}), false);
    t.equal(isBool(-1), false);
    t.equal(isBool(0), false);
    t.equal(isBool(1), false);
    t.equal(isBool(999), false);
    t.equal(isBool(""), false);
    t.equal(isBool("a"), false);
    t.equal(isBool(NaN), false);
  });
});

describe("isEmpty", () => {
  it("should check if value is empty", () => {
    t.equal(isEmpty(undefined), true);
    t.equal(isEmpty(false), false);
    t.equal(isEmpty(null), true);
    t.equal(isEmpty([]), true);
    t.equal(isEmpty({}), true);
    t.equal(isEmpty(-1), false);
    t.equal(isEmpty(0), false);
    t.equal(isEmpty(1), false);
    t.equal(isEmpty(999), false);
    t.equal(isEmpty(""), true);
    t.equal(isEmpty("a"), false);
    t.equal(isEmpty(NaN), false);
  });
});

describe("isDate", () => {
  it("should check if value is a date object", () => {
    t.equal(isDate(undefined), false);
    t.equal(isDate(false), false);
    t.equal(isDate(null), false);
    t.equal(isDate([]), false);
    t.equal(isDate({}), false);
    t.equal(isDate(-1), false);
    t.equal(isDate(0), false);
    t.equal(isDate(1), false);
    t.equal(isDate(999), false);
    t.equal(isDate(""), false);
    t.equal(isDate("a"), false);
    t.equal(isDate(NaN), false);

    t.equal(isDate(new Date()), true);
  });
});

describe("isObject", () => {
  it("should check if value is a date object", () => {
    t.equal(isObject(undefined), false);
    t.equal(isObject(false), false);
    t.equal(isObject(null), false);
    t.equal(isObject([]), true);
    t.equal(isObject({}), true);
    t.equal(isObject(-1), false);
    t.equal(isObject(0), false);
    t.equal(isObject(1), false);
    t.equal(isObject(999), false);
    t.equal(isObject(""), false);
    t.equal(isObject("a"), false);
    t.equal(isObject(NaN), false);
  });
});

describe("isFormatDate", () => {
  it("should check if value has the format 'YYYY-MM-DD'", () => {
    t.equal(isFormatDate("2016-22-32"), true);
    t.equal(isFormatDate("2016-22-3a"), false);
  });
});

describe("isFormatDateTime", () => {
  it("should check if value has the format 'YYYY-MM-DD hh:mm:ss'", () => {
    t.equal(isFormatDateTime("2016-22-32"), false);
    t.equal(isFormatDateTime("2016-22-3a"), false);
    t.equal(isFormatDateTime("2016-22-32 1"), false);
    t.equal(isFormatDateTime("2016-22-32 1:23:21"), false);
    t.equal(isFormatDateTime("2016-22-32 13:23:21"), true);
  });
});

describe("isFormatDateUTC", () => {
  it("should check if value has the format 'YYYY-MM-DDThh:mm:ssZ'", () => {
    t.equal(isFormatDateUTC("2016-22-32"), false);
    t.equal(isFormatDateUTC("2016-22-3a"), false);
    t.equal(isFormatDateUTC("2016-22-32 1"), false);
    t.equal(isFormatDateUTC("2016-22-32 1:23:21"), false);
    t.equal(isFormatDateUTC("2016-22-32 13:23:21"), false);
    t.equal(isFormatDateUTC("2016-22-32T13:23:21"), false);
    t.equal(isFormatDateUTC("2016-22-32T13:23:21Z"), true);
  });
});
