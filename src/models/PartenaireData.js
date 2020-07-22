import { LabelData } from "./LabelData";
var PartenaireData = /** @class */ (function () {
    function PartenaireData(all_part, all_col) {
        this._all_partObj = new Array();
        this._all_colObj = new Array();
        this._all_part_andcol = new Array();
        this._all_part = all_part;
        this._all_col = all_col;
    }
    PartenaireData.prototype.getAll_part = function () {
        return this._all_part;
    };
    PartenaireData.prototype.setAll_part = function (value) {
        this._all_part = value;
    };
    PartenaireData.prototype.getAll_col = function () {
        return this._all_col;
    };
    PartenaireData.prototype.setAll_col = function (value) {
        this._all_col = value;
    };
    PartenaireData.prototype.getAll_partObj = function () {
        return this._all_partObj;
    };
    PartenaireData.prototype.setAll_partObj = function (value) {
        for (var i = 0; i < value.length; i++) {
            this._all_partObj.push(new LabelData(value[i]['type'], value[i]['nom']));
        }
        this._all_partObj = value;
    };
    PartenaireData.prototype.getAll_colObj = function () {
        return this._all_colObj;
    };
    PartenaireData.prototype.setAll_colObj = function (value) {
        for (var i = 0; i < value.length; i++) {
            this._all_colObj.push(new LabelData(value[i]['type'], value[i]['nom']));
        }
        this._all_colObj = value;
    };
    PartenaireData.prototype.getAll_part_andcol = function () {
        return this._all_part_andcol;
    };
    PartenaireData.prototype.setAll_part_andcol = function (value) {
        this._all_part_andcol = value;
    };
    return PartenaireData;
}());
export { PartenaireData };
//# sourceMappingURL=PartenaireData.js.map