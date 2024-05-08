import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './modules/account/models';
import { AccountService } from './modules/account/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    console.log('App component initialized!');
  }

  ngOnInit(): void {

  }

}
