import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    FB.getLoginStatus(function (response) {
      console.log('STATUS:::', response);
    });
  }

  handleFBLogin() {
    FB.login((response: any) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log('login successful', 'Success!');
      } else {
        console.log('User login failed');
      }
    }, {
      scope: 'email,pages_manage_cta,pages_messaging,public_profile',
      return_scopes: true
    });
  };

  handleFBLogout() {
    FB.logout(function (response) {
      console.log('LogOut', response);
    });
  }
}
