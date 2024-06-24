import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dbService: DbService
  ) { }

  ngOnInit() {
  }

  async onLogin() {
    try {
      const storedUserData = await this.dbService.getUserData();
      if (storedUserData && storedUserData.username === this.username.trim() && storedUserData.password === this.password.trim()) {
        let navigationExtras: NavigationExtras = {
          state: {
            usernameEnviado: storedUserData.username
          }
        };
        this.router.navigate(['/tabs/profile'], navigationExtras);
      } else {
        this.presentAlert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al autenticar usuario:', error);
      this.presentAlert('Error al autenticar usuario');
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

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
