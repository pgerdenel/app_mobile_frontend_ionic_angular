import { LabelData } from "./LabelData";
var SvcData = /** @class */ (function () {
    function SvcData(labels_and_data) {
        this._all_labelsDataObj = new Array();
        this._labels_and_data = labels_and_data;
    }
    SvcData.prototype.getLabels_and_data = function () {
        return this._labels_and_data;
    };
    SvcData.prototype.setLabels_and_data = function (value) {
        console.log("keys= " + Object.keys(value));
        for (var i = 0; i < value.length; i++) {
            /*console.log("value[i]['label_data']= "+JSON.stringify(value[i]['label_data']));
            console.log("value[i]['label_name']= "+JSON.stringify(value[i]['label_name']));*/
            this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
        }
        this._labels_and_data = value;
    };
    SvcData.prototype.getAll_labelsDataObj = function () {
        return this._all_labelsDataObj;
    };
    SvcData.prototype.setAll_labelsDataObj = function (value) {
        this._all_labelsDataObj = value;
    };
    return SvcData;
}());
export { SvcData };
//# sourceMappingURL=SvcData.js.map