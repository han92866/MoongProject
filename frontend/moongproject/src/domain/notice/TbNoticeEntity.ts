import MainEntity from "../MainEntity";
import { action, observable } from "mobx";

/**
 * 게시판 - 공지사항 Entity
 */
export default abstract class TbNoticeEntity extends MainEntity {
  @observable protected noticeno: number;
  @observable protected title: string;
  @observable protected code: number;
  @observable protected writer: string;
  @observable protected content: string;
  @observable protected hit: number;
  @observable protected writedate: Date;

  public getNoticeno(): number {
    return this.noticeno;
  }

  @action
  public setNoticeno(noticeno: number): void {
    this.noticeno = noticeno;
  }

  public getTitle(): string {
    return this.title;
  }

  @action
  public setTitle(title: string): void {
      this.title = title;
  }

  public getCode(): number {
    return this.code;
  }

  @action
  public setCode(code: number): void {
      this.code = code;
  }

  public getWriter(): string {
    return this.writer;
  }

  @action
  public setWriter(writer: string): void {
      this.writer = writer;
  }

  public getContent(): string {
    return this.content;
  }

  @action
  public setContent(content: string): void {
      this.content = content;
  }

  public getHit(): number {
    return this.hit;
  }

  @action
  public setHit(hit: number): void {
      this.hit = hit;
  }

  public getWritedate(): Date {
    return this.writedate;
  }

  @action
  public setWritedate(writedate: Date): void {
      this.writedate = writedate;
  }
  
}
