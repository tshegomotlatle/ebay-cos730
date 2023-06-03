import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ebay-cos730-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ""
  password: string = ""
  users = [
    {
      email: "tshego.motlatle.dev@gmail.com",
      password: "Pasword@1"
    },
    {
      email: "tshegomotlatle88@gmail.com",
      password: "Pasword@2"
    }
  ]


  constructor(
    private router: Router
  ) {

  }

  login() {
    const user = this.users.filter(
      (user) => {
        if (user.email == this.email)
          return true;
        else
          return false;
      }
    )[0]
    console.log(user);
    console.log(this.email);
    console.log(this.password);

    if (user.password = this.password) {
      console.log("Logged In succesfully");
      localStorage.setItem("loggedIn", "true")
      localStorage.setItem("email", this.email)
      // this.router.navigate(["/"])
      this.router.navigate(["/browseNFT"])
    }
  }
}
