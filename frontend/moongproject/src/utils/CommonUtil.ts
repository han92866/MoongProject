import Axios from "axios";
import StringUtil from "./StringUtil";

(() => {
  Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  Axios.defaults.withCredentials = true;
})();

export default class CommonUtil {
  public static get contextPath(): string {
    return document.querySelector(`meta[name="X-Context-Path"]`)!.getAttribute("content") || "";
  }

  private static windowLocationReload: boolean;

  public static toHierarchyData(option: {
    sourceData: any[];
    itemKey: string;
    upperItemKey: string;
    childrenKey?: string;
    rootItem?: any;
    keyMapping?: { [targetKey: string]: string };
  }): any[] {
    const treeData: any[] = [];

    const addChildList = (upperValue: string | undefined | null, targetData?: any) => {
      option.sourceData.forEach((rowData) => {
        if (option.keyMapping != null) {
          for (let targetKey in option.keyMapping) {
            rowData[targetKey] = rowData[option.keyMapping[targetKey]];
          }
        }

        if (rowData[option.upperItemKey] === upperValue) {
          if (!option.childrenKey) {
            treeData.push(rowData);
            addChildList(rowData[option.itemKey]);
          } else {
            if (targetData[option.childrenKey] == null) {
              targetData[option.childrenKey] = [];
            }

            targetData[option.childrenKey].push(rowData);

            addChildList(rowData[option.itemKey], rowData);
          }
        }
      });
    };

    if (option.rootItem != null) {
      option.rootItem[option.itemKey] = null;
      option.rootItem[option.upperItemKey] = undefined;

      treeData.push(option.rootItem);

      addChildList(null, option.rootItem);
    } else {
      addChildList(null, treeData);
    }

    return treeData;
    
  }

  private static uidIndex: number;
  
  public static getUid(): string {
    if (this.uidIndex == null) {
      this.uidIndex = 0;
    }

    const uidStr = StringUtil.leftPad(String(this.uidIndex++), 5, "0");

    if (this.uidIndex > 99999) {
      this.uidIndex = 0;
    }

    return new Date().getTime() + uidStr;
  }

}
