import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  public title="Monitoring"
  public users:user[];
  constructor(private userService:UserService){
    this.users=[]
  }
  ngOnInit(): void {
      this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: user[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
