import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private storage: Storage, private toastController: ToastController) {
    this.initDatabase();
  }

  private async initDatabase() {
    this.storage = await this.storage.create();
    this.isDBReady.next(true);
    this.presentToast('Base de datos inicializada con éxito');
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async saveUserData(data: any) {
    await this.storage.set('userData', data);
    this.presentToast('Datos de usuario guardados correctamente');
  }

  async getUserData() {
    const data = await this.storage.get('userData');
    if (data) {
      this.presentToast('Datos de usuario obtenidos');
      return data;
    } else {
      this.presentToast('No se encontraron datos de usuario');
      return null;
    }
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }
}
