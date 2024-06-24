import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public db!: SQLiteObject;

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false); 

  constructor(private sqlite: SQLite,private toastController: ToastController) {

    this.initDatabase();  
   }
  
   private initDatabase() {
    this.sqlite.create({
      name: 'registro.db',
      location: 'default'
    }).then((db: SQLiteObject) => {      
      this.isDBReady.next(true); 
      this.db = db;
      this.createTables();
      this.isDBReady.next(true);
      this.presentToast('Base de datos y tabla creadas con éxito'); 

    }).catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  private createTables() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        lastname TEXT,
        email TEXT UNIQUE,
        password TEXT,
        country TEXT,
        address TEXT
      )`, [])
      .then(() => this.presentToast('Tabla usuarios creada exitosamente'))
      .catch(error => this.presentToast('Error al crear tabla usuarios:' + error));
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }
}
