import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: any = {};

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    try {
      const storedUserData = await this.dbService.getUserData();
      if (storedUserData) {
        this.userData = storedUserData;
      } else {
        console.log('No se encontraron datos de usuario.');
      }
    } catch (error) {
      console.error('Error al cargar datos de usuario:', error);
    }
  }

}
