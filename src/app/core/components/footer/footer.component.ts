import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  welcomeMsg: string = '';

  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.welcomeMsg = 'HELLO ' + date.getFullYear().toString();
  }

}
