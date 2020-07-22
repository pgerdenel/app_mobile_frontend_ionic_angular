var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from "../../providers/auth/auth";
import { ContactProvider } from "../../providers/contact/contact";
/**
 * Page de contact
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(formBuilder, validators, navCtrl, navParams, loadingCtrl, authService, contactProvider, toastCtrl) {
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.contactProvider = contactProvider;
        this.toastCtrl = toastCtrl;
        this.inSigning = false;
        this.contact_form = formBuilder.group({
            sujet: new FormControl('', [Validators.required]),
            message: new FormControl('', Validators.compose([Validators.minLength(8), Validators.maxLength(255), Validators.required])),
            email: new FormControl('', Validators.compose([EmailValidator.isValid, Validators.minLength(4), Validators.maxLength(30), Validators.required]))
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.envoyer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoader();
                        this.contactProvider.send_message(this.contact_form.get('email').value, this.contact_form.get('sujet').value, this.contact_form.get('message').value).subscribe(function (response) {
                            if (JSON.parse(JSON.stringify(response)).state === "ok") {
                                _this.toastCtrl.create({
                                    message: 'votre message a bien été envoyé',
                                    duration: 3000,
                                    position: 'bottom',
                                    showCloseButton: false
                                }).present();
                            }
                            else {
                                _this.toastCtrl.create({
                                    message: 'votre message s\'est perdu',
                                    duration: 3000,
                                    position: 'bottom',
                                    showCloseButton: false
                                }).present();
                            }
                        }, function (err) {
                            _this.toastCtrl.create({
                                message: 'votre message s\'est perdu',
                                duration: 3000,
                                position: 'bottom',
                                showCloseButton: false
                            }).present();
                            console.log("erreur d'envoi du messsage");
                        });
                        // sur résultat on annule l'animation loading
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        // sur résultat on annule l'animation loading
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Envoie du message...'
        });
        this.loading.present();
    };
    ContactPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html',
        }),
        __metadata("design:paramtypes", [FormBuilder, Validators, NavController, NavParams,
            LoadingController, AuthProvider, ContactProvider, ToastController])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map