import { Component, OnInit } from '@angular/core';
import { Users } from '../../../model/users';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  constructor(private userService: UserService) { }

  listUsers: Users[];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(val => {
      console.log(val.dataModel);
      this.listUsers = val.dataModel;
    })
  }

}
