import { Component } from '@angular/core';
import { TransferenciaService } from './service/Transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  mensagem: any;

  constructor(private service: TransferenciaService){

  }

  transferir($event){
    this.service.adicionar($event);
  }

  exibirModalErro($event){
    this.mensagem = $event;
  }

}
