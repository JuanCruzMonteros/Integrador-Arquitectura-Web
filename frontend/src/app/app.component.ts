import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  usuarios: any = {}
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    /* this.http.get('http://localhost:5273/api/Usuario').subscribe({
      next: response => this.usuarios = response,
      error: error => console.log('error:', error),
      complete: () => console.log('la solicitud se completo')
    }) */
  }
}
