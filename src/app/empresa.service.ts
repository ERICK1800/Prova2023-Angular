import { Empresa } from './empresas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = "http://localhost:3000/empresas";

  constructor(private Http: HttpClient) { }

  getEmpresa(): Observable<Empresa[]>{
    return this.Http.get<Empresa[]>(this.url);
  }

  saveEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.Http.post<Empresa>(this.url, empresa);
  }

  delEmpresa(empresa: Empresa): Observable<void>{
    return this.Http.delete<void>(this.url + "/" + empresa.id);
  }
}
