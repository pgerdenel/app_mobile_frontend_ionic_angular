import {LabelData} from "./LabelData";

export class SvcData {

  private _labels_and_data:string[];
  public _all_labelsDataObj:Array<LabelData> = new Array<LabelData>();

  constructor(labels_and_data: string[]) {
    this._labels_and_data = labels_and_data;
  }

  getLabels_and_data(): string[] {
    return this._labels_and_data;
  }
  setLabels_and_data(value: string[]) {
    console.log("keys= "+Object.keys(value));
    for(let i=0;i<value.length;i++) {
      /*console.log("value[i]['label_data']= "+JSON.stringify(value[i]['label_data']));
      console.log("value[i]['label_name']= "+JSON.stringify(value[i]['label_name']));*/
      this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
    }
    this._labels_and_data = value;
  }
  getAll_labelsDataObj(): Array<LabelData> {
    return this._all_labelsDataObj;
  }
  setAll_labelsDataObj(value: Array<LabelData>) {
    this._all_labelsDataObj = value;
  }
}
