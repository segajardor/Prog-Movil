import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usernameRecibido: string='';
  nameRecibido: string='';
  lastnameRecibido: string='';
  emailRecibido: string='';
  countryRecibido: string='';
  addressRecibido: string='';

  constructor(private router: Router,
              private activateroute: ActivatedRoute) {
                this.activateroute.queryParams.subscribe(params => {
                  
                  if (this.router.getCurrentNavigation()?.extras?.state) {

                    this.usernameRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usernameEnviado'];
                    this.nameRecibido = this.router.getCurrentNavigation()?.extras?.state?.['nameEnviado'];
                    this.lastnameRecibido = this.router.getCurrentNavigation()?.extras?.state?.['lastnameEnviado'];
                    this.emailRecibido = this.router.getCurrentNavigation()?.extras?.state?.['emailEnviado'];
                    this.countryRecibido = this.router.getCurrentNavigation()?.extras?.state?.['countryEnviado'];
                    this.addressRecibido = this.router.getCurrentNavigation()?.extras?.state?.['addressEnviado'];
                  }
                })
}

  ngOnInit() {
  }

}
