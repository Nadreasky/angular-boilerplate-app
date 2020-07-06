import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  timer = interval(1000);
  countdownTime: string = '';
  environment = environment;

  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date(Date.now()).getFullYear();
    const countdownDate = new Date(currentYear + 1, 0, 1, 0, 0, 0, 0);
    this.subcription = this.timer.subscribe(t => {
      const {days, hours, minutes, seconds } = this.calculateCountDownTime(countdownDate);
      this.countdownTime = `${days}d ${hours}h ${minutes}m ${seconds}s` 
    })
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  calculateCountDownTime(countdownDate: Date) {
    const ms = countdownDate.getTime() - Date.now();
    let minutes = Math.ceil(((ms % 86400000) % 3600000) / 60000);
    let hours = Math.floor((ms % 86400000) / 3600000);
    let days = Math.floor(ms / 86400000);
    const seconds = Math.floor((ms % 60000) / 1000);
    if (hours === 23 && minutes === 60) {
      days = days + 1;
      hours = 0;
      minutes = 0;
    }
    return {
      days, hours, minutes, seconds, ms
    };
  }

}
