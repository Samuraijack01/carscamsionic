import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results';




/**
 * Generated class for the PossibleProblemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Items {
  icon: any;
  title: any;
  preview: any;
  id: any;
  pic: any;
  cost: any;
  desc: any;
}
@IonicPage()
@Component({
  selector: 'page-possible-problems',
  templateUrl: 'possible-problems.html',
})
export class PossibleProblemsPage {

  searchQuery: string = '';
  items: Items[];

  constructor(public navCtrl:NavController) {
    this.initializeItems();
  }

  initializeItems() {
     this.items = [
      {
        icon: '<i class="fas fa-battery-three-quarters"></i>',
        title: 'Low Car Battery',
        preview: 'If you have a car battery problem you should do this',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is 9,0000",
        desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: "battery"
      },
      {
        icon: '<i class="fas fa-battery-three-quarters"></i>',
        title: 'Battery exploded',
        preview: 'If you have a car battery that exploded problem you should do this',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is 9,0000",
        desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: "battery-exploded"
      },
      {
        icon: '<i class="fas fa-battery-three-quarters"></i>',
        title: 'Oil Change',
        preview: 'If you have a car battery that exploded problem you should do this',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is 9,0000",
        desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: "oil-change"
      }
    ]
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  clickItem(id){
    this.navCtrl.push(ResultsPage, {id: id});
  }

}
