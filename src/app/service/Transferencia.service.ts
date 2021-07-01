import { Transferencia } from './../modelo/transferencia.modelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';
  private listaTransferencia: any[];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}