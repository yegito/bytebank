import { transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(){
    this.service.todas().subscribe((transferencias: transferencia[] ) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    } );
  }

}
