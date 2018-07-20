import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the PossibleProblemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-possible-problems',
  templateUrl: 'possible-problems.html',
})
export class PossibleProblemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public navController: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PossibleProblemsPage');
  }

}
