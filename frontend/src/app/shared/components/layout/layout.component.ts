import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  username: string = '';

  constructor(private router: Router, private sharedService: SharedService
  )// private cookieService: CookieService
  {
  }

  ngOnInit(): void {
    const usuarioSesion = this.sharedService.getSession();
    if (usuarioSesion != null) {
      this.username = usuarioSesion;
    }
  }

  cerrarSesion() {
    this.sharedService.deleteSession();

    // this.cookieService.delete('Authorization','/');

    this.router.navigate(['login']);
  }

}
