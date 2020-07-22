import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from "../../providers/auth/auth";
import {ContactProvider} from "../../providers/contact/contact";

/**
 * Page de contact
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact_form: any;
  inSigning : boolean;
  loading: any;

  constructor(public formBuilder: FormBuilder, public validators: Validators, public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public authService: AuthProvider, private contactProvider:ContactProvider, private toastCtrl:ToastController) {
    this.inSigning = false;
    this.contact_form = formBuilder.group({
    sujet: new FormControl('', [Validators.required]),
    message: new FormControl('', Validators.compose([Validators.minLength(8), Validators.maxLength(255), Validators.required])),
    email: new FormControl('', Validators.compose([EmailValidator.isValid, Validators.minLength(4), Validators.maxLength(30), Validators.required]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  async envoyer() {

    this.showLoader();

    this.contactProvider.send_message(this.contact_form.get('email').value,this.contact_form.get('sujet').value, this.contact_form.get('message').value).subscribe(response => {
      if(JSON.parse(JSON.stringify(response)).state === "ok") {
        this.toastCtrl.create({
          message: 'votre message a bien été envoyé',
          duration: 3000,
          position: 'bottom',
          showCloseButton: false
        }).present();
      }
      else {
        this.toastCtrl.create({
          message: 'votre message s\'est perdu',
          duration: 3000,
          position: 'bottom',
          showCloseButton: false
        }).present();
      }
    }, err => {

      this.toastCtrl.create({
        message: 'votre message s\'est perdu',
        duration: 3000,
        position: 'bottom',
        showCloseButton: false
      }).present();
      console.log("erreur d'envoi du messsage");
    });

    // sur résultat on annule l'animation loading
    await this.loading.dismiss();
  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Envoie du message...'
    });

    this.loading.present();

  }



}
