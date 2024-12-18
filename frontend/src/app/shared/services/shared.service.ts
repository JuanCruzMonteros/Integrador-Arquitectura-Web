import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from 'src/app/user/interfaces/sesion.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _snackBar: MatSnackBar) { }

  mostrarAlerta(mensaje: string, tipo: string){
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: "end",
      verticalPosition:"top",
      duration:3000
    })
  }

  guardarSesion(sesion: Sesion) {
      localStorage.setItem("usuarioSesion",JSON.stringify(sesion.username));
  }

  obtenerSesion() {
    const sesionString = localStorage.getItem("usuarioSesion");
    const usuarioSesion = JSON.parse(sesionString!);
    return usuarioSesion;
  }

  eliminarSesion(){
    localStorage.removeItem("usuarioSesion");
  }

}