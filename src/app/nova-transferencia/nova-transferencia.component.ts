import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../service/Transferencia.service';

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

  constructor(private service: TransferenciaService) {}

  transferir() {
    const transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(transferencia).subscribe(result => {
      console.log(result);
      this.limparCampos();
    },
      error => console.error(error)
    )
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
