import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transferencia } from 'src/app/models/transferencia.model'


@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
   this.listaTransferencia = [];
 }

 get transferencias() {
   return this.listaTransferencia;
 }

 todas(): Observable<transferencia[]>{
   return this.httpClient.get<transferencia[]>(this.url);
 }

 adicionar(Transferencia: transferencia): Observable <transferencia> {
  this.hidratar(Transferencia);

  return this.httpClient.post<transferencia>(this.url, Transferencia)
 }

 private hidratar(transferencia: any){
  transferencia.data = new Date();
 }

}
