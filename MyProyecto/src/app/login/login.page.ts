import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string='';
  password: string='';

  constructor(private router: Router,
              private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username.trim() == 'seba' && this.password.trim() == '123456') {
      let NavigationExtras: NavigationExtras = {
        state: {
          usernameEnviado: this.username,
          passwordEnviada: this.password
        }
      }
      this.router.navigate(['/tabs'], NavigationExtras);
    } else {
      this.presentAlert('Credenciales incorrectas')
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
