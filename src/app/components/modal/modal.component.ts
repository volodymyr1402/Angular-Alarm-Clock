import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  soundUrl = false;
  waiting = false;
  alarmSound = 'https://www.youtube.com/embed/B5rr6tJLIIU'

  title: string = 'Set Alarm clock';
  alarmHour: number = 0;
  alarmMinute: number = 0;

  constructor(public appComponent: AppComponent) {}

  Alarm() {
    // console.log(
    //   this.alarmHour,
    //   this.appComponent.hours,
    //   this.alarmMinute,
    //   this.appComponent.minutes
    // );
this.waiting = true;
    setInterval(() => {
      if (
        this.alarmHour === this.appComponent.hours &&
        this.alarmMinute === this.appComponent.minutes
      ) {
        this.soundUrl = true ;
        this.alarmHour = 0
        this.alarmMinute = 0
        this.waiting = false;
      }

    }, 1000);


// clearInterval(1);
  }

  close() {
    this.appComponent.closeModal();
  }
}
