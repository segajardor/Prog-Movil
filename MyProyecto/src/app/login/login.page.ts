import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string='';
  password: string='';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username === 'seba' && this.password === '123456') {
      this.router.navigate(['/tabs']);
    } else {
      alert('Credenciales incorrectas')
    }
  }

}
