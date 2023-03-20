import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toggleModal = false;
  title = 'ng-my-clock';

  date = new Date();
  hours:number= 0;
  minutes:number= 0;
  seconds : number = 0;
  day_night:string='';
  year:number=1;
  month:number = 1;
  day:number=1;


  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.getInitData();
      }, 1000);

  }
  getInitData() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.day_night=this.hours <= 12? 'AM':'PM';
    this.hours = this.hours >= 12? this.hours -12 : this.hours;
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();


  }


  openModal(){
    this.toggleModal = true;
  }

  closeModal(){
    this.toggleModal = false;;
  }

  resetAlarm() { }

}
