import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaloriesCalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calories-cal',
  templateUrl: 'calories-cal.html',
})
export class CaloriesCalPage {
 
  public resultCal;
  public resultBmi;
  public resultDescript;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.resultCal = this.navParams.get('resultCal');
    this.resultBmi = this.navParams.get('resultBmi');

    //resultCal = "aa";
    if(this.navParams.get('resultBmi') > 23.4) {this.resultDescript = "กินไรเยอะแยะ"; }
    else if(this.navParams.get('resultBmi') < 18.5) {this.resultDescript = "ไส้แห้งอะ";}
    else {this.resultDescript = "พระเอกชัด ๆ ";}
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaloriesCalPage');
  }

}
