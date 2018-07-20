import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  public items = [
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

  public currentItem;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const id = this.navParams.get('id');

    if (id && id.trim() != '') {
      this.currentItem = this.items.filter((item) => {
        if(item.id === id){
          return item
        }
      })
      this.currentItem = this.currentItem[0];
    }


  }


}
