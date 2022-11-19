import BaseEntity, { DataJobTypes } from "./BaseEntity";
import { action, set } from "mobx";

export default class MainEntity extends BaseEntity {
  public constructor(data: any) {
    super();

    this.set(data);
  }

  @action
  public set(data) {
    if (data == null) {
      return;
    }

    const data2 = { ...data };

    for (let key in this) {
      if (key.substr(0, 1) === "_") {
        delete data2[key];
      }
    }

    const thisJobType = this.JOB_TYPES;
    const dataJobType = data._JOB_TYPE;

    set(this, data2);

    if (thisJobType === DataJobTypes.NORMAL && dataJobType !== undefined) {
      this.set_JOB_TYPES(dataJobType);
    }
  }

  @action
  public set2(data, remainKeys?: string[]) {
    const data2 = { ...data };

    if (remainKeys != null) {
      remainKeys.forEach((key: string) => {
        data2[key] = this[key];
      });
    }

    for (let key in this) {
      if (key.substr(0, 1) !== "_") {
        this[key] = data2[key];
      }
    }

    this.set(data2);
  }
}
