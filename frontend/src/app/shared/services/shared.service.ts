import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from 'src/app/user/interfaces/sesion.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly userStorageKey: string = "userSesion";

  constructor(private _snackBar: MatSnackBar) { }

  alert(message: string, type: string) {
    this._snackBar.open(message, type, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    })
  }

  saveSession(session: Sesion) {
    localStorage.setItem(this.userStorageKey, JSON.stringify(session))
  }

  getSession(session: Sesion) {
    const sessionString = localStorage.getItem(this.userStorageKey)
    return JSON.parse(sessionString!)
  }

  deleteSession() {
    localStorage.removeItem(this.userStorageKey)
  }
}
