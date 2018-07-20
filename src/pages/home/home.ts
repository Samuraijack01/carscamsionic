import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PossibleProblemsPage } from '../possible-problems/possible-problems';



@Component({
  templateUrl: 'home.html',
  selector: 'page-home',
})
export class HomePage {
  problemsPage = PossibleProblemsPage;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navController: NavController) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Car Vin Number',
      subTitle: 'A vin is blah blah ',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  movePage(){
    this.navController.setRoot(PossibleProblemsPage);
  }

}
