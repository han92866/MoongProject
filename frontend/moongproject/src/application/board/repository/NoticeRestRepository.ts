import { Axios } from "axios";
import { trackPromise } from "react-promise-tracker";

/**
 * 게시판 RestRepository
 */
export default class NoticeRestRepository {
  private path;

  public constructor() {
    this.path = `/board/Notice/`;
  }

  /**
   * 목록 조회
   *
   */
  public async getList(): Promise<any> {
    return await trackPromise(
      new Axios()
        .get(this.path + "list")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    );
  }
}
