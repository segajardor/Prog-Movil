import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: any='';
  lastname: any='';
  email: any='';
  password: any='';
  country: any='';
  address: any='';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
     console.log({
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      country: this.country,
      address: this.address,
    });

    this.router.navigate(['/login']);
  }
}

