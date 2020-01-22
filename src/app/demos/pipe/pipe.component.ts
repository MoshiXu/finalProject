import { Component, OnInit } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  money =100;
  moneyList=[5,25,33,41,89,90];
  newMoney;

  constructor() { }

  fetchMoney = new Promise((resolve, reject) => {
    setTimeout(
      () =>resolve(200),
      1000
    );
  });

  ngOnInit() {
  }

  addMoney() {

  }
}
