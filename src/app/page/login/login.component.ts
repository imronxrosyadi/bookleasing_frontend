import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userSerivce: UserService, private auth: AuthService) { }

  user = new Users;

  ngOnInit(): void {
  }

  onLogin(): void {
    this.userSerivce.login(this.user.username, this.user.password).subscribe(val => {
      this.auth.saveToken(val.token);
      this.auth.saveProfile(val.profile);
      console.log(val.token);
      console.log(val.profile);
        this.router.navigateByUrl('/dashboard');
    });
  }

}
