import{HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 public title = 'client';
 public users :any;
 public test :any=[1,2,3]

  constructor(private http:HttpClient) {
    console.log('App component initialized!');
  }

  ngOnInit(): void {
   this.http.get('https://localhost:5001/api/users').subscribe({
     next:response=> this.users = response,
     error:error=> console.log(error),
     complete:()=>console.log('Request completed'+ this.users[0].id),
   })
  }
  
}
