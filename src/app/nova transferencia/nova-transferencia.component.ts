import { transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransfereciaComponent {
  @Output() aoTranferir = new EventEmitter<any>();

  valor: Number;
  destino: number;

  constructor(private service: TransferenciaService ){}

  transferir() {
    console.log('Soliciatado nova transferencia');

    const valorEmitir: transferencia = {
      valor: this.valor, destino: this.destino,
      id: '',
      data: ''
    };

    this.service.adicionar(valorEmitir)
    .subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
