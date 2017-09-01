import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public resultCal;
  public resultBmi;
  constructor(public navCtrl: NavController) {

  }

  calculateCal(weight,height,age,sex){

    //bmr
    //66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) – (6.8 x อายุ)
    //665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) – (4.7 x อายุ)

    //bmi
    //weight/height;
    //alert(sex);

    if(sex == "male"){
      this.resultCal = 66 + (13.7*weight)+(5*height)-(6.8*age);
    }else if(sex = "female"){
      this.resultCal = 665 + (9.6*weight)+(1.8*height)-(4.7*age);
    }
    

    this.resultBmi = weight/(height*height);
    //this.resultBmi = 30;
    this.navCtrl.push("CaloriesCalPage",{resultCal: this.resultCal,resultBmi: this.resultBmi});
  }

}
