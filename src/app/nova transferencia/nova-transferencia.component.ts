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

  transferir() {
    console.log('Soliciatado nova transferencia');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTranferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
