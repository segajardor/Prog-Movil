import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DbService } from '../db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  country: string = '';
  address: string = '';

  constructor(private dbService: DbService, private toastController: ToastController) {}

  async register() {
    const userData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      country: this.country,
      address: this.address
    };

    try {
      await this.dbService.saveUserData(userData);
      this.presentToast('Registro exitoso. Datos guardados localmente.');
    } catch (error) {
      this.presentToast('Error al guardar datos: ' + error);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  clearFields() {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.country = '';
    this.address = '';
  }
}
