export class LabelData {

  private _label:string;
  private _data :string;

  constructor(label: string, data:string) {
    this._label = label;
    this._data = data;
  }

  getLabel(): string {
    return this._label;
  }
  setLabel(value: string) {
    this._label = value;
  }
  getData(): string {
    return this._data;
  }
  setData(value: string) {
    this._data = value;
  }

}
