import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  menuItems: Menu[] = [
    { titulo: 'Especialidades', icono: 'category', ruta: '/layout/especialidades' },
    { titulo: 'Medicos', icono: 'group_add', ruta: '/layout/medicos' },
  ];
  // Opciones para agregar al agregar roles de usuario
      /* { titulo: 'Usuarios', icono: 'person', ruta: '/layout/usuarios' },
    { titulo: 'Dashboard', icono: 'dashboard', ruta: '/layout/dashboard' }, */

  username: string = '';

  constructor(private router: Router, private sharedService: SharedService
  )// private cookieService: CookieService
  {
  }

  ngOnInit(): void {
    const usuarioSesion = this.sharedService.obtenerSesion();
    if (usuarioSesion != null) {
      this.username = usuarioSesion;
    }
  }

  cerrarSesion() {
    this.sharedService.eliminarSesion();

    // this.cookieService.delete('Authorization','/');

    this.router.navigate(['login']);
  }

}
