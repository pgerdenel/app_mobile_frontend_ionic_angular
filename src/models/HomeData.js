import { url_base_https_aws } from "../constant/constant";
var HomeData = /** @class */ (function () {
    function HomeData(phrases, urls_img) {
        //console.log("HomeData constructor called with phrases= "+phrases+" and url_img= "+url_img);
        this._phrases = phrases;
        this._url_img = urls_img;
        this._phrase_1 = "";
        this._phrase_2 = "";
    }
    HomeData.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    HomeData.prototype.fromJson = function (data) {
        return new HomeData(data['phrases'], data['url_img']);
    };
    HomeData.prototype.getPhrases = function () {
        return this._phrases;
    };
    HomeData.prototype.setPhrases = function (value) {
        //console.log("phrase setté= "+value);
        this._phrases = value;
        var words = this._phrases.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (i == 0 || i == 1) {
                this._phrase_1 += ((this._phrase_1.length == 0) ? words[i] : " " + words[i]);
            }
            else {
                this._phrase_2 += (this._phrase_2.length == 0) ? words[i] : " " + words[i];
            }
        }
        console.log("phrase1= " + this._phrase_1);
        console.log("phrase2= " + this._phrase_2);
    };
    HomeData.prototype.getUrls_img = function () {
        return this._urls_img;
    };
    HomeData.prototype.setUrls_img = function (value) {
        this._urls_img = value;
        //console.log("url_img = "+value[0]);
        this._url_img = url_base_https_aws + "/" + value[0];
    };
    HomeData.prototype.getPhrase_1 = function () {
        return this._phrase_1;
    };
    HomeData.prototype.setPhrase_1 = function (value) {
        this._phrase_1 = value;
    };
    HomeData.prototype.getPhrase_2 = function () {
        return this._phrase_2;
    };
    HomeData.prototype.setPhrase_2 = function (value) {
        this._phrase_2 = value;
    };
    HomeData.prototype.getUrl_img = function () {
        return this._url_img;
    };
    HomeData.prototype.setUrl_img = function (value) {
        this._url_img = value;
    };
    return HomeData;
}());
export { HomeData };
//# sourceMappingURL=HomeData.js.map