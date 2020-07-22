var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Regroupe les communications réseau
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http_client) {
        this.http_client = http_client;
        console.log('Hello AuthProvider Provider');
        this.PORT = ":9090";
        this.URL_BASE = "http://locahost" + this.PORT;
        this.URL_CONTACT = "/contact.php";
    }
    AuthProvider.prototype.send_email = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /* angular httpclient v2 */
            // définit un header avec un contenu de type JSON
            var _headers = new HttpHeaders();
            var headers = _headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            // effectue une requête http de type post avec les détais en JSON du message de contact
            // si la requête est un succès, le server renvoie un boolean true 1
            _this.http_client.post(_this.URL_BASE + _this.URL_CONTACT, JSON.stringify(details), options)
                .subscribe(function (res) {
                console.log("contact res ", res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map