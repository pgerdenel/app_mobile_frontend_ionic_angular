import { LabelData } from "./LabelData";
import { url_base_https_aws } from "../constant/constant";
var PrezData = /** @class */ (function () {
    function PrezData(array_labels_and_data, array_urls_img) {
        this._all_labelsDataObj = new Array();
        this._labels_and_data = array_labels_and_data;
        this._urls_img = array_urls_img;
    }
    PrezData.prototype.getLabels_and_data = function () {
        return this._labels_and_data;
    };
    PrezData.prototype.setLabels_and_data = function (value) {
        for (var i = 0; i < value.length; i++) {
            //console.log("value[i]= "+JSON.stringify(value[i]['label_name']));
            //console.log("value[i]= "+JSON.stringify(value[i]['label_data']));
            console.log("value[place_hierarchie]= " + JSON.stringify(value[i]['place_hierarchie']));
            /*if(i == value[i]['place_hierarchie']) {
              this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
            }
            else {
              value.push(value[i]);
            }*/
            this._all_labelsDataObj.push(new LabelData(value[i]['label_name'], value[i]['label_data']));
        }
        this._labels_and_data = value;
    };
    PrezData.prototype.getUrls_img = function () {
        return this._urls_img;
    };
    PrezData.prototype.setUrls_img = function (value) {
        this._urls_img = value;
        console.log("image setté= " + value[0]);
        this.setUrl_img(url_base_https_aws + "/" + value[0]);
        console.log("image setté get = " + this.getUrl_img());
    };
    PrezData.prototype.getAll_labelsDataObj = function () {
        return this._all_labelsDataObj;
    };
    PrezData.prototype.setAll_labelsDataObj = function (value) {
        this._all_labelsDataObj = value;
    };
    PrezData.prototype.getUrl_img = function () {
        return this.urlimg;
    };
    PrezData.prototype.setUrl_img = function (value) {
        this.urlimg = value;
    };
    return PrezData;
}());
export { PrezData };
//# sourceMappingURL=PrezData.js.map