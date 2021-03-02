import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/app/model/roles';
import { Users } from 'src/app/model/users';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  listRole: Roles[];
  selectedRole = new Roles();
  username: string;
  password: string;

  constructor(private roleService: RoleService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(all => {
      this.listRole = all.dataModel;
      this.selectedRole = all.dataModel[0];
      console.log(this.listRole);
    })
  }

  addUser(): void {
    let role = new Roles();
    role.roleCode = this.selectedRole.roleCode;

    let user = new Users();
    user.username = this.username;
    user.password = this.password;
    user.roleId = role;

    this.userService.addUser(user).subscribe(val => {
      console.log(val);
      this.route.navigateByUrl('/list-users');
    })
  }

}
