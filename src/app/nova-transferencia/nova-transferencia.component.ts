import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number = 0;
  destino: number = 0;

  transferir() {
    const objEmitter = { valor: this.valor, destino: this.destino };

    if (this.ehValido()) {
      this.aoTransferir.emit(objEmitter);
      this.limparCampos();
    }
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      window.alert('Informe um valor válido');
      //this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
