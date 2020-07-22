var LabelData = /** @class */ (function () {
    function LabelData(label, data) {
        this._label = label;
        this._data = data;
    }
    LabelData.prototype.getLabel = function () {
        return this._label;
    };
    LabelData.prototype.setLabel = function (value) {
        this._label = value;
    };
    LabelData.prototype.getData = function () {
        return this._data;
    };
    LabelData.prototype.setData = function (value) {
        this._data = value;
    };
    return LabelData;
}());
export { LabelData };
//# sourceMappingURL=LabelData.js.map