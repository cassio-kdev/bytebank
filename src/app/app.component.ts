import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];
  mensagem: any;

  transferir($event){
    const transfer = {...$event, data: new Date()}
    this.transferencias.push(transfer);
  }

  exibirModalErro($event){
    this.mensagem = $event;
  }

}
