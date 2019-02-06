import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  screen: any;
  addition: any;
  oldNum: any;
  newNum: any;

  constructor() {
    this.screen = 0;
    this.oldNum = '';
  }

  selectNum(newNum) {
    if (this.screen === 0) {
      this.screen = newNum;
    } else {
      this.screen += newNum;
    }
  }

  clear() { // clear screen
    this.screen = 0;
    this.oldNum = '';
  }

  saveNumber() {
    if (this.oldNum !== '') {
      this.newNum = this.screen;
    } else {
      this.oldNum = this.screen;
    }
  }

  complete() {
  }

  calcType(type) {
    if (type === '+') {
      this.saveNumber();
      if (this.oldNum !== '' && this.newNum !== undefined) {
        this.screen = parseFloat(this.newNum + this.oldNum);
        this.oldNum = '';
      }
    }
  }

  ngOnInit() {
    this.screen = 0;
   }
}



