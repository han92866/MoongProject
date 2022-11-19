import { jsonIgnore } from "json-ignore";
import { action, observable } from "mobx";
import CommonUtil from "utils/CommonUtil";

export enum DataJobTypes {
  NORMAL = "N",
  CREATE = "C",
  UPDATE = "U",
  DELETE = "D",
}

export default class BaseEntity {
  @jsonIgnore()
  private _KEY: string;

  private _META_MAP?: any;

  @observable private _JOB_TYPE?: DataJobTypes = DataJobTypes.NORMAL;

  public constructor() {
    this._KEY = CommonUtil.getUid();
  }

  public get KEY(): string {
    return this._KEY;
  }

  public get META_MAP(): any {
    return this._META_MAP;
  }

  public get JOB_TYPES(): DataJobTypes | undefined {
    return this._JOB_TYPE;
  }

  @action
  public set_JOB_TYPES(_JOB_TYPE: DataJobTypes): void {
    this._JOB_TYPE = _JOB_TYPE;
  }
}
