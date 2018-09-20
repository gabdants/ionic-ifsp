import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../../modelos/aluno';

@Injectable()
export class AlunosServiceProvider {

  constructor(private _http: HttpClient) {
    
  }
  lista(){
    return this._http.get<Aluno[]>('http://localhost:8080/api/carro/listaTodos')        
  }

}
