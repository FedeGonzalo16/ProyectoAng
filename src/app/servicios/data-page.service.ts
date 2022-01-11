import { Injectable } from '@angular/core';
import  { InfoPagina } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataPageService {

  public data:InfoPagina = {};

  public dataFetch: any[] = [];

  constructor(public http: HttpClient) { 

    console.log('DataPageService is ready');

    this.cargarContacto();
    this.cargarUsuarios();

    this.http.get('/assets/data/data.json')
    .subscribe((resp: InfoPagina) => {
      this.data = resp;
      console.log(resp);
    });
  }

  /* Fetch a los datos del que decide contactarse */
  private cargarContacto() {
    this.http.get('/api/contact')
    .subscribe((resp: any) => {
      console.log(resp);
    });

  }

  /* Fetch al usuario registrado */
  private cargarUsuarios() {
    this.http.get('api/login')
    .subscribe((resp: any) => {
      console.log(resp);
    });

  }

}
