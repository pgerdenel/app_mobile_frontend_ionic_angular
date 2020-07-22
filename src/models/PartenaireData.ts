import {LabelData} from "./LabelData";

export class PartenaireData {

  private _all_part:string[];
  private _all_col:string[];
  private _all_partObj:Array<LabelData> = new Array<LabelData>();
  private _all_colObj:Array<LabelData> = new Array<LabelData>();
  private _all_part_andcol:Array<LabelData[]> = new Array<LabelData[]>();

  constructor(all_part: string[], all_col: string[]) {
    this._all_part = all_part;
    this._all_col = all_col;
  }

  getAll_part(): string[] {
    return this._all_part;
  }
  setAll_part(value: string[]) {
    this._all_part = value;
  }
  getAll_col(): string[] {
    return this._all_col;
  }
  setAll_col(value: string[]) {
    this._all_col = value;
  }
  getAll_partObj(): Array<LabelData> {
    return this._all_partObj;
  }
  setAll_partObj(value: Array<LabelData>) {
    for(let i =0;i<value.length;i++) {
      this._all_partObj.push(new LabelData(value[i]['type'], value[i]['nom']));
    }
    this._all_partObj = value;
  }
  getAll_colObj(): Array<LabelData> {
    return this._all_colObj;
  }
  setAll_colObj(value: Array<LabelData>) {
    for(let i =0;i<value.length;i++) {
      this._all_colObj.push(new LabelData(value[i]['type'], value[i]['nom']));
    }
    this._all_colObj = value;
  }
  getAll_part_andcol(): Array<LabelData[]> {
    return this._all_part_andcol;
  }
  setAll_part_andcol(value: Array<LabelData[]>) {
    this._all_part_andcol = value;
  }
}
