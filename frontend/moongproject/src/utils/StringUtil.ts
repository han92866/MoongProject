import $ from "jquery";

export default class StringUtil {
  public static isEmpty(str: string | undefined | null): boolean {
    return str === undefined || str === null || str === "";
  }

  public static isNotEmpty(str: string | undefined | null): boolean {
    return !this.isEmpty(str);
  }

  public static equals(str: string, str2: string): boolean {
    if (str == null || str2 == null) {
      return false;
    }
    if (str.length !== str2.length) {
      return false;
    }
    if (str !== str2) {
      return false;
    } else {
      return true;
    }
  }

  public static defaultString(str: string | undefined | null): string {
    return str === undefined || str === null ? "" : str;
  }

  public static defaultIfEmpty(str: string | undefined | null, defaultStr: string): string {
    return str === undefined || str === null || str === "" ? defaultStr : str;
  }

  public static replaceAll(str: string, sFindText: string, sReplaceText: string, bIgnoreCase?: boolean): string {
    if (str == null || sFindText == null) {
      return str;
    }

    return String(str).replace(new RegExp(sFindText, "g" + (bIgnoreCase === true ? "i" : "")), sReplaceText);
  }

  public static leftPad(str: string, size: number, padString: string): string {
    let padStr = "";

    while (str.length + padStr.length < size) {
      padStr += padString;
    }

    return padStr + str;
  }

  public static rightPad(str: string, size: number, padString: string, truncate?: boolean): string {
    if (str == null) {
      return str;
    }

    str = String(str);

    if (truncate === true && str.length > size) {
      return str.substr(0, size);
    }

    while (str.length < size) {
      str = str + padString;
    }

    return str;
  }

  public static startsWith(str: string, sPrefix: string, bIgnoreCase?: boolean): boolean {
    if (str == null || sPrefix == null) {
      return false;
    }

    str = String(str);

    if (str.length < sPrefix.length) {
      return false;
    }

    if (bIgnoreCase === true) {
      return str.substr(0, sPrefix.length).toUpperCase() === sPrefix.toUpperCase();
    }

    return str.substr(0, sPrefix.length) === sPrefix;
  }

  public static endsWith(str: string, sSuffix: string, bIgnoreCase?: boolean): boolean {
    if (str == null || sSuffix == null) {
      return false;
    }

    str = String(str);

    if (str.length < sSuffix.length) {
      return false;
    }

    if (bIgnoreCase === true) {
      return str.substr(str.length - sSuffix.length).toUpperCase() === sSuffix.toUpperCase();
    }

    return str.substr(str.length - sSuffix.length) === sSuffix;
  }

  public static removeAllTag(str: string | undefined | null): string {
    if (str == null) {
      return "";
    }

    return str.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/gi, " ");
  }

  public static getTextFromHtml(html: string | undefined | null): string {
    if (html == null) {
      return "";
    }

    html = StringUtil.replaceAll(html, "<br />", "\n", true);
    html = StringUtil.replaceAll(html, "<br/>", "\n", true);
    html = StringUtil.replaceAll(html, "<br>", "\n", true);

    if (this.getTextFromHtml.prototype.$pre == null) {
      this.getTextFromHtml.prototype.$pre = $(`<pre>`).hide().appendTo(`body`);
    }

    const text = this.getTextFromHtml.prototype.$pre.html(html).text();

    this.getTextFromHtml.prototype.$pre.empty();

    return text;
  }

  public static formatNumber(str: string | number, digits?: number, thousandsSeparator?: string): string {
    if (str == null) {
      return str;
    }

    str = String(str);

    if (str === "") {
      return str;
    }

    if (thousandsSeparator == null) {
      thousandsSeparator = ",";
    }

    if (thousandsSeparator !== "") {
      str = this.replaceAll(str, thousandsSeparator, "");
    }

    if (digits != null) {
      str = String(Math.round(parseFloat(str) * Math.pow(10, digits)) / Math.pow(10, digits));
    }

    const minus = this.startsWith(str, "-");
    const txts = (minus === true ? str.substr(1) : str).split(".");

    const matches = this.defaultIfEmpty(txts[0], "0")
      .replace(new RegExp(thousandsSeparator, "g"), "")
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g);

    const fixed = matches == null ? "" : matches.join(thousandsSeparator).split("").reverse().join("");

    const decimal = this.rightPad(txts[1] == null ? "" : txts[1], digits == null ? 0 : digits, "0");

    return (minus === true ? "-" : "") + fixed + (decimal === "" ? "" : ".") + decimal;
  }
}
