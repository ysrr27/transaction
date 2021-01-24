import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private router: Router) { }

  listarTodos(){
    return this.http.get(`http://localhost:3000/prueba/todos`);
  }

  crear(data:any){
    return this.http.post(`http://localhost:3000/prueba/crear`, data);
  }

  eliminar(id:any){
    return this.http.post(`http://localhost:3000/prueba/eliminar`, {"NU_ID": id});
  }

  getDataid(id:any){
    return this.http.get(`http://localhost:3000/prueba/get/${id}`);
  }

  actualizar(data:any){
    return this.http.post(`http://localhost:3000/prueba/actualizar`, data);
  }
}
